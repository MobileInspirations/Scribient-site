const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const SRC = path.resolve(__dirname, "..", "src");
const DIST_SRC = path.resolve(__dirname, "..", "dist", "src");

function copyJsonFiles(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyJsonFiles(srcPath, destPath);
    } else if (entry.name.endsWith(".json")) {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

let lastCopy = 0;
const DEBOUNCE_MS = 500;

function tryCopy() {
  if (!fs.existsSync(DIST_SRC)) return;
  const now = Date.now();
  if (now - lastCopy < DEBOUNCE_MS) return;
  lastCopy = now;
  copyJsonFiles(SRC, DIST_SRC);
}

const interval = setInterval(tryCopy, 800);

const child = spawn("strapi", ["develop"], {
  stdio: "inherit",
  shell: true,
  cwd: path.resolve(__dirname, ".."),
  env: { ...process.env },
});

child.on("exit", (code) => {
  clearInterval(interval);
  process.exit(code ?? 1);
});

process.on("SIGINT", () => child.kill("SIGINT"));
process.on("SIGTERM", () => child.kill("SIGTERM"));
