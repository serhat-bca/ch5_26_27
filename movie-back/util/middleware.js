// middleware method creation
const requestLogger = (req, res, next) => {
  // middleware logic, update req if needed.
  // once you are done call next method for this request
  // to move forward
  console.log(`Request Method: ${req.method}`);
  console.log(`Request Path: ${req.path}`);
  if (req.body && Object.keys(req.body).length != 0) {
    console.log("Request Body: ", req.body);
  }
  next();
};

module.exports = { requestLogger };
