const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    progress: [Number] ,
    target: [Number],
    start: [[Number]],
    end: [[Number]],
    repeat: [Boolean],
    adds: Boolean,
    nextReset: Number
});

module.exports = Activity = mongoose.model("activities", ActivitySchema);