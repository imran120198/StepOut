const { DataTypes } = require("sequelize");
const seq = require("../Connection/Connection");

const Booking = seq.define("Booking", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  trainId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seatNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Booking;
