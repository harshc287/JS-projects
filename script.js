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
    brand: 'titan'
  },
  {
    id: 3 ,
    title:'UNVEIL 3.0 Analog Watch',
    description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'sonata'
  },
  {
    id: 3 ,
    title:'UNVEIL 3.0 Analog Watch',
    description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'sonata'
  },
  {
    id: 3 ,
    title:'UNVEIL 3.0 Analog Watch',
    description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'sonata'
  },
  {
    id: 3 ,
    title:'UNVEIL 3.0 Analog Watch',
    description:'cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C',
    price: 5555,
    stock: 20,
    brand: 'sonata'
  }
]

renderCardElmt = document.querySelector('#renderCard');
renderCardElmt.innerHTML = watches.map(
                                  (w,i)=>`
                                  
<div class="col-sm-12 col-md-6 col-lg-4 g-3">
    <div class="card">
      <div class="card-body">
      <img src="./img/image3.webp" height="200px" class="d-block w-100 " alt="...">
    <h5 class="card-title">${w.title}</h5>
    <p class="card-text">Description: ${w.description}</p>
    <p class="card-text">In Stock: ${w.stock}</p>
    <p class="card-text"> price: ${w.price}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
`).join('')