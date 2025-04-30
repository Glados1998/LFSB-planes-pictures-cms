'use strict';

/**
 * visitor-counter router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::visitor-counter.visitor-counter');
