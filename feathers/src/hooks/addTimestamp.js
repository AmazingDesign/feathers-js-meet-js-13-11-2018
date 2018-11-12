module.exports = function () {
  return (context) => {
    context.data.timestamp = Date.now();
  };
};
