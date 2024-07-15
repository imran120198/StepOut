const Booking = require("./Booking");
const Train = require("./Train");
const User = require("./User");

// Create Relationship
User.hasMany(Booking, { foreignKey: "userId" });
Booking.belongsTo(User, { foreignKey: "userId" });
Train.hasMany(Booking, { foreignKey: "trainId" });
Booking.belongsTo(Train, { foreignKey: "trainId" });

module.exports = { User, Train, Booking };
