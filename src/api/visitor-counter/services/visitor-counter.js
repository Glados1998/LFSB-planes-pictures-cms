'use strict';

/**
 * visitor-counter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::visitor-counter.visitor-counter');
