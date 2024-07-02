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

async function filterPosts() {
  await sequelize.sync();

  const posts = await Post.findAll({
    where: {
      title: "First Post",
    },
  });
  console.log("Filtered posts:", JSON.stringify(posts, null, 2));

  await sequelize.close();
}

filterPosts();
