'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::visitor-counter.visitor-counter', ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.entityService.findOne('api::visitor-counter.visitor-counter');
    return this.transformResponse(entity);
  },

  async increment(ctx) {
    let current = await strapi.entityService.findOne('api::visitor-counter.visitor-counter');

    if (!current) {
      current = await strapi.entityService.create('api::visitor-counter.visitor-counter', {
        data: { count: 1 },
      });
    } else {
      current = await strapi.entityService.update('api::visitor-counter.visitor-counter', current.id, {
        data: { count: current.count + 1 },
      });
    }

    return this.transformResponse(current);
  }
}));
