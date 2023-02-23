-- orders
[
{ _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
{ _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
{ _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
{ _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
{ _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
{ _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
]
-- output intha mathiri sql la varanum 
{ _id:  "Steel beam", totalUrgentquantity: 50},
{ _id:  "Iron rod", totalUrgentquantity: 60},

-- step1.Filter-Urgent orders
select* from orders where ststus-"urgent";
{ _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
{ _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },MOS
{ _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
{ _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }

-- step 2: group  - In eachproduct find totalUrgentquantity
select  productName as id_sum(quantity)as totalUrgentquantity from orders
where ststus-"urgent"
group by productName;

-- so answer:=
{ _id:  "Steel beam", totalUrgentquantity: 50},
{ _id:  "Iron rod", totalUrgentquantity: 60},
