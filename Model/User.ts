import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
);

sequelize
  .sync()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  { sequelize, modelName: "user" },
);
