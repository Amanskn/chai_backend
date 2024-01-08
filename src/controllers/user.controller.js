import { asyncHandler } from "./../utils/async-handler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    msg: "All good, Go ahead :)",
  });
});

export { registerUser };
