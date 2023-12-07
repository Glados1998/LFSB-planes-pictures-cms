'use strict';

/**
 * aircraft controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::aircraft.aircraft');
