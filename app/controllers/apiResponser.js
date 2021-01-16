const successResponse = (code, data) => {
  return {
    code,
    status: true,
    data,
  };
};

const errorResponse = (code, message) => {
  return {
    code,
    status: false,
    error: { message },
  };
};

exports.successResponse = successResponse;
exports.errorResponse = errorResponse;
