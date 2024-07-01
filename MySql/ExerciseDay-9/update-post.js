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

async function updatePost() {
  await sequelize.sync();

  const post = await Post.findOne({ where: { title: "Random Post" } });
  if (post) {
    post.title = "Changed Random";

    await post.save();

    console.log("post updated:", post.toJSON());
  }
  await sequelize.close();
}

updatePost();
