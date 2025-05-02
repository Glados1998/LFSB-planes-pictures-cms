'use strict';

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::visitor-counter.visitor-counter', ({strapi}) => ({
  async find(ctx) {
    const entity = await strapi.entityService.findOne('api::visitor-counter.visitor-counter', 1);
    return this.transformResponse(entity);
  },

  async increment(ctx) {
    let current = await strapi.entityService.findOne('api::visitor-counter.visitor-counter', 1);

    if (!current) {
      current = await strapi.entityService.create('api::visitor-counter.visitor-counter', {
        data: {count: 1},
      });
    } else {
      const currentCount = typeof current.count === 'number'
        ? current.count
        : parseInt(current.count, 10) || 0;

      current = await strapi.entityService.update('api::visitor-counter.visitor-counter', 1, {
        data: {count: currentCount + 1},
      });
    }

    return this.transformResponse(current);
  }
}));
