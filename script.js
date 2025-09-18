const watches = [
  {
    id: 1,
    title:'Opulence Analog Watch',
    description:'cashback  upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'FastTrack'
  },
  {
    id: 2 ,
    title:'Neo Splash 2.0 Analog ',
    description:'cashback  upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'Titan'
  },
  {
    id: 3 ,
    title:'UNVEIL 3.0 Analog Watch',
    description:'cashback  upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'Sonata'
  },
  {
    id: 4 ,
    title:'UNVEIL 3.0 Analog Watch',
    description:'cashback  upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'Noise'
  },
  {
    id: 5 ,
    title:'UNVEIL 3.0 Analog Watch',
    description:'cashback upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'Sonata'
  },
  {
    id: 6 ,
    title:'UNVEIL 3.0 Analog Watch',
    description:'cashback  upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'Sonata'
  }
]

//. Save data to localStorage // Save array into localStorage (as text)
function setWatchesToLocal(data){
  localStorage.setItem("watches63", JSON.stringify(data))
}
// Get array back from localStorage (convert text to array)
// If nothing is found, return an empty array []
function getWatchesFromLocal(){
  return JSON.parse(localStorage.getItem("watches63"))
}
 
//deleteButton
function deleteWatch(ID){
  console.log(ID);                                //for debugging
  dataFromLocal = getWatchesFromLocal()
  const index = dataFromLocal.findIndex((w)=> w.id ==ID)   // Find index of the product with given ID
  console.log(index)

  if(index == -1){
    alert("Product not found")
  }else{
    dataFromLocal.splice(index, 1)       // Remove product from array
    console.log(dataFromLocal)
    getWatchesFromLocal(dataFromLocal)   // Save updated array into localStorage
    renderProducts(dataFromLocal)        //show updated product
  }
}

//Edit or Updated watches
function updateProduct(i) {

    dataFromLocal = getWatchesFromLocal()        // Fill modal input boxes with current values
    document.querySelector("#editName").value = dataFromLocal[i].title
    document.querySelector("#editDescription").value = dataFromLocal[i].description
    document.querySelector("#editPrice").value = dataFromLocal[i].price
    document.querySelector("#editStock").value = dataFromLocal[i].stock

    // When update button is clicked, replace old values with new ones
    document.querySelector("#updateProduct").addEventListener('click', () => {
        dataFromLocal[i].title = document.querySelector("#editName").value
        dataFromLocal[i].description = document.querySelector("#editDescription").value
        dataFromLocal[i].price = document.querySelector("#editPrice").value
        dataFromLocal[i].stock = document.querySelector("#editStock").value
        
    // Save updated data
    setWatchesToLocal(dataFromLocal)

    // Re-render product list
    renderProducts(dataFromLocal) 
    })

}




// LocalStorage helpers for cart
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Update the cart count badge (sum of quantities)
function cartCount() {
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + Number(item.qty || 0), 0);
  const badge = document.querySelector('#cartCount') || document.querySelector('#count');
  if (badge) badge.textContent = totalQty;
}
document.addEventListener('DOMContentLoaded', cartCount);


/* ---------- Add to cart (main) ---------- */
function addToCart(id) {
  id = Number(id);
  const watchesFromLocal = getWatchesFromLocal() || []; // your product list
  const product = watchesFromLocal.find(p => Number(p.id) === id);
  if (!product) {
    alert('Product not found');
    return;
  }

  let cart = getCart();
  const idx = cart.findIndex(c => Number(c.id) === id);

  if (idx > -1) {
    // already in cart -> increase qty (respect stock)
    const newQty = Number(cart[idx].qty) + 1;
    if (product.stock && newQty > Number(product.stock)) {
      alert('Cannot add more — reached available stock');
      return;
    }
    cart[idx].qty = newQty;
  } else {
    // new item
    cart.push({
      id: product.id,
      title: product.title,
      price: Number(product.price),
      qty: 1
    });
  }

  setCart(cart);
  cartCount();
  renderCart(); // refresh modal if open
  // small UI feedback (optional)
  showTempAlert('Product added to cart');
}

/* simple temporary alert (you can replace with Bootstrap toast if you prefer) */
function showTempAlert(msg, duration = 1400) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<div class="alert alert-success alert-dismissible fade show position-fixed top-0 end-0 m-3" role="alert" style="z-index:2000;">
    ${msg}
  </div>`;
  document.body.appendChild(wrapper);
  setTimeout(()=> wrapper.remove(), duration);
}


/* ---------- Render cart modal content ---------- */
function renderCart() {
  const cart = getCart();
  const list = document.querySelector('#cartItemsList');
  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `<li class="list-group-item">Your cart is empty</li>`;
    return;
  }

  const itemsHtml = cart.map(item => `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>${item.title}</strong><br>
        ₹${Number(item.price).toFixed(2)} x <span class="fw-bold">${item.qty}</span>
        = ₹${(item.price * item.qty).toFixed(2)}
      </div>
      <div class="btn-group" role="group" aria-label="cart-controls">
        <button class="btn btn-sm btn-outline-secondary cart-decrease" data-id="${item.id}">-</button>
        <button class="btn btn-sm btn-outline-secondary cart-increase" data-id="${item.id}">+</button>
        <button class="btn btn-sm btn-danger ms-2 cart-remove" data-id="${item.id}">Remove</button>
      </div>
    </li>
  `).join('');

  const total = cart.reduce((s, it) => s + Number(it.price) * Number(it.qty), 0);

  list.innerHTML = itemsHtml + `
    <li class="list-group-item d-flex justify-content-between">
      <strong>Total</strong>
      <strong>₹${total.toFixed(2)}</strong>
    </li>
  `;
}

/* ---------- Cart controls (delegate click handlers) ---------- */
const cartListEl = document.querySelector('#cartItemsList');
if (cartListEl) {
  cartListEl.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    if (btn.classList.contains('cart-increase')) changeQty(id, +1);
    else if (btn.classList.contains('cart-decrease')) changeQty(id, -1);
    else if (btn.classList.contains('cart-remove')) removeFromCart(id);
  });
}

function changeQty(id, delta) {
  const watchesFromLocal = getWatchesFromLocal() || [];
  const product = watchesFromLocal.find(p => Number(p.id) === id);

  let cart = getCart();
  const idx = cart.findIndex(i => Number(i.id) === id);
  if (idx === -1) return;

  cart[idx].qty = Number(cart[idx].qty) + delta;

  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  } else if (product && product.stock && cart[idx].qty > Number(product.stock)) {
    cart[idx].qty = Number(product.stock);
    alert('Reached max stock for this product');
  }

  setCart(cart);
  cartCount();
  renderCart();
}

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(it => Number(it.id) !== id);
  setCart(cart);
  cartCount();
  renderCart();
}

/* Render cart when modal opens (Bootstrap modal event) */
const cartModalEl = document.getElementById('cartModal');
if (cartModalEl) {
  cartModalEl.addEventListener('show.bs.modal', renderCart);
}

/* Hook checkout button (simple example) */
const checkoutBtn = document.querySelector('#cartModal .modal-footer .btn-primary');
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    const cart = getCart();
    if (cart.length === 0) { alert('Cart is empty'); return; }
    // implement checkout flow here
    alert('Proceeding to checkout — implement your checkout flow.');
  });
}





//searching products by name
inputSearchElm = document.querySelector("#searchInput")
function searchProduct(){
  wordInput  = inputSearchElm.value

  let allProducts = getWatchesFromLocal()   // Get current products from storage
 
  // Filter by title (case-insensitive)
let searchResult = allProducts.filter((p)=>p.title.toLowerCase().includes(wordInput.toLowerCase()))
  renderProducts(searchResult)    // Show only matching products
}

//Render (display) products
function renderProducts(prodArray){

let renderCardElmt = document.querySelector('#renderCard');
renderCardElmt.innerHTML = prodArray.map(
                                  (w, i)=>`
                                  
<div class="col-sm-12 col-md-6 col-lg-4 g-4">
    <div class="card shadow-lg">
      <div class="card-body">
      
      <img src="./img/image3.webp" height="200px"  style=" object-fit: cover;" class="d-block w-100 " alt="...">
    <h4 class="card-title mt-2 mb-3 fw-bold text-center">${w.title}</h4>
    <p class="card-text lead fs-6">Description: ${w.description}</p>
    <p class="card-text">In Stock: ${w.stock}</p>
    <p class="card-text"> price: $${w.price}</p>
    <div class=" d-flex justify-content-evenly">
      <button type="button" class="btn btn-info w-50 me-1" onclick="addToCart(${w.id})">
      <i class="fas fa-cart-plus"></i> Add to Cart
      </button>
      <button type="button" class="btn btn-success w-25 me-1" data-bs-toggle="modal" 
      onclick="updateProduct('${i}')" data-bs-target="#editProductModal" >
      <i class="fa-solid fa-pen-to-square me-1"></i>Edit</button>
      <button type="button" class="btn btn-secondary w-25 me-1"  onclick="deleteWatch('${w.id}')">
      <i class="fa-solid fa-trash me-1"></i>Delete</button>
      
</div>
      </div>
    </div>
  </div>
`).join('')
}

//brand filter  removes duplicates Get unique list of all brands

function renderBrands(){
let watches63 = getWatchesFromLocal()
console.log(watches);


    brands = new Set(watches63.map((p)=> p.brand))          // Get unique brands (no duplicates)
    proBrand = Array.from(brands)
    console.log(proBrand)
    document.querySelector("#renderBrands").innerHTML= proBrand.map((p)=>    // Show each brand as a button
                                                    `<li>
                                                          <button class="dropdown-item" onclick="productByBrandName('${p}')" >${p}</button></li>`)
                                                          .join("")
}
renderBrands()


//to display all products   // Get current products
function allProducts(){
  renderProducts(watches);
}

function productByBrandName(proBrand){
    brandArray = watches.filter((p)=>p.brand == proBrand)
    renderProducts(brandArray)
}

//   function addToCart(id){
//   alert("Product ID " + id + " added to cart!");
// }
renderBrands();

renderProducts(watches);
  
// Get input values
function addNewProduct(){
titleElmt = document.querySelector("#title")
descriptionElmt = document.querySelector("#description")
brandElmt = document.querySelector("#brand")
priceElmt = document.querySelector("#price")
stockElmt = document.querySelector("#stock")
// Create new product object
  newWatch = {
    id: Date.now(),      // unique ID using timestamp
    title: titleElmt.value,
    description: descriptionElmt.value,
    price: priceElmt.value,
    stock: stockElmt.value,
    brand: brandElmt.value,
  }
  console.log(newWatch)
  watchesFromLocal = getWatchesFromLocal()       // Add new product to localStorage 

  watchesFromLocal.push(newWatch)
  setWatchesToLocal(watchesFromLocal)
  window.location.href = './index.html';       // Redirect back to home page 

}

window.addEventListener("DOMContentLoaded",()=>{  // 12. Run when page loads
  dataFromLocal = getWatchesFromLocal()
  if(!dataFromLocal){           // If storage is empty, use the default watches list
    setWatchesToLocal(watches)
    dataFromLocal = watches;
  }
  let renderCardElmt = document.querySelector("#renderCard");
  if(renderCardElmt){              // If product container exists, render products & brands
    renderProducts(dataFromLocal)
    renderBrands()
  }
})

document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('enquiry-form');
  form.addEventListener('submit', function(event){

       event.preventDefault();
    const name = form.elements.name.value;
    const email = form.elements.email.value
    const message = form.elements.message.value

    if(name.trim() === '' || email.trim() === '' || message.trim() ===''){
      return
    }
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);
        form.reset();
  })
})



// Sample data
// const watches = [
//   {
//     id: 1,
//     title: 'Opulence Analog Watch',
//     description: 'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
//     price: 5555,
//     stock: 20,
//     brand: 'FastTrack'
//   },
//   {
//     id: 2,
//     title: 'Neo Splash 2.0 Analog ',
//     description: 'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
//     price: 5555,
//     stock: 20,
//     brand: 'Titan'
//   },
//   {
//     id: 3,
//     title: 'UNVEIL 3.0 Analog Watch',
//     description: 'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
//     price: 5555,
//     stock: 20,
//     brand: 'Sonata'
//   },
//   {
//     id: 4,
//     title: 'UNVEIL 3.0 Analog Watch',
//     description: 'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
//     price: 5555,
//     stock: 20,
//     brand: 'Noise'
//   },
//   {
//     id: 5,
//     title: 'UNVEIL 3.0 Analog Watch',
//     description: 'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
//     price: 5555,
//     stock: 20,
//     brand: 'Sonata'
//   },
//   {
//     id: 6,
//     title: 'UNVEIL 3.0 Analog Watch',
//     description: 'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
//     price: 5555,
//     stock: 20,
//     brand: 'Sonata'
//   }
// ];

// // Save data to localStorage
// function setWatchesToLocal(data) {
//   localStorage.setItem("watches63", JSON.stringify(data));
// }
// function getWatchesFromLocal() {
//   return JSON.parse(localStorage.getItem("watches63"));
// }

// // Render products
// function renderProducts(prodArray) {
//   const renderCardElmt = document.querySelector('#renderCard');
//   if (!renderCardElmt) return;

//   renderCardElmt.innerHTML = prodArray.map(
//     (w) => `
//       <div class="col-sm-12 col-md-6 col-lg-4 g-4">
//         <div class="card shadow-lg">
//           <div class="card-body">
//             <img src="./img/img1.jpg" height="200px" style="object-fit: cover;" class="d-block w-100" alt="...">
//             <h4 class="card-title mt-2 mb-3 fw-bold text-center">${w.title}</h4>
//             <p class="card-text lead fs-5">Description: ${w.description}</p>
//             <p class="card-text">In Stock: ${w.stock}</p>
//             <p class="card-text">Price: $${w.price}</p>
//             <button type="button" class="btn btn-info w-100" onclick="addToCart('${w.id}')">
//               <i class="fas fa-cart-plus"></i> Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     `
//   ).join('');
// }

// // Brand filter
// function renderBrands() {
//   const brandsContainer = document.querySelector("#renderBrands");
//   if (!brandsContainer) return;

//   const brands = new Set(watches.map((p) => p.brand));
//   const proBrand = Array.from(brands);

//   brandsContainer.innerHTML = proBrand.map(
//     (p) => `
//       <li>
//         <button class="dropdown-item" onclick="productByBrandName('${p}')">${p}</button>
//       </li>
//     `
//   ).join("");
// }

// function allProducts() {
//   renderProducts(watches);
// }

// function productByBrandName(proBrand) {
//   const brandArray = watches.filter((p) => p.brand === proBrand);
//   renderProducts(brandArray);
// }

// function addToCart(id) {
//   alert("Product ID " + id + " added to cart!");
// }

// // DOM ready
// window.addEventListener("DOMContentLoaded", () => {
//   let inputSearchElm = document.querySelector("#searchInput");
//   let titleElmt = document.querySelector("#title");
//   let descriptionElmt = document.querySelector("#description");
//   let brandElmt = document.querySelector("#brand");
//   let priceElmt = document.querySelector("#price");
//   let stockElmt = document.querySelector("#stock");

//   // searching products
//   window.searchProduct = function () {
//     let wordInput = inputSearchElm.value;
//     let searchResult = watches.filter((p) =>
//       p.title.toLowerCase().includes(wordInput.toLowerCase())
//     );
//     renderProducts(searchResult);
//   };

//   // add new product
//   window.addNewProduct = function () {
//     let newWatch = {
//       id: Date.now(),
//       title: titleElmt.value,
//       description: descriptionElmt.value,
//       price: priceElmt.value,
//       stock: stockElmt.value,
//       brand: brandElmt.value,
//     };
//     console.log(newWatch);

//     let watchesFromLocal = getWatchesFromLocal() || [];
//     watchesFromLocal.push(newWatch);
//     setWatchesToLocal(watchesFromLocal);

//     window.location.href = './index.html';
//   };

//   // initialize data
//   let dataFromLocal = getWatchesFromLocal();
//   if (!dataFromLocal) {
//     setWatchesToLocal(watches);
//     dataFromLocal = watches;
//   }

//   renderProducts(dataFromLocal);
//   renderBrands();
// });
