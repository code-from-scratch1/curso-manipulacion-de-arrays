const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = products.filter((item) => item.id !== "🥞");

const myChanges = {
  id: "🍔",
  changes: { 
    descriptyion: "it is delicious", 
    type: "Fast Food" 
    },
};
const updateMyProducts = products.filter((item) => item)

const myIndex = updateMyProducts.findIndex( item => item.id === '🍔')
updateMyProducts[myIndex] = {
    ...updateMyProducts[myIndex],
    ...myChanges.changes
}

console.log(updateMyProducts)
