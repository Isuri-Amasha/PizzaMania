const Order = require("../models/order.model");

const addOrder = async (req, res) => {
    const { customer, item1, quantity1, item2, quantity2,item3, quantity3,orderFor, deliveryAddress,amount, orderStatus } =
      req.body;
  
    const order = new Order({
        customer,
        item1,
        quantity1,
        item2,
        quantity2,
        item3,
        quantity3,
        orderFor,
        deliveryAddress,
        amount,
        orderStatus
    });
  
    await order
      .save()
      .then(() => res.json('Order added!'))
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const getOrders = async (req, res) => {
    try {
      const order = await Order.find();
      res.json(order);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const getOrderById = async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
      res.json(order);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const updateOrder = async (req, res) => {
    Order.findByIdAndUpdate(req.params.id)
      .then((existingOrder) => {
        existingOrder.customer = req.body.customer;
        existingOrder.item1 = req.body.item1;
        existingOrder.quantity1 = req.body.quantity1;
        existingOrder.item2 = req.body.item2;
        existingOrder.quantity2 = req.body.quantity2;
        existingOrder.item3 = req.body.iteme3;
        existingOrder.quantity3 = req.body.quantity3;
        existingOrder.orderFor = req.body.orderFor;
        existingOrder.deliveryAddress = req.body.deliveryAddress;
        existingOrder.amount = req.body.amount;
        existingOrder.orderStatus = req.body.orderStatus;
        
        existingOrder
          .save()
          .then(() => res.json('Order updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
  const deleteOrder = async (req, res) => {
    Order.findByIdAndDelete(req.params.id)
      .then((deletedOrder) => {
        res.json('Order deleted');
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
  module.exports = {
    addOrder,
    getOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
   
  }