const {
  body,
  param,
  validationResult,
  matchedData,
} = require("express-validator");
const boom = require("@hapi/boom");

const checkValidations = (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      const message = errorMessages.join(". ");

      throw boom.badRequest(message);
    }

    const requiredData = matchedData(req, { includeOptionals: false });
    delete requiredData.id;
    req.body = requiredData;
    next();
  } catch (error) {
    next(error);
  }
};

const createUserValidators = [
  body("firstName")
    .isString()
    .withMessage("firstName must be a string")
    .notEmpty()
    .withMessage("firstName must not be empty"),
  body("lastName")
    .isString()
    .withMessage("lastName must be a string")
    .notEmpty()
    .withMessage("lastName must not be empty"),
  body("email")
    .isEmail()
    .withMessage("must provide a valid email")
    .notEmpty()
    .withMessage("email must not be empty"),
  body("password")
    .isString()
    .withMessage("password must be a string")
    .notEmpty()
    .withMessage("password must not be empty")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters"),
  body("address")
    .isString()
    .withMessage("address must be a string")
    .notEmpty()
    .withMessage("address must not be empty")
    .isLength({ min: 6 })
    .withMessage("address must be at least 6 characters")
    .optional(),
  body("username")
    .isString()
    .withMessage("username must be a string")
    .notEmpty()
    .withMessage("username must not be empty")
    .isLength({ min: 4 })
    .withMessage("username must be at least 4 characters")
    .optional(),
  checkValidations,
];

const createProductValidators = [
  body("name")
    .notEmpty()
    .withMessage("name must not be empty")
    .isString()
    .withMessage("name must be a string")
    .isLength({ min: 3 })
    .withMessage("name must be at least 3 characters"),
  body("shortDescription")
    .notEmpty()
    .withMessage("shortDescription must not be empty")
    .isString()
    .withMessage("shortDescription must be a string")
    .isLength({ min: 10 })
    .withMessage("shortDescription must be at least 10 characters"),
  body("largeDescription")
    .notEmpty()
    .withMessage("largeDescription must not be empty")
    .isString()
    .withMessage("largeDescription must be a string")
    .isLength({ min: 20 })
    .withMessage("largeDescription must be at least 20 characters"),
  body("price")
    .notEmpty()
    .withMessage("price must not be empty")
    .toFloat()
    .isFloat({ min: 0 })
    .withMessage("price must be a number greater than 0"),
  body("type")
    .notEmpty()
    .withMessage("type must not be empty")
    .isString()
    .withMessage("type must be a string"),
  body("category")
    .notEmpty()
    .withMessage("category must not be empty")
    .isMongoId()
    .withMessage("category must be a mongoId"),
  checkValidations,
];

const updateProductValidators = [
  param("id").isMongoId().withMessage("id param must be a valid mongo id"),
  body("name")
    .optional()
    .isString()
    .withMessage("name must be a string")
    .isLength({ min: 3 })
    .withMessage("name must be at least 3 characters"),
  body("shortDescription")
    .optional()
    .isString()
    .withMessage("shortDescription must be a string")
    .isLength({ min: 10 })
    .withMessage("shortDescription must be at least 10 characters"),
  body("largeDescription")
    .optional()
    .isString()
    .withMessage("largeDescription must be a string")
    .isLength({ min: 20 })
    .withMessage("largeDescription must be at least 20 characters"),
  body("price")
    .optional()
    .toFloat()
    .isFloat({ min: 0 })
    .withMessage("price must be a number greater than 0"),
  body("type").optional().isString().withMessage("type must be a string"),
  body("category")
    .optional()
    .isMongoId()
    .withMessage("category must be a mongoId"),
  checkValidations,
];

const paramIdValidator = [
  param("id").isMongoId().withMessage("id param must be a valid mongo id"),
  checkValidations,
];

const createCategoryValidators = [
  body("name")
    .notEmpty()
    .withMessage("name must not be empty")
    .isString()
    .withMessage("name must be a string"),
  checkValidations,
];

const updateCategoryValidator = [
  param("id").isMongoId().withMessage("id param must be a valid mongo id"),
  body("name")
    .notEmpty()
    .withMessage("name must not be empty")
    .isString()
    .withMessage("name must be a string"),
  checkValidations,
];

module.exports = {
  createUserValidators,
  createProductValidators,
  updateProductValidators,
  paramIdValidator,
  createCategoryValidators,
  updateCategoryValidator,
};