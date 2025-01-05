const CartItems = document.querySelector(".cart-items");

function displayCartItems() {
  const items = JSON.parse(localStorage.getItem("cart")) || []; // Handle empty cart case
  items.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart_item";
    cartItem.innerHTML = `
      <p class="cart_id">${item.id}</p>
      <p class="cart_title">${item.title}</p>
      <img src="${item.image}" alt="${item.title}" class="cart_img" />
      <p class="cart_price">${item.price}</p>
      <button class="cart_delete" data-index="${index}">Delete</button>
    `;
    CartItems.appendChild(cartItem);
  });

  // Attach event listeners to delete buttons
  const deleteButtons = document.querySelectorAll(".cart_delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteCartItem);
  });
}

function deleteCartItem(event) {
  const button = event.target;
  const itemIndex = button.dataset.index; // Get the index of the item
  let items = JSON.parse(localStorage.getItem("cart")) || [];

  // Remove the item from the array
  items.splice(itemIndex, 1);

  // Update localStorage
  localStorage.setItem("cart", JSON.stringify(items));

  // Remove the item from the DOM
  button.closest(".cart_item").remove();
}

// Call the function to display the cart items
displayCartItems();