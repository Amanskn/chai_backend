const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      return next(err);
    });
  };
};

// const asyncHandler = (requestHandler) => async (req, res, next) => {
//   try {
//     await requestHandler();
//   } catch (error) {
//     res.status(error.statusCode || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export { asyncHandler };
