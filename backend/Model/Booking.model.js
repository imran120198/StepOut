const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  train_id: { type: Schema.Types.ObjectId, ref: "Train", required: true },
  seat_number: { type: Number, required: true },
});

const BookingModel = mongoose.model("Booking", BookingSchema);

module.exports = {
  BookingModel,
};
