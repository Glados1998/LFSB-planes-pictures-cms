'use strict';

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::visitor-counter.visitor-counter', ({strapi}) => ({
  async find(ctx) {
    const entity = await strapi.documents('api::visitor-counter.visitor-counter').findOne({
      documentId: "__TODO__"
    });
    return this.transformResponse(entity);
  },

  async increment(ctx) {
    let current = await strapi.documents('api::visitor-counter.visitor-counter').findOne({
      documentId: "__TODO__"
    });

    if (!current) {
      current = await strapi.documents('api::visitor-counter.visitor-counter').create({
        data: {count: 1},
      });
    } else {
      const currentCount = typeof current.count === 'number'
        ? current.count
        : parseInt(current.count, 10) || 0;

      current = await strapi.documents('api::visitor-counter.visitor-counter').update({
        documentId: "__TODO__",
        data: {count: currentCount + 1}
      });
    }

    return this.transformResponse(current);
  }
}));
