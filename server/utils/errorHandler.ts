const errorHandler = (code: number, message:string):{statusCode: number, error: string} => {
  return {
    statusCode: code,
    error: message,
  };
};

module.exports = errorHandler;
