let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cart.forEach((c, index) => {
    cartList.innerHTML += `<li>${c.item} - ₹${c.price} 
      <button onclick="removeFromCart(${index})">Remove</button></li>`;
  });
  document.getElementById("total").innerText = `Total: ₹${total}`;
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  renderCart();
}

function checkout() {
  alert("Thank you for your order! Your food will be delivered soon.");
  cart = [];
  total = 0;
  renderCart();
}
