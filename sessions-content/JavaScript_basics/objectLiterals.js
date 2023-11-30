let product = {
  name:'Gummy Bears',
  inStock:true,
  price:1.99,
  flavors:['grape','apple','cherry'],
  true:'no', 
  null:'yes'

}

console.log(product["inStock"]);

console.log(product[true]);
console.log(product['true']);
console.log(product[null]);
console.log(product['null']);

// works as all keys are converted to strings

console.log(product["inStock"]);
console.log(product.inStock);




const restaurant = {
  name: 'Ichiran Ramen',
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: 'Brooklyn',
  state: 'NY',
  zipcode: '11206',
}

let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}` 
console.log(restaurant.address)