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
        <button class="btn btn-success">Add to cart</button>
      </div>
    </div>
  </div>`;
}
