const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventoryOrdersSchema = new Schema({
    productID: { type: String, unique: true, required: true },
    productName: { type: String, required: true },
    productCategory: { type: String, required: true },
    availableQuantity: { type: String, required: true },
    requestedQuantity: { type: String, required: true },

    // workingSchedule : {type: mongoose.Schema.Types.ObjectId, ref:'workingSchedule'}


}, {
    timestamps: true,

});


const InventoryOrders = mongoose.model("InventoryOrders", inventoryOrdersSchema);

module.exports = InventoryOrders;