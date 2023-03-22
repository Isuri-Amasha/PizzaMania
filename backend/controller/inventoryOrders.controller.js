const InventoryOrders = require("../models/inventoryOrders.model");

const addInventoryOrders = async (req, res) => {
    const { productID, productName, productCategory, availableQuantity, requestedQuantity } =
      req.body;
  
    const inventoryOrders = new InventoryOrders({
        productID,
        productName,
        productCategory,
        availableQuantity,
        requestedQuantity
    });
  
    await inventoryOrders
      .save()
      .then(() => res.json('Inventory Order added!'))
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const getInventoryOrders = async (req, res) => {
    try {
      const inventoryOrders = await InventoryOrders.find();
      res.json(inventoryOrders);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const getInventoryOrdersById = async (req, res) => {
    try {
      const inventoryOrders = await InventoryOrders.findById(req.params.id);
      res.json(inventoryOrders);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const updateInventoryOrders = async (req, res) => {
    InventoryOrders.findByIdAndUpdate(req.params.id)
      .then((existingInventoryOrders) => {
        existingInventoryOrders.productID = req.body.productID;
        existingInventoryOrders.productName = req.body.productName;
        existingInventoryOrders.productCategory = req.body.productCategory;
        existingInventoryOrders.availableQuantity = req.body.availableQuantity;
        existingInventoryOrders.requestedQuantity = req.body.requestedQuantity;
      
        
        existingInventoryOrders
          .save()
          .then(() => res.json('Inventory Order updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
  const deleteInventoryOrder = async (req, res) => {
    InventoryOrder.findByIdAndDelete(req.params.id)
      .then((deletedInventoryOrder) => {
        res.json('Inventory Order deleted');
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
  module.exports = {
    addInventoryOrders,
    getInventoryOrders,
    getInventoryOrdersById,
    updateInventoryOrders,
    deleteInventoryOrder,
   
  }