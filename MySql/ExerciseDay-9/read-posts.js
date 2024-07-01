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

const Post = require("./post");

async function readPost() {
  await sequelize.sync();

  const posts = await Post.findAll();
  console.log("All posts:", JSON.stringify(posts, null, 2));
  await sequelize.close();
}

readPost();
