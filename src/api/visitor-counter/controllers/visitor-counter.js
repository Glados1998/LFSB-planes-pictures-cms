'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::visitor-counter.visitor-counter', ({ strapi }) => ({
  async find(ctx) {
    // Explicitly use ID 1 for single types
    const entity = await strapi.entityService.findOne('api::visitor-counter.visitor-counter', 1);
    return this.transformResponse(entity);
  },

  async increment(ctx) {
    // Always use ID 1 for single types (safety for single type pattern)
    let current = await strapi.entityService.findOne('api::visitor-counter.visitor-counter', 1);

    if (!current) {
      current = await strapi.entityService.create('api::visitor-counter.visitor-counter', {
        data: { count: 1 },
      });
    } else {
      current = await strapi.entityService.update('api::visitor-counter.visitor-counter', 1, {
        data: { count: current.count + 1 },
      });
    }

    return this.transformResponse(current);
  }
}));
