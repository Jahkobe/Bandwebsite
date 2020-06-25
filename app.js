if (typeof $ === 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file properly!')};
  
var num = 0;

$(() =>{
  const $quotes = ["Your mom goes to college- Napolean Dynamite", "I made like fifty of those at scout camp. -Napolean Dynamite", "There a lot of gangs at this school. -Napolean Dynamite", "I like her bangs. -Pedro"];
  const randomQuote = $quotes[Math.floor( Math.random() * $quotes.length)];
  $('.quote').append(randomQuote);


  //create the elements/ layout of the page and then style
  //push each item into its own object and then all of the objects into an array
  //creat a map that will map out a template for each item
  

  const insert = (keyDescription ,keyItem, keyImageTitle, keyImage, keyPrice, num) => {
    // console.log(keyDescription, keyItem, keyImage, keyPrice);
    $('#parent').append(`<div class=${keyDescription}>  </div>`);
    $(`.${keyDescription}`).append(`<div class="shoppingitemtitle">${keyItem}</div>`).addClass('shoppingItem');
    $(`.${keyDescription}`).append(`<div class=${keyImageTitle}></div>`);
    $(`.${keyImageTitle}`).append(`<img class="shoppingitemimage" src=${keyImage}></img>`).addClass('shoppingitemimagediv');
    $(`.${keyDescription}`).append(`<div class="shoppingitemprice">${keyPrice}</div>`);
    $(`.${keyDescription}`).append(`<button type="button" class="btn btn-dark add-cart cart${num}" >Add To Cart</button>`)
  }

  const itemsArr = [{
    description: 'classicshirt',
    item: 'shirtone',
    imagetitle: 'classic',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpvEOuICHlG2W3tq8ecusDGL3I82YWYOsChtb8Pco1NzQW3CIR_j8WAMSy-4344cV4cJdKRnS5pseEXwnMX8GxvMH1_0PZKpDWXZ9-bAW3SCPP_AQ6DqrdTw&usqp=CAE',
    price: '$30',
    inCart: 0
  }
  ,
  {
    description: 'yodashirt',
    item: 'shirttwo',
    imagetitle: 'yoda',
    image: 'https://ae01.alicdn.com/kf/H9c4a894c861b4dfe9ecbf29515f8a7b14/New-Fashion-starwars-tshirt-Men-Women-T-shirt-3D-Print-Star-Wars-Movie-Tee-shirts-Casual.jpg_640x640q70.jpg',
    price: '$30',
    inCart: 0
   }
   ,
  {
    description: 'r2d2headband',
    item: 'headband',
    imagetitle: 'r2d2',
    image: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7505057373482',
    price: '$15',
    inCart: 0
  }
  ,
  {
    description: 'starwarsshirt',
    item: 'shirtfour',
    image: 'yoga',
    image: 'https://ae01.alicdn.com/kf/H9c4a894c861b4dfe9ecbf29515f8a7b14/New-Fashion-starwars-tshirt-Men-Women-T-shirt-3D-Print-Star-Wars-Movie-Tee-shirts-Casual.jpg_640x640q70.jpg',
    price: '$30',
    inCart: 0
  }
  ,
  {
    description: 'r2d2headband2',
    item: 'headband2',
    imagetitle: 'r2d22',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpeZYmOlpSUrhRXbl8BnKXgyAabyBcajxhAw&usqp=CAU',
    price: '$15',
    inCart: 0
  }
  ,
  {
    description: 'classictshirt',
    item: 'shirtfive',
    imagetitle: 'classhirt',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQDXdahdf_b9Lfhgm6OTbk8fuP5O2VzZTzSw&usqp=CAU',
    price: '$30',
    inCart: 0
  }
  ,
  {
    description: 'cometothedarkside',
    item: 'shirtsix',
    imagetitle: 'vader',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgR0MxfDzRjHsaYmRZuoctr3tC5CDIZKq9Xw&usqp=CAU',
    price: '$30',
    inCart: 0
  }
  

  ]

  for(let i = 0; i < itemsArr.length; i++){
      // console.log(itemsArr[i])
      // console.log(num);
      
      num += 1;
      let description = itemsArr[i].description;
      let item = itemsArr[i].item;
      let imagetitle = itemsArr[i].imagetitle;
      let image = itemsArr[i].image;
      let price = itemsArr[i].price;
      insert(description ,item, imagetitle, image, price, num);
  }


  let carts = document.querySelectorAll('.add-cart');

  for(let i = 0; i < carts.length; i++){
      carts[i].addEventListener('click', () => {
        cartNumbers();
      })
  }
  
  function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
      localStorage.setItem('cartNumbers', productNumbers + 1);
    }else{
      localStorage.setItem('cartNumbers', 1);
    }
    
  }

})