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

async function createPost() {
  await sequelize.sync();

  const post = await Post.create({
    title: "Random Post",
    content: "This is my random post!",
    UserId: 1,
  });
  console.log("User created:", post.toJSON());

  await sequelize.close();
}

createPost();
