'use strict';

/**
 * aircraft service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::aircraft.aircraft');
