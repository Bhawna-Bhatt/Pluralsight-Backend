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

const User = require("./user");
const Post = require("./post");

console.log("1", User, Post);

User.hasMany(Post);
Post.belongsTo(User);

console.log("2 defines association");

async function syncAndTest() {
  try {
    //await sequelize.sync({ force: true });
    await User.sync({ force: true });
    await Post.sync({ force: true }); // This will drop and recreate the tables
    console.log("Models synchronized successfully.");

    const user = await User.create({
      name: "Jane Doe",
      email: "jane.doe@example.com",
    });
    console.log("User created:", user.toJSON());
    console.log("User id:", user.id);

    const post = await Post.create({
      title: "First Post",
      content: "This is my Second post!",
      UserId: user.id,
    });

    const post1 = await Post.create({
      title: "Second Post",
      content: "This is my Second post!",
      UserId: user.id,
    });

    const post3 = await Post.create({
      title: "Third Post",
      content: "This is my Third post!",
      UserId: user.id,
    });
    console.log("Post created:", post.toJSON());

    const posts = await User.findOne({ where: { id: user.id }, include: Post });
    console.log("User with posts:", JSON.stringify(posts, null, 2));
    
  } catch (err) {
    console.log("Error occurred :", err);
  } finally {
    await sequelize.close();
  }
}

syncAndTest();
