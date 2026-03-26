let arr1 = [
    "ankit",
    8755
]

let arr2 = arr1;

arr2[0] = "abrar";

console.log(arr2);
console.log(arr1);


const orders = [
    {dish:"Pasta Carbonara", price:14, spicy:false, qty:2},
    {dish:"Dragon Ramen", price:12, spicy:true, qty:1},
    {dish:"Caesar Salad", price:9, spicy:false, qty:3},
    {dish:"Inferno Wings", price:11, spicy:true, qty:2},
    {dish:"Triffle Risotto", price:18, spicy:false, qty:1},
]

const myData = orders.forEach((order,index) =>{
    console.log(` #${index+1} ${order.qty}x ${order.dish}`)
});

console.log(myData);

const receiptLines = orders.map((o) => `${o.dish} : ${o.price * o.qty}`);
console.log(receiptLines);

const spicyOrders = orders.filter((o) => o.spicy);
console.log(spicyOrders);


const totalRevenue = orders.reduce((sum,order) =>{

})

