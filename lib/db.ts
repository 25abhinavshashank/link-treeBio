// import { PrismaClient } from "@prisma/client"

// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }

// export const db = globalForPrisma.prisma ?? new PrismaClient()
// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db
// lib/db.ts - Prisma 6 compatible
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db
}