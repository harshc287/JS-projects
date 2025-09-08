watches = [
  {
    id: 1,
    title:'Opulence Analog Watch',
    description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'FastTrack'
  },
  {
    id: 2 ,
    title:'Neo Splash 2.0 Analog ',
    description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'Titan'
  },
  {
    id: 3 ,
    title:'UNVEIL 3.0 Analog Watch',
    description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'Sonata'
  },
  {
    id: 4 ,
    title:'UNVEIL 3.0 Analog Watch',
    description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'Noise'
  },
  {
    id: 5 ,
    title:'UNVEIL 3.0 Analog Watch',
    description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'Sonata'
  },
  {
    id: 6 ,
    title:'UNVEIL 3.0 Analog Watch',
    description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'Sonata'
  }
]

//searching products

inputSearchElm = document.querySelector("#searchInput")
function searchProduct(){
  wordInput  = inputSearchElm.value

  searchResult = watches.filter((p)=>p.title.toLowerCase().includes(wordInput.toLowerCase()))
  renderProducts(searchResult)
}

//render products
function renderProducts(prodArray){

renderCardElmt = document.querySelector('#renderCard');
renderCardElmt.innerHTML = prodArray.map(
                                  (w)=>`
                                  
<div class="col-sm-12 col-md-6 col-lg-4 g-4">
    <div class="card shadow-lg">
      <div class="card-body">
      <img src="./img/image3.webp" height="200px"  style=" object-fit: cover;" class="d-block w-100 " alt="...">
    <h4 class="card-title mt-2 mb-3 fw-bold text-center">${w.title}</h4>
    <p class="card-text lead ">Description: ${w.description}</p>
    <p class="card-text">In Stock: ${w.stock}</p>
    <p class="card-text"> price: $${w.price}</p>
      <button type="button" class="btn btn-info w-100" onclick="addToCart()">
      <i class="fas fa-cart-plus"></i> Add to Cart
      </button>

      </div>
    </div>
  </div>
`).join('')
}

//brand filter

function renderBrands(){
    brands = new Set(watches.map((p)=> p.brand))
    proBrand = Array.from(brands)
    document.querySelector("#renderBrands").innerHTML= proBrand.map((p)=>
                                                    `<li>
                                                          <button class="dropdown-item" onclick="productByBrandName('${p}')" >${p}</button></li>`)
                                                          .join("")
}
renderBrands()

function productByBrandName(proBrand){
    brandArray = watches.filter((p)=>p.brand == proBrand)
    renderProducts(brandArray)
}

  function addToCart(id){
  alert("Product ID " + id + " added to cart!");
}

renderProducts(watches);
  renderBrands();

