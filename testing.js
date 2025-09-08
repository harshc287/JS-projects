const watches = [
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
    brand: 'titan'
  }
]
// inputSearchElm = document.querySelector("#searchInput")
searchword = "neo"
function searchProduct(){
//   wordInput  = inputSearchElm.value

  searchResult = watches.filter((p)=>p.title.toLowerCase().includes(searchword.toLowerCase()))
  console.log("*******after search*******")

  renderProducts(searchResult)
  console.log(searchResult);
  console.log("**************")
  
  
}
function renderProducts(renProd){
    renProd.map((p)=>console.log(p.title))
}
renderProducts(watches)


searchProducts()
