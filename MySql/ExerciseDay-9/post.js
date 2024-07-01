const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("testseq", "root", "Ldbb@133385", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
});

const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

//associations

const User = require("./user");
User.hasMany(Post);
Post.belongsTo(User);

async function syncModels() {
  try {
    await sequelize.sync();
    console.log("Models was synchronized successfully.");
  } catch (error) {
    console.error("Unable to synchronize models:", error);
  }
}

syncModels();

module.exports = Post;
