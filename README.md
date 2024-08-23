# run client
```
npm run dev
```
-port 3000

#run server
```
npm start
```


# Inventory Management 

## Group Expectations
https://docs.google.com/document/d/1ID58Y4BBy5Mw5ht9akaBk46b4YlywzTQItbg_jawixs/edit


## Project Name and Description
Inventory Management - manage and track products.

## MVP Goals
***Frontend:*** 
Components 
- Navbar
- Landing page (screens) for login/registration
- Homepage (pages)
- Product Page (pages)
- settings
- inventory page
- charts (sales summary, order summary, expenses, products)


***Backend:***
- Prisma
- Routes
- Controllers
- Seed files
- Models (userSchema, userSchema, expensesSchema, productSchema (these Schemas will reference the user model, rather than having to embed it))
- Database (MySQL)
- Server.js

## Post-MVP Goals
- create new product
- Dark mode
- Notification (email users and remind them)

## Database Schemas
_Please provide a sample of how you intend to build your models. A Schema object for each of your models is ideal._

```json
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Users {
  userId String @id @default(uuid())
  name   String
  email  String @unique
}

model Products {
  productId     String      @id @default(uuid())
  name          String
  price         Float
  rating        Float?
  stockQuantity Int
  Sales         Sales[]
  Purchases     Purchases[]
}

model Sales {
  saleId      String   @id @default(uuid())
  productId   String
  timestamp   DateTime @default(now())
  quantity    Int
  unitPrice   Float
  totalAmount Float
  product     Products @relation(fields: [productId], references: [productId], onDelete: Cascade)
}

model Purchases {
  purchaseId String   @id @default(uuid())
  productId  String
  timestamp  DateTime @default(now())
  quantity   Int
  unitCost   Float
  totalCost  Float
  product    Products @relation(fields: [productId], references: [productId], onDelete: Cascade)
}

model Expenses {
  expenseId String   @id @default(uuid())
  category  String
  amount    Float
  timestamp DateTime @default(now())
}

model SalesSummary {
  salesSummaryId   String   @id @default(uuid())
  totalValue       Float
  changePercentage Float?
  date             DateTime @default(now())
}

model PurchaseSummary {
  purchaseSummaryId String   @id @default(uuid())
  totalPurchased    Float
  changePercentage  Float?
  date              DateTime @default(now())
}

model ExpenseSummary {
  expenseSummaryId  String              @id @default(uuid())
  totalExpenses     Float
  date              DateTime @default(now())
  ExpenseByCategory ExpenseByCategory[]
}

model ExpenseByCategory {
  expenseByCategoryId String         @id @default(uuid())
  expenseSummaryId    String
  category            String
  amount              Float
  date                DateTime @default(now())
  expenseSummary      ExpenseSummary @relation(fields: [expenseSummaryId], references: [expenseSummaryId], onDelete: Cascade)
}


```
# Tech Stack
Next JS
Tailwind
Redux Toolkit
Redux Toolkit Query
Material UI Data Grid
Node.js
Prisma
MySQL
AWS EC2
AWS RDS
AWS API Gateway
AWS Amplify
AWS S3


# Inventory Management Link
https://drawsql.app/teams/team-3023/diagrams/56-inventorymanagement
