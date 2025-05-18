import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testConnection() {
  try {
    // Test database connection
    await prisma.$connect()
    console.log('✅ Successfully connected to MySQL database')

    // Test a simple query
    const result = await prisma.$queryRaw`SELECT 1+1 as result`
    console.log('Basic query test:', result)

    // If you have an Issue model
    try {
      const issues = await prisma.issue.findMany()
      console.log(`Found ${issues.length} issues`)
    } catch (error) {
      console.log('No issues table found')
    }
  } catch (error) {
    console.error('❌ Connection error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()