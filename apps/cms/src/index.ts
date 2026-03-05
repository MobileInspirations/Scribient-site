export default {
  async register() {},
  async bootstrap({ strapi }: { strapi: any }) {
    strapi.log.info("Scribient CMS bootstrap complete.");
  },
};
