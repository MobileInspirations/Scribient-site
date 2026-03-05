"use client";

import { useEffect, useEffectEvent, useId, useRef } from "react";

export function TurnstileField({
  onTokenChange,
}: {
  onTokenChange: (value: string) => void;
}) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const handleTokenChange = useEffectEvent((value: string) => {
    onTokenChange(value);
  });

  useEffect(() => {
    if (!siteKey) {
      handleTokenChange("dev-token");
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-turnstile="true"]',
    );

    const renderWidget = () => {
      if (!containerRef.current || !window.turnstile || widgetIdRef.current) {
        return;
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token) => handleTokenChange(token),
        "expired-callback": () => handleTokenChange(""),
        theme: "light",
      });
    };

    if (existingScript) {
      if (window.turnstile) {
        renderWidget();
      } else {
        existingScript.addEventListener("load", renderWidget);
      }

      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.dataset.turnstile = "true";
    script.addEventListener("load", renderWidget);
    document.head.appendChild(script);

    return () => {
      existingScript?.removeEventListener("load", renderWidget);
      script.removeEventListener("load", renderWidget);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [handleTokenChange, siteKey]);

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-[var(--color-ink)]">
        Verification
      </label>
      <div id={id} ref={containerRef} className="min-h-16 rounded-2xl border border-[var(--color-border)] bg-white p-3" />
      {!siteKey ? (
        <p className="text-xs text-[var(--color-muted)]">
          Turnstile is not configured in this environment. Development submissions use a placeholder token.
        </p>
      ) : null}
    </div>
  );
}
