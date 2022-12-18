// This is the hard-coded list of items
// It uses the website picsum.photos for random images
const items = [
  {
    name: "Laptop",
    price: "999.90",
    image: "https://picsum.photos/id/1/300",
  },
  {
    name: "Beautiful shoes",
    price: "499.90",
    image: "https://picsum.photos/id/21/300",
  },
  {
    name: "Holiday package",
    price: "3199.90",
    image: "https://picsum.photos/id/28/300",
  },
];

const cart = {

}

function displayCatalog() {
  const container = document.getElementById("product_container");

  // For each of the items in the array, we append a new <div> element,
  // with all the fields, into the main container
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    container.innerHTML += `<div class="col-sm-4">
      <div style="background-color:#ADF" class="p-2">
        <h6>${item.name}</h6>
        <p>Price: $${item.price} AUD</p>
        <img src="${item.image}" class="w-100 mb-2">
        <div class="d-grid gap-2">
          <button class="btn btn-success add-to-cart" data-productname="${item.name}">Add to cart</button>
        </div>
      </div>
    </div>`;
  }

  for (button of document.getElementsByClassName('add-to-cart')) {
    button.addEventListener('click', function (event) {
      addToCart(event.target.dataset.productname);
    })
  }

}

function addToCart(name) {
  if (cart[name] === undefined) {
    cart[name] = 1;
  } else {
    cart[name]++;
  }
  displayCart();
}

function displayCart() {
  const cartContainer = document.getElementById("cart_container");
  cartContainer.innerHTML = '';
  // For each of the items in the array, we append a new <div> element,
  // with all the fields, into the main container
  for (let productName in cart) {
    const productQuantity = cart[productName];
    cartContainer.innerHTML += `<tr>
      <td>
        ${productName}
      </td>
      <td>${productQuantity}</td>
    </tr>`;
  }
}

displayCatalog();