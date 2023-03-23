const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const counterSchema = new Schema({
    id: {
        type: String,
    },
    seq: {
        type: Number,
    },
});

module.exports = Counter = mongoose.model("Counter", counterSchema);
