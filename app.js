if (typeof $ === 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file properly!')};
  

$(() =>{
  const $quotes = ["Your mom goes to college- Napolean Dynamite", "I made like fifty of those at scout camp. -Napolean Dynamite", "There a lot of gangs at this school. -Napolean Dynamite", "I like her bangs. -Pedro"];
  const randomQuote = $quotes[Math.floor( Math.random() * $quotes.length)];
  $('.quote').append(randomQuote);


  //create the elements/ layout of the page and then style
  //push each item into its own object and then all of the objects into an array
  //creat a map that will map out a template for each item
  

  const insert = (key, keyTwo, keyThree) => {
    $("#parent").append('<div id="newElement"></div>');
    $("#newElement").addClass('shoppingItem');
    $('.shoppingItem').append('<div class="shoppingitemtitle"></div>');
    $('.shoppingItem').append('<div class="shoppingitemimagediv"></div>');
    $('.shoppingitemimagediv').append(`<img class="shoppingitemimage" src=${keyTwo}>`);
    $('.shoppingItem').append('<div class="shoppingitemprice"></div>');
    $('.shoppingItem').append('<button class="shoppingitembutton">Add To Cart</button>');
    $('.shoppingitemtitle').append(key);
    $('.shoppingitemprice').append(keyThree);
  }

  const itemsArr = [{
    item: 'shirt',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpvEOuICHlG2W3tq8ecusDGL3I82YWYOsChtb8Pco1NzQW3CIR_j8WAMSy-4344cV4cJdKRnS5pseEXwnMX8GxvMH1_0PZKpDWXZ9-bAW3SCPP_AQ6DqrdTw&usqp=CAE',
    price: '$30'
  }
  ]

  for(let i = 0; i < itemsArr.length; i++){
      console.log(itemsArr[i])
      let item = itemsArr[i].item;
      let image = itemsArr[i].image;
      let price = itemsArr[i].price;
      insert(item, image, price);
  }
  

})