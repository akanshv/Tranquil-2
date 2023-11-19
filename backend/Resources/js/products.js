var shoppingCart = (function () {
  cart = [];

  function Item(name, price,img, count) {  // Constructor
    this.name = name;
    this.price = price;
    this.img = img;
    this.count = count;
  }

  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

  // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }


  
  var obj = {};
  // Add to cart
  obj.addItemToCart = function (name, price, img, count) {
    for (var item in cart) {
      if (cart[item].name === name) {
        console.log('Anmol');
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, img, count);
    cart.push(item);
    saveCart();
  }
  
  // Set count from item
  obj.setCountForItem = function (name, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        console.log('pandey');
        cart[i].count++;
        break;
      }
    }
  };
  
  // Remove item from cart
  obj.removeItemFromCart = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count--;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
      item = cart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

  return obj;
})();



// Add to cart button
document.querySelectorAll('.add-to-cart').forEach(function (button) {
  console.log('Anmol Pandey00')
  button.addEventListener('click',  (event)=> {
    console.log('ANmol');
    event.preventDefault();
    var name = button.getAttribute('data-name');
    var price = Number(button.getAttribute('data-price'));
    var img = button.getAttribute('data-img');
    shoppingCart.addItemToCart(name, price, img, 1);
    displayCart();
  });
});
// document.querySelectorAll('.add-to-cart').forEach(button).addEventListener('click', ()=> {
//     var name = document.querySelectorAll('.add-to-cart').getAttribute('data-name');
//     var price = Number(document.querySelectorAll('.add-to-cart').getAttribute('data-price'));
//     var img = document.querySelectorAll('.add-to-cart').getAttribute('data-img');
//     shoppingCart.addItemToCart(name, price, img, 0);
//     displayCart();
//   });




// Clear items
document.querySelectorAll('.clear-cart').forEach(function (button) {
  button.addEventListener('click', function () {
    shoppingCart.clearCart();
    displayCart();
  });
});

// Display cart
function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";

  for(var i in cartArray) {
        output += "<div>"
            + "<div><img style='width: 100%;' src='" + cartArray[i].img + "'></div>"
            + "<div class='mb-3 text-center fs-5 fw-bolder'>" + cartArray[i].name + " (₹" + cartArray[i].price + ")</div>"
            // + "<div class='input-group mb-3 w-30 p-3'><button style='background:blue !important;' class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
            + "<div><input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
            // + "<button style='background:blue !important;' class='plus-item btn btn-primary input-group-addon me-3 rounded-end' data-name=" + cartArray[i].name + ">+</button>"
            + "<button style='background:red !important;' class='delete-item btn btn-danger rounded' data-name=" + cartArray[i].name + "><i class='fas fa-trash-alt'></i></button></div>"
            + "<div class='mb-3 text-center fs-6 fw-bold'>Price : ₹" + cartArray[i].total + "</div>"
            + "<hr>" 
            + "</div>"   
  }


  document.querySelector('.show-cart').innerHTML = output;
  document.querySelector('.total-cart').innerHTML = shoppingCart.totalCart();
  document.querySelector('.total-count').innerHTML = shoppingCart.totalCount();
}

// Delete item button
document.querySelector('.show-cart').addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-item')) {
    var name = event.target.getAttribute('data-name');
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  }
});

console.log('Two timrs');

// -1
// document.querySelector('.show-cart').addEventListener('click', function (event) {
//   if (event.target.classList.contains('minus-item')) {
//     var name = event.target.getAttribute('data-name');
//     shoppingCart.removeItemFromCart(name);
//     displayCart();
//   }
// });

// // +1
// document.querySelector('.show-cart').addEventListener('click', function (event) {
//   if (event.target.classList.contains('plus-item')) {
//     var name = event.target.getAttribute('data-name');
//     shoppingCart.addItemToCart(name);
//     displayCart();
//   }
// });

// Item count input
document.querySelector('.show-cart').addEventListener('change', function (event) {
  if (event.target.classList.contains('item-count')) {
    var name = event.target.getAttribute('data-name');
    var count = Number(event.target.value);
    shoppingCart.setCountForItem(name, count);
    displayCart();
  }
});

displayCart();