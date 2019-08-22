global.fetch = require('cross-fetch');
const { configure } = require('mobx');
module.exports = async () => {
  process.env.RUNTIME_ENV = 'local_dev';
  configure({
    disableErrorBoundaries: true,
    enforceActions: 'observed'
  });
};
