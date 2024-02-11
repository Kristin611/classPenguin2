const db = require('./connection');
const { User, Blog } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Blog', 'blogs');
  await cleanDB('User', 'users');

  const blogs = await Blog.insertMany([
    { blogContent: 'Food' },
    { blogContent: 'Household Supplies' },
    { blogContent: 'Electronics' },
    { blogContent: 'Books' },
    { blogContent: 'Toys' }
  ]);

  console.log('categories seeded');

  await User.create({
    username: 'Pamela',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    username: 'Elijah',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});