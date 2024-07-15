const mongoose = require("mongoose");

const TrainSchema = mongoose.Schema(
  {
    train_id: { type: String, required: true, unique: true },
    train_name: { type: String, required: true },
    source: { type: String, required: true },
    destination: { type: String, required: true },
    total_seats: { type: Number, required: true },
    available_seats: { type: Number, required: true },
  },
  { timestamps: true }
);

const TrainModel = mongoose.model("Train", TrainSchema);

module.exports = {
  TrainModel,
};
