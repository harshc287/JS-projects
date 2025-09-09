// watches = [
//   {
//     id: 1,
//     title:'Opulence Analog Watch',
//     description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
//     price: 5555,
//     stock: 20,
//     brand: 'FastTrack'
//   },
//   {
//     id: 2 ,
//     title:'Neo Splash 2.0 Analog ',
//     description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
//     price: 5555,
//     stock: 20,
//     brand: 'Titan'
//   },
//   {
//     id: 3 ,
//     title:'UNVEIL 3.0 Analog Watch',
//     description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
//     price: 5555,
//     stock: 20,
//     brand: 'Sonata'
//   },
//   {
//     id: 4 ,
//     title:'UNVEIL 3.0 Analog Watch',
//     description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
//     price: 5555,
//     stock: 20,
//     brand: 'Noise'
//   },
//   {
//     id: 5 ,
//     title:'UNVEIL 3.0 Analog Watch',
//     description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
//     price: 5555,
//     stock: 20,
//     brand: 'Sonata'
//   },
//   {
//     id: 6 ,
//     title:'UNVEIL 3.0 Analog Watch',
//     description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
//     price: 5555,
//     stock: 20,
//     brand: 'Sonata'
//   }
// ]

// //. Save data to localStorage

// function setWatchesToLocal(data){
//   localStorage.setItem("watches63", JSON.stringify(data))
// }
// function getWatchesFromLocal(){
//   return JSON.parse(localStorage.getItem("watches63"))
// }

// //searching products

// inputSearchElm = document.querySelector("#searchInput")
// function searchProduct(){
//   wordInput  = inputSearchElm.value

// let searchResult = watches.filter((p)=>p.title.toLowerCase().includes(wordInput.toLowerCase()))
//   renderProducts(searchResult)
// }

// //render products
// function renderProducts(prodArray){

// let renderCardElmt = document.querySelector('#renderCard');
// renderCardElmt.innerHTML = prodArray.map(
//                                   (w)=>`
                                  
// <div class="col-sm-12 col-md-6 col-lg-4 g-4">
//     <div class="card shadow-lg">
//       <div class="card-body">
//       <img src="./img/image3.webp" height="200px"  style=" object-fit: cover;" class="d-block w-100 " alt="...">
//     <h4 class="card-title mt-2 mb-3 fw-bold text-center">${w.title}</h4>
//     <p class="card-text lead fs-5">Description: ${w.description}</p>
//     <p class="card-text">In Stock: ${w.stock}</p>
//     <p class="card-text"> price: $${w.price}</p>
//       <button type="button" class="btn btn-info w-100" onclick="addToCart('${w.id}')">
//       <i class="fas fa-cart-plus"></i> Add to Cart
//       </button>

//       </div>
//     </div>
//   </div>
// `).join('')
// }

// //brand filter  removes duplicates Get unique list of all brands

// function renderBrands(){
//     brands = new Set(watches.map((p)=> p.brand))
//     proBrand = Array.from(brands)
//     document.querySelector("#renderBrands").innerHTML= proBrand.map((p)=>
//                                                     `<li>
//                                                           <button class="dropdown-item" onclick="productByBrandName('${p}')" >${p}</button></li>`)
//                                                           .join("")
// }
// renderBrands()


// //to display all products
// function allProducts(){
//   renderProducts(watches);
// }

// function productByBrandName(proBrand){
//     brandArray = watches.filter((p)=>p.brand == proBrand)
//     renderProducts(brandArray)
// }

//   function addToCart(id){
//   alert("Product ID " + id + " added to cart!");
// }
// renderBrands();

// renderProducts(watches);
  

// titleElmt = document.querySelector("#title")
// descriptionElmt = document.querySelector("#description")
// brandElmt = document.querySelector("#brand")
// priceElmt = document.querySelector("#price")
// stockElmt = document.querySelector("#stock")

// function addNewProduct(){
//   newWatch = {
//     id: Date.now(),
//     title: titleElmt.value,
//     description: descriptionElmt.value,
//     price: priceElmt.value,
//     stock: stockElmt.value,
//     brand: brandElmt.value,
//   }
//   console.log(newWatch)
//   watchesFromLocal = getWatchesFromLocal()

//   watchesFromLocal.push(newWatch)
//   setWatchesToLocal(watchesFromLocal)
//  window.location.href = './index.html';

// }

// window.addEventListener("DOMContentLoaded",()=>{
//   dataFromLocal = getWatchesFromLocal()
//   if(!dataFromLocal){
//     setWatchesToLocal(watches)
//     dataFromLocal = watches;
//   }
//   let renderCardElmt = document.querySelector("#renderCard");
//   if(renderCardElmt){
//     renderProducts(dataFromLocal)
//     renderBrands()
//   }
// })



// Sample data
const watches = [
  {
    id: 1,
    title: 'Opulence Analog Watch',
    description: 'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'FastTrack'
  },
  {
    id: 2,
    title: 'Neo Splash 2.0 Analog ',
    description: 'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'Titan'
  },
  {
    id: 3,
    title: 'UNVEIL 3.0 Analog Watch',
    description: 'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'Sonata'
  },
  {
    id: 4,
    title: 'UNVEIL 3.0 Analog Watch',
    description: 'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'Noise'
  },
  {
    id: 5,
    title: 'UNVEIL 3.0 Analog Watch',
    description: 'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'Sonata'
  },
  {
    id: 6,
    title: 'UNVEIL 3.0 Analog Watch',
    description: 'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'Sonata'
  }
];

// Save data to localStorage
function setWatchesToLocal(data) {
  localStorage.setItem("watches63", JSON.stringify(data));
}
function getWatchesFromLocal() {
  return JSON.parse(localStorage.getItem("watches63"));
}

// Render products
function renderProducts(prodArray) {
  const renderCardElmt = document.querySelector('#renderCard');
  if (!renderCardElmt) return;

  renderCardElmt.innerHTML = prodArray.map(
    (w) => `
      <div class="col-sm-12 col-md-6 col-lg-4 g-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <img src="./img/img1.jpg" height="200px" style="object-fit: cover;" class="d-block w-100" alt="...">
            <h4 class="card-title mt-2 mb-3 fw-bold text-center">${w.title}</h4>
            <p class="card-text lead fs-5">Description: ${w.description}</p>
            <p class="card-text">In Stock: ${w.stock}</p>
            <p class="card-text">Price: $${w.price}</p>
            <button type="button" class="btn btn-info w-100" onclick="addToCart('${w.id}')">
              <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    `
  ).join('');
}

// Brand filter
function renderBrands() {
  const brandsContainer = document.querySelector("#renderBrands");
  if (!brandsContainer) return;

  const brands = new Set(watches.map((p) => p.brand));
  const proBrand = Array.from(brands);

  brandsContainer.innerHTML = proBrand.map(
    (p) => `
      <li>
        <button class="dropdown-item" onclick="productByBrandName('${p}')">${p}</button>
      </li>
    `
  ).join("");
}

function allProducts() {
  renderProducts(watches);
}

function productByBrandName(proBrand) {
  const brandArray = watches.filter((p) => p.brand === proBrand);
  renderProducts(brandArray);
}

function addToCart(id) {
  alert("Product ID " + id + " added to cart!");
}

// DOM ready
window.addEventListener("DOMContentLoaded", () => {
  let inputSearchElm = document.querySelector("#searchInput");
  let titleElmt = document.querySelector("#title");
  let descriptionElmt = document.querySelector("#description");
  let brandElmt = document.querySelector("#brand");
  let priceElmt = document.querySelector("#price");
  let stockElmt = document.querySelector("#stock");

  // searching products
  window.searchProduct = function () {
    let wordInput = inputSearchElm.value;
    let searchResult = watches.filter((p) =>
      p.title.toLowerCase().includes(wordInput.toLowerCase())
    );
    renderProducts(searchResult);
  };

  // add new product
  window.addNewProduct = function () {
    let newWatch = {
      id: Date.now(),
      title: titleElmt.value,
      description: descriptionElmt.value,
      price: priceElmt.value,
      stock: stockElmt.value,
      brand: brandElmt.value,
    };
    console.log(newWatch);

    let watchesFromLocal = getWatchesFromLocal() || [];
    watchesFromLocal.push(newWatch);
    setWatchesToLocal(watchesFromLocal);

    window.location.href = './index.html';
  };

  // initialize data
  let dataFromLocal = getWatchesFromLocal();
  if (!dataFromLocal) {
    setWatchesToLocal(watches);
    dataFromLocal = watches;
  }

  renderProducts(dataFromLocal);
  renderBrands();
});
