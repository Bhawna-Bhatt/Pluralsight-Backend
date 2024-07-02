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

async function sortPosts() {
  await sequelize.sync();

  const posts = await Post.findAll({
    order: [["title", "ASC"]],
  });
  console.log("Sorted posts:", JSON.stringify(posts, null, 2));

  await sequelize.close();
}

sortPosts();
