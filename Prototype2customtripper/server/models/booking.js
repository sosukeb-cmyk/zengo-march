import { DataTypes } from "sequelize";

export function BookingModel(sequelize) {
  return sequelize.define("Booking", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookingReference: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    tripName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateRange: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    isFlexibleDates: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    selectedMonth: {
      type: DataTypes.STRING,
    },
    numberOfDays: {
      type: DataTypes.STRING,
    },
    passengers: {
      type: DataTypes.STRING,
    },
    vehicleCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "in-progress",
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    specialRequests: {
      type: DataTypes.TEXT,
    },
    tripTabs: {
      type: DataTypes.JSON,
    },
  });
}
