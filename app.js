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
  

  const insert = (keyDescription ,keyItem, keyImageTitle, keyImage, keyPrice) => {
    console.log(keyDescription, keyItem, keyImage, keyPrice);
    $('#parent').append(`<div class=${keyDescription}>  </div>`);
    $(`.${keyDescription}`).append(`<div class="shoppingitemtitle">${keyItem}</div>`).addClass('shoppingItem');
    $(`.${keyDescription}`).append(`<div class=${keyImageTitle}></div>`);
    $(`.${keyImageTitle}`).append(`<img class="shoppingitemimage" src=${keyImage}></img>`).addClass('shoppingitemimagediv');
    $(`.${keyDescription}`).append(`<div class="shoppingitemprice">${keyPrice}</div>`);
    $(`.${keyDescription}`).append(`<button>Add To Cart</button>`)
  }

  const itemsArr = [{
    description: 'classicshirt',
    item: 'shirtone',
    imagetitle: 'classic',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpvEOuICHlG2W3tq8ecusDGL3I82YWYOsChtb8Pco1NzQW3CIR_j8WAMSy-4344cV4cJdKRnS5pseEXwnMX8GxvMH1_0PZKpDWXZ9-bAW3SCPP_AQ6DqrdTw&usqp=CAE',
    price: '$30'
  }
  ,
  {
    description: 'yodashirt',
    item: 'shirttwo',
    imagetitle: 'yoda',
    image: 'https://ae01.alicdn.com/kf/H9c4a894c861b4dfe9ecbf29515f8a7b14/New-Fashion-starwars-tshirt-Men-Women-T-shirt-3D-Print-Star-Wars-Movie-Tee-shirts-Casual.jpg_640x640q70.jpg',
    price: '$30'
   }
   ,
  {
    description: 'r2d2headband',
    item: 'headband',
    imagetitle: 'r2d2',
    image: 'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7505057373482',
    price: '$15'
  }
  ]

  for(let i = 0; i < itemsArr.length; i++){
      // console.log(itemsArr[i])
      // console.log(num);
      
      num = num+1;
      let description = itemsArr[i].description;
      let item = itemsArr[i].item;
      let imagetitle = itemsArr[i].imagetitle;
      let image = itemsArr[i].image;
      let price = itemsArr[i].price;
      insert(description ,item, imagetitle, image, price);
  }
  

})