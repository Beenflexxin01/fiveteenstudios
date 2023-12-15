import catchAsync from "./catchAsync";
import AppError from "./appError";

exports.getOne = (Model, popOptions) =>
  catchAsync(async function (req, res, next) {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);

    const doc = await query;

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "Success",
      data: { doc },
    });
  });
