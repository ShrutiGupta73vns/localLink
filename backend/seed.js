const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('./generated/prisma');
require('dotenv').config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

prisma.user.create({
  data: {
    id: 'temp-user-id',
    email: 'test@test.com',
    password: '123456'
  }
})
.then(u => { console.log('User created:', u); prisma.$disconnect(); })
.catch(e => { console.error(e.message); prisma.$disconnect(); });