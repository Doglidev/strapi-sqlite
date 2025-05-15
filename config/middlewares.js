module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  {
    name: 'strapi::static',
    config: {
      path: 'public',  // acá le decís que la carpeta pública está en la raíz /public
    },
  },
  'strapi::public',
];
