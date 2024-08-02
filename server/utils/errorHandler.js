const errorHandler = (code, message) => {
  return {
    statusCode: code,
    error: message,
  };
};

module.exports = errorHandler;
