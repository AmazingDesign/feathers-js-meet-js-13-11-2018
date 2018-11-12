
// https://github.com/feathers-plus/feathers-hooks-common
// https://feathers-plus.github.io/v1/feathers-hooks-common/index.html#disablepagination
const { disablePagination } = require('feathers-hooks-common');
const addTimestamp = require('../../hooks/addTimestamp');

module.exports = {
  before: {
    all: [],
    find: [
      disablePagination()
    ],
    get: [],
    create: [
      // it CAN be async https://docs.feathersjs.com/api/hooks.html#asynchronous-hooks
      addTimestamp(),
      // hooks will be executed one after another
      (context) => {
        // https://docs.feathersjs.com/api/hooks.html#hook-context
        if (context.params.user) {
          context.data.auth = true;
        }
      },
      (context) => {
        context.data.avatar = `https://api.adorable.io/avatars/40/${context.data.author}`;
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [
      (context) => {
        console.log(context.result)
        if (!context.params.user) {
          context.result = context.result.filter(message => !message.auth);
        }
      }
    ],
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
