const express = require("express");
const passport = require("passport");

//controllers
const {
  getOrders,
  getOneOrder,
  getLastOrder,
  deleteOrder,
  createOrder
} = require("../controllers/orders.controller");
const { categoryExist } = require("../middlewares/categories.middlewares");
const { orderExist } = require("../middlewares/orders.middlewares");
const {
  createProductValidators,
  paramIdValidator,
} = require("../middlewares/validators.middlewares");
const { upload } = require("../utils/multer.utils");

const ordersRouter = express.Router();

//TODOS LOS PRODUCTOS
ordersRouter.get("/all", async (req, res, next) => {
  try {
    const orders = await getOrders();
    res.status(200).json({ status: "success", data: { orders } });
  } catch (error) {
    next(error);
  }
});

ordersRouter.get("/last", async (req, res, next) => {
  try {
    const lastOrder = await getLastOrder();

    res.status(200).json({ status: "success", data: { lastOrder } });
  } catch (error) {
    next(error);
  }
});


ordersRouter.get("/:id", orderExist, async (req, res, next) => {
  try {
    const order = await getOneOrder(req);

    res.status(200).json({ status: "success", data: { order } });
  } catch (error) {
    next(error);
  }
});



ordersRouter.post("/", passport.authenticate("jwt", { session: false })
,async (req, res, next) => {

  
  try {
      const newOrder = await createOrder(req);
      res.status(201).json({
        status: "success",
        data: { newOrder },
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

ordersRouter.delete(
  "/:id",
  paramIdValidator,
  orderExist,
  async (req, res, next) => {
    try {
      await deleteOrder(req);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
);

module.exports = { ordersRouter };
