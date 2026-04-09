// controllers/postController.js
// new - correct
const { PrismaClient } = require('../../generated/prisma')
const { PrismaPg } = require('@prisma/adapter-pg');
require('dotenv').config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
async function createPost(req, res) {
  try {
    const { title, description, latitude, longitude } = req.body;

    const post = await prisma.post.create({
      data: {
        title,
        description,
        latitude,
        longitude,
        userId: "temp-user-id", // hardcoded for now
      },
    });

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

async function getAllPosts(req, res) {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

module.exports = { createPost, getAllPosts };