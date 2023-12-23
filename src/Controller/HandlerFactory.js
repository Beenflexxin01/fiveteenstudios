exports.getAllProducts("/products", async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello from the server",
  });
});


