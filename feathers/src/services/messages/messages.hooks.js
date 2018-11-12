
// https://github.com/feathers-plus/feathers-hooks-common
const { disablePagination } = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [],
    find: [disablePagination()],
    get: [],
    create: [
      // it CAN be async https://docs.feathersjs.com/api/hooks.html#asynchronous-hooks
      (context) => {
        // https://docs.feathersjs.com/api/hooks.html#hook-context
        context.data.timestamp = Date.now();
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
