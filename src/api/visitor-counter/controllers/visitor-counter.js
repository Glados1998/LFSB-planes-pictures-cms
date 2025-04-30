'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::visitor-counter.visitor-counter', ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.entityService.findOne('api::visitor-counter.visitor-counter');
    return this.transformResponse(entity);
  },

  async increment(ctx) {
    const current = await strapi.entityService.findOne('api::visitor-counter.visitor-counter');

    const updated = await strapi.entityService.update('api::visitor-counter.visitor-counter', current.id, {
      data: { count: current.count + 1 },
    });

    return this.transformResponse(updated);
  },
}));
