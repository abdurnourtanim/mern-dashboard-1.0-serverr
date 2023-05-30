const generalController = (req, res, next) => {
  try {
    res.send("hello");
  } catch (error) {
    //
  }
};

module.exports = generalController;
