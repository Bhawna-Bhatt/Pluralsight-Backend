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

async function deletePost() {
  await sequelize.sync();

  const post = await Post.findOne({ where: { title: "Third Post" } });
  if (post) {
    await post.destroy();
    console.log("Post deleted");
  }
  await sequelize.close();
}

deletePost();
