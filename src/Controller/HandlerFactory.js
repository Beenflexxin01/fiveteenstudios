const catchAsync = require("./catchAsync");
// exports.getAllProducts = (Model) =>
//   catchAsync(async function (req, res, next) {
//     const doc = Model.find(req.body);

//     res.status(200).json({
//       status: "Success",
//       data: { doc },
//     });
//   });

exports.getAllProducts("/products", async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello from the server",
  });
});

// exports.getAllProducts = (model) => {
//   catchAsync(async (req, res, next) => {
//     let query = model.find(req.body);
//     const doc = await query;
//     res.status(200).json({
//       status: "success",
//       data: { doc },
//     });
//     next();
//   });
// };
