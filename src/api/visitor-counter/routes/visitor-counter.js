'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/visitor-counter',
      handler: 'visitor-counter.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/visitor-counter/increment',
      handler: 'visitor-counter.increment',
      config: {
        auth: false,
      },
    },
  ],
};
