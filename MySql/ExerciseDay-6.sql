USE northwind;
/* Northwind is a database for a small grocery store. */
/*1. What is the name of the table that holds the items Northwind sells? */

 SELECT * FROM products;
/*2. Write a query to list the product id, product name, and unit price of every
product. */

SELECT ProductID,ProductName,Unitprice
FROM Products;

/*3. Write a query to list the product id, product name, and unit price of every
product. Except this time, order then in ascending order by price. */
SELECT ProductID,ProductName,Unitprice
FROM Products
ORDER BY UnitPrice;

/*4. What are the products that we carry where the unit price is $7.50 or less?*/

SELECT ProductID,ProductName,Unitprice
FROM Products
WHERE UnitPrice <= 7.50
ORDER BY UnitPrice;

/*5. What are the products that we carry where we have at least 100 units on hand?
Order them in descending order by price.*/
SELECT ProductID,ProductName,Unitprice,UnitsInStock
FROM Products
WHERE UnitsInStock >=100 
ORDER BY UnitPrice DESC;

/*6. What are the products that we carry where we have at least 100 units on hand?
Order them in descending order by price. If two or more have the same price, list
those in ascending order by product name. */
SELECT ProductID,ProductName,Unitprice,UnitsInStock
FROM Products
WHERE UnitsInStock >=100 
ORDER BY UnitPrice DESC,ProductName;

/* 7. What are the products that we carry where we have no units on hand, but 1 or
more units of them on backorder? Order them by product name.*/
SELECT ProductID,ProductName,Unitprice,UnitsInStock,UnitsOnOrder
FROM Products
WHERE UnitsInStock =0 AND UnitsOnOrder >=1
ORDER BY ProductName;


/*8. What is the name of the table that holds the types (categories) of the items
Northwind sells? */
/*Categories*/


/*9. Write a query that lists all of the columns and all of the rows of the categories
table? What is the category id of seafood -- 16?*/
 SELECT * FROM Categories;

/*10. Examine the Products table. How does it identify the type (category) of each item
sold - CategoryID? Write a query to list all of the seafood items we carry.*/

SELECT * FROM Products 
WHERE CategoryID = 16;

/*11. What are the first and last names of all of the Northwind employees? */
SELECT FirstName,LastName 
FROM Employees;

/*12. What employees have "manager" in their titles? */

SELECT FirstName,LastName ,Title
FROM Employees
WHERE Title LIKE('%manager%');

/*13. List the distinct job titles in employees.*/
 
 SELECT DISTINCT(Title)
FROM Employees;

/*14. What employees have a salary that is between $200 0 and $2500?*/
 SELECT FirstName,LastName ,Title,Salary
FROM Employees
WHERE Salary  BETWEEN 2000 AND 2500;

/*15. List all of the information about all of Northwind's suppliers.*/

SELECT * FROM Suppliers
WHERE CompanyName = "Tokyo Traders"
;

/*16. Examine the Products table. How do you know what supplier supplies each
product - Supplier ID? Write a query to list all of the items that "Tokyo Traders" supplies to
Northwind*/
  SELECT * FROM Products
  WHERE SupplierID = (SELECT SupplierID FROM Suppliers WHERE CompanyName = "Tokyo Traders");
 
/*1. How many suppliers are there? Use a query! */
 
 SELECT COUNT(*) FROM SUPPLIERS;

/*2. What is the sum of all the employee's salaries? */

SELECT SUM(Salary) FROM EMPLOYEES;

/*3. What is the price of the cheapest item that Northwind sells?*/

SELECT MIN(UNITPRICE) FROM PRODUCTS;

/*4. What is the average price of items that Northwind sells?*/

SELECT AVG(UNITPRICE) FROM PRODUCTS;

/*5. What is the price of the most expensive item that Northwind sells?*/

SELECT MAX(UNITPRICE) FROM PRODUCTS;
/*7. What is the category ID of each category and the average price of each item in the
category? You can answer this query by only looking at the Products table. */

SELECT CATEGORYID, AVG(UNITPRICE)FROM PRODUCTS
GROUP BY CATEGORYID;


/*8. For suppliers that provide at least 5 items to Northwind, what is the supplier ID of
each supplier and the number of items they supply? You can answer this query
by only looking at the Products table. */

SELECT SUPPLIERID,COUNT(*) FROM PRODUCTS
GROUP BY SUPPLIERID
HAVING COUNT(*) >=5 ;



/*9. List the product id, product name, and inventory value (calculated by multiplying
unit price by the number of units on hand). Sort the results in descending order
by value. If two or more have the same value, order by product name.*/

SELECT PRODUCTID,PRODUCTNAME, (UNITPRICE * UNITSINSTOCK) AS INVVALUE
FROM PRODUCTS
ORDER BY INVVALUE DESC , PRODUCTNAME;


/*--------------------------------------------------------------------------------*/

/*1. What is the product name(s) of the most expensive products? HINT: Find the
max price in a subquery and then use that value to find products whose price
equals that value. */
SELECT PRODUCTNAME FROM PRODUCTS 
WHERE UNITPRICE =
(SELECT MAX(UNITPRICE) FROM PRODUCTS);

/*2. What is the order id, shipping name and shipping address of all orders shipped via
"Federal Shipping"? HINT: Find the shipper id of "Federal Shipping" in a subquery
and then use that value to find the orders that used that shipper. */
SELECT ORDERID,SHIPNAME,SHIPADDRESS FROM ORDERS
WHERE SHIPVIA = (SELECT SHIPPERID FROM SHIPPERS WHERE COMPANYNAME = "Federal Shipping");

/*3. What are the order ids of the orders that ordered "Sasquatch Ale"? HINT: Find
the product id of "Sasquatch Ale" in a subquery and then use that value to find
the matching orders from the `order details` table. Because the `order details`
table has a space in its name, you will need to surround it with back ticks in the
FROM clause.*/
SELECT ORDERID FROM `order details`
WHERE PRODUCTID = 
(SELECT PRODUCTID FROM PRODUCTS 
WHERE PRODUCTNAME = "Sasquatch Ale");


/*4. What is the name of the employee that sold order 10266? */
 
 SELECT FIRSTNAME FROM EMPLOYEES
 WHERE EMPLOYEEID =
 (SELECT EMPLOYEEID FROM ORDERS WHERE ORDERID = 10266);

/*5. What is the name of the customer that bought order 10266?*/

SELECT CONTACTNAME FROM CUSTOMERS
 WHERE CUSTOMERID =
 (SELECT CUSTOMERID FROM ORDERS WHERE ORDERID = 10266);
 
 /*-----------------------------------*/
 
 /*1. List the product id, product name, unit price and category name of all products.
Order by category name and within that, by product name.*/

SELECT PRODUCTID, PRODUCTNAME, UNITPRICE,CATEGORYNAME 
FROM PRODUCTS 
JOIN CATEGORIES
ON PRODUCTS.CATEGORYID = CATEGORIES.CATEGORYID;


/*2. List the product id, product name, unit price and supplier name of all products
that cost more than $75. Order by product name.*/

SELECT PRODUCTID, PRODUCTNAME,UNITPRICE,COMPANYNAME
FROM PRODUCTS 
JOIN SUPPLIERS
ON PRODUCTS.SUPPLIERID = SUPPLIERS.SUPPLIERID
WHERE UNITPRICE > 75.00;

/*3. List the product id, product name, unit price, category name, and supplier name
of every product. Order by product name.*/

SELECT PRODUCTID, PRODUCTNAME, UNITPRICE,CATEGORYNAME ,COMPANYNAME
FROM PRODUCTS 
JOIN CATEGORIES ON PRODUCTS.CATEGORYID = CATEGORIES.CATEGORYID
JOIN SUPPLIERS ON PRODUCTS.SUPPLIERID = SUPPLIERS.SUPPLIERID
ORDER BY PRODUCTNAME;

/*4. What is the product name(s) and categories of the most expensive products?
HINT: Find the max price in a subquery and then use that in your more complex
query that joins products with categories.*/

SELECT PRODUCTNAME, CATEGORYNAME FROM 
PRODUCTS 
JOIN CATEGORIES 
ON PRODUCTS.CATEGORYID = CATEGORIES.CATEGORYID
WHERE UNITPRICE = (SELECT MAX(UNITPRICE) FROM PRODUCTS);


/*5. List the order id, ship name, ship address, and shipping company name of every
order that shipped to Germany.*/
SELECT ORDERID,SHIPNAME,SHIPADDRESS,COMPANYNAME FROM ORDERS
JOIN SHIPPERS ON SHIPVIA = SHIPPERID
WHERE SHIPCOUNTRY = 'GERMANY' ;


/*6. List the order id, order date, ship name, ship address of all orders that ordered
"Sasquatch Ale"?*/

SELECT ORDERS.ORDERID, ORDERDATE,SHIPNAME, SHIPADDRESS,PRODUCTNAME 
FROM ORDERS 
JOIN `order details` ON ORDERS.ORDERID = `order details`.ORDERID
JOIN PRODUCTS ON `order details`.PRODUCTID = PRODUCTS.PRODUCTID
WHERE PRODUCTNAME = "Sasquatch Ale" ;


 /*-----------------------------------*/

/*1. Add a new supplier.*/
INSERT INTO Suppliers VALUES(30,'Nandini ','M S Swamy','Accounting Manager','Bangalore North','Bangalore',NULL,'261000','India','(12345) 1212','(12345) 1210',NULL);
SELECT * FROM SUPPLIERS ;
/*2. Add a new product provided by that supplier*/

INSERT INTO Products (ProductID, ProductName, SupplierID, CategoryID, QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued)
VALUES(78, 'Paneer', 30, 4, '10 boxes x 20 bags', 18, 39, 0, 10, 0);

select * from products;
/*3. List all products and their suppliers. */

SELECT PRODUCTNAME,COMPANYNAME
FROM PRODUCTS
JOIN SUPPLIERS ON SUPPLIERS.SUPPLIERID = PRODUCTS.SUPPLIERID;

/*4. Raise the price of your new product by 15%.*/

UPDATE PRODUCTS SET UNITPRICE = UNITPRICE * 1.3 
WHERE PRODUCTID = 78;


/*5. List the products and prices of all products from that supplier.*/

SELECT PRODUCTNAME , UNITPRICE 
FROM PRODUCTS 
JOIN SUPPLIERS 
ON PRODUCTS.SUPPLIERID = SUPPLIERS.SUPPLIERID
WHERE SUPPLIERS.SUPPLIERID = 30;

/*6. Delete the new product.*/

DELETE FROM PRODUCTS 
WHERE PRODUCTID = 78;

SELECT * FROM PRODUCTS;

/*7. Delete the new supplier.*/

SELECT * FROM SUPPLIERS  WHERE SUPPLIERID = 30;

DELETE FROM SUPPLIERS  WHERE SUPPLIERID = 30;

/*8. List all products.*/

SELECT * FROM PRODUCTS;

/*9. List all suppliers.*/

SELECT * FROM SUPPLIERS;

 /*-----------------------------------*/
 
 
 CREATE TABLE advertisements (
AdId int NOT NULL,
Title varchar(50) NOT NULL,
MagicCode varchar(9),
PercentOff float NOT NULL,
PRIMARY KEY(AdId)
);