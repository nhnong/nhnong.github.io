// product quantity incrementor 
function changequantity(amount) {
  const input = document.getElementById("productquantityinput");
  let newValue = parseInt(input.value) + amount;
  if (newValue < 1) newValue = 1;
  input.value = newValue;
}

// product image change on thumbnail click
function changeMainImage(thumbnail) {
    const container = thumbnail.closest('.images'); // find parent container
    const mainImage = container.querySelector('.productimage'); 
    mainImage.src = thumbnail.src;
}

// product size button color change on click
function changeButtonColor(button, optionsDiv) {
    const target = document.getElementById(button)
    
    const buttons = optionsDiv.querySelectorAll('.productsizebuttonclicked');
    // Reset all buttons to default color
    buttons.forEach(btn => btn.classList.remove('productsizebuttonclicked'));
    buttons.forEach(btn => btn.classList.add('productsizebutton'));

    // Add clicked color to the selected button
    target.classList.add('productsizebuttonclicked');
}


function toggleMenu() {
  const menuToggle = document.getElementById('menuiconbutton');
  const overlayMenu = document.getElementById('overlayhomeheadernav');

  overlayMenu.classList.toggle('active');


}


cartProducts = {

}



// record of products
const products = {
  // fluid bear
  product1: {
    title: "DIY Fluid Bear Painting Kit",
    image: "photobearsize.jpg",
    description: "Price varies by size",
    price: "$50.00",
    options: [
      { size: "18cm", price: "$50" },
      { size: "23cm", price: "$75" },
      { size: "30cm", price: "$100" },
      { size: "53cm", price: "$150" },
      { size: "100cm", price: "$500" }
    ],
    extraImages: [
      "photoproduct2.jpg",
      "photoproduct3.jpg"
    ],
    differentPrices: true
  },
  // fluid melody
  product2: {
    title: "DIY Fluid Melody Kit",
    image: "photoproduct4.png",
    description: "23cm",
    price: "$75.00"
  },

  // fluid kuromi
  product3: {
    title: "DIY Fluid Kuromi Kit",
    image: "photoproduct1.jpg",
    description: "23cm",
    price: "$75.00"
  },

  // fluid balloon do
  product4: {
    title: "DIY Fluid Balloon Dog Kit",
    image: "photoproduct5.png",
    description: "23cm",
    price: "$75.00"
  },

  // decoden kits phone
  product5: {
    title: "DIY Decoden Phone Case Kit",
    image: "photoproduct8phonecase.webp",
    description: "Available for iPhone cases",
    price: "$65.00",
    options: [
      { name: "iPhone 11", price: "$65.00" },
      { name: "iPhone 12", price: "$65.00" },
      { name: "iPhone 13", price: "$65.00" },
      { name: "iPhone 14", price: "$65.00" },
      { name: "iPhone 15", price: "$65.00" }
    ],
    colours: [
      { name: "Pink", hex: "#FF69B4" },
      { name: "Blue", hex: "#1E90FF" },
      { name: "Purple", hex: "#9370DB" },
      { name: "Green", hex: "#32CD32" }
    ]
  },
  // decoden kits airpod
  product6: {
    title: "DIY Decoden Airpod Case Kit",
    image: "photoproduct9airpod.jpeg",
    description: "Available 2 types",
    price: "$35.00",
    options: [
      { name: "AirPods 3rd Gen", price: "$35.00" },
      { name: "AirPods Pro", price: "$35.00" }
    ],
    colours: [
      { name: "Pink", hex: "#FF69B4" },
      { name: "Blue", hex: "#1E90FF" },
      { name: "Purple", hex: "#9370DB" },
      { name: "Green", hex: "#32CD32" }
    ]
  },
  // decoden kits mirror
  product7: {
    title: "DIY Decoden Brush Mirror Kit",
    image: "photoproduct7.webp",
    description: "7cm",
    price: "$35.00",
    colours: [
      { name: "Pink", hex: "#FF69B4" },
      { name: "Blue", hex: "#1E90FF" },
      { name: "Purple", hex: "#9370DB" },
      { name: "Green", hex: "#32CD32" }
    ]
  },
  // decoden kits hand mirror
  product8: {
    title: "DIY Decoden Hand Mirror Kit",
    image: "photoproductdecodenhandmirror.webp",
    description: "7cm",
    price: "$35.00",
    colours: [
      { name: "Pink", hex: "#FF69B4" },
      { name: "Blue", hex: "#1E90FF" },
      { name: "Purple", hex: "#9370DB" },
      { name: "Green", hex: "#32CD32" }
    ]
  },
  // decoden kits frame
  product9: {
    title: "DIY Decoden Mirror Kit",
    image: "photoproduct10decodenframe.jpg",
    description: "Available in 3 styles",
    price: "$80.00",
    options: [
      { name: "Rectangle 20cm", price: "$80.00" },
      { name: "Circle 20cm", price: "$80.00" },
      { name: "Wavy 20cm", price: "$80.00" }
    ],
    colours: [
      { name: "Pink", hex: "#FF69B4" },
      { name: "Blue", hex: "#1E90FF" },
      { name: "Purple", hex: "#9370DB" },
      { name: "Green", hex: "#32CD32" }
    ]
  }
};


function selectProducts(productId) {
  localStorage.setItem("selectedProduct", productId);
}

// showing matching products on click
function matchProducts(productId) {

  if (!document.body.classList.contains("productbody")) return;

  const product = products[productId];
  if (!product) return;

  const title = document.querySelector(".shopproducttitle")
  title.id = productId+'title';
  const image = document.getElementById("productpageimage");
  const price = document.getElementById("productpageprice");
  // const optionsDiv = document.getElementById("product-options");

  if (title) title.textContent = product.title;
  if (image) image.src = product.image;
  if (price) price.textContent = product.price;
  if (product.extraImages) {
    const thumbnail1 = document.getElementById("thumbnail1");
    const thumbnail2 = document.getElementById("thumbnail2");
    const thumbnail3 = document.getElementById("thumbnail3");
    thumbnail1.src = product.image;
    thumbnail2.src = product.extraImages[0];
    thumbnail3.src = product.extraImages[1];
  }
  else {
    //get element by class
    const thumbnails = document.querySelectorAll('.productthumbnail');
    thumbnails.forEach(thumbnail => {
      thumbnail.style.display = 'none'; 
    });
  }

  if (product.options) {
    const optiontext = 'Options';
    displayOptions(product.options, product, productId, optiontext);
  }

  if (product.colours) {
    const colourtext = 'Colours';
    displayOptions(product.colours, product, productId, colourtext);
  }

}

function displayOptions(options, product, productId, text) {
    const beforeOptions = document.getElementById("productpageoptions")

    const optionsDiv = document.createElement("div");

    optionsDiv.style.justifyContent = "flex-start" // Show the options div
    optionsDiv.className = "productoptions";
    
    const optionsTitle = document.createElement("p");
    optionsTitle.innerHTML = `Available ${text}:<br/>`;
    optionsTitle.className = "eightpx";
    
    beforeOptions.appendChild(optionsTitle);
    beforeOptions.appendChild(optionsDiv);


    options.forEach(option => {
      const button = document.createElement("button");
      button.className = "productsizebutton";

      if (product.differentPrices){
        button.textContent = `${option.size} - ${option.price}`;
        button.id = 'button'+productId+option.size; // Set the button ID to the size
      }
      else {
        button.textContent = `${option.name}`;
        button.id = 'button'+productId+option.name; // Set the button ID to the name
      }

      if (options[0] == option) {
        button.classList.add('productsizebuttonclicked'); // Add clicked color to the first option
      }

      button.style.marginBottom = "5px"; 

      button.onclick = function() {
        changeButtonColor(this.id, optionsDiv);
        const priceElement = document.getElementById("productpageprice");
        if (product.differentPrices) {
          priceElement.textContent = option.price;
        }
      };

      optionsDiv.appendChild(button);
    });

}

window.onload = function () {
  const productId = localStorage.getItem("selectedProduct");
  if (productId) matchProducts(productId);
};


// closing added to cart overlay
function closeOverlay() {
  const content = document.getElementById('shopmodalcontent');
  const overlay = document.getElementById('shopmodaloverlay');

  if (overlay && content) {
    overlay.classList.add("displaynone")
  }
  else {
    console.warn('Element not found');
  }
}

// opening overlay after clicking 'add to cart'
function openOverlay() {
  const content = document.getElementById('shopmodalcontent');
  const overlay = document.getElementById('shopmodaloverlay');

  productId = saveToCart()
  displayOverlay(productId)

  if (overlay && content) {
    overlay.classList.remove("displaynone")
  }
  else {
    console.warn('Element not found');
  }

}

function saveToCart() {
  // localStorage.removeItem('cartProducts')

  // need image, title, price, attributes (select button class=clicked)
  const img = document.getElementById('productpageimage'); // select first image instead

  const title = document.querySelector('.shopproducttitle');
  titleId = title.id;
  croppedTitleId = titleId.slice(0,8);

  const price = document.getElementById('productpageprice');
  const descriptions = document.getElementsByClassName('productsizebuttonclicked');
  const quantity = document.getElementById('productquantityinput').value;

  // id of specific item that has been added to cart 
  productId = croppedTitleId;
  descriptionString = "";

  if (descriptions) {
    for (const description of descriptions) {
      productId = productId + description.textContent;
      if (descriptionString == ""){
        descriptionString = descriptionString + description.textContent
      }
      else {
        descriptionString = descriptionString + ", " + description.textContent
      }
    }
  }

  productId = productId.toLowerCase().replace(/\s/g, '');

  let priceString = price.textContent.replace(/[^0-9.]/g, "");
  let cart = JSON.parse(localStorage.getItem('cartProducts')) || {};
  let priceFloat = parseFloat(priceString);
  let quantityFloat = parseFloat(quantity);


  const currentProduct = {
    id: productId,
    title: title.textContent,
    image: img.src,
    price: price.textContent,
    priceFloat: priceFloat,
    description: descriptionString,
    quantity: quantityFloat,
    remove: 'remove'+productId,
  }

  if (currentProduct.description == "") {
    delete currentProduct.description;
  }
    
  if (cart[productId]) {
      cart[productId].quantity += currentProduct.quantity;
      cart[productId].totalPrice += (currentProduct.quantity)*(cart[productId].priceFloat);
  } else {
      cart[productId] = currentProduct;
      cart[productId].totalPrice = (currentProduct.quantity)*(currentProduct.priceFloat);
  }

  // save item to local storage
  localStorage.setItem('cartProducts', JSON.stringify(cart));
  const savedCart = JSON.parse(localStorage.getItem('cartProducts'));
  console.log("Cart data retrieved from localStorage:", savedCart);
  
  return productId;
}

// show correct product title, image, description and price on the added to cart overlay
function displayOverlay(productId) {
  console.log(productId);
  let cart = JSON.parse(localStorage.getItem('cartProducts'));
  document.getElementById('overlayproductname').textContent = cart[productId].title; // title
  document.getElementById('overlayproductprice').textContent = cart[productId].price; // price
  if (cart[productId].description) {
    document.getElementById('overlaydescription').textContent = cart[productId].description; // desc
  }
  document.querySelector('.overlaycartproductimg').src = cart[productId].image; // image
}


document.addEventListener('DOMContentLoaded', function() {

  displayCartItems();

  displayCheckoutItems();

});

window.addEventListener('DOMContentLoaded', () => {

  let checkoutTotal = parseFloat(localStorage.getItem('cartTotalPrice')) || 0;
  console.log("Checkout total price:", checkoutTotal);
  // updating checkout total price
  if ((document.body.classList.contains("checkoutbody"))&& (checkoutTotal > 0)) {
    document.getElementById('checkoutsubtotal').textContent = '$' + checkoutTotal.toFixed(2);
    document.getElementById('checkouttotal').textContent = '$' + checkoutTotal.toFixed(2);
  }

});


const htmlSnippet = `
    <div class="aligncenter">
      <img class="cartproductimg">
        <div class="cartquantity">
          <button class="cartproductadd" onclick="changequantity(-1)">−</button>
          <input type="number" class="cartquantityinput" min="1">
          <button class="cartproductrem" onclick="changequantity(1)">+</button>
          <button class="cartdeleteiconbutton"><img src="symboltrash.png" alt="Delete" class="headericon"></button>   
        </div>
    </div>
    <div>
      <a href="pageproduct.html">
        <p class="shopproducttitle">Product Name</p>
      </a>
      <p class="cartproductprice"></p>
      <p class="cartproductquantity"></p>
      <p class="cartproductdesc"></p>
    </div>
`;  

function displayCartItems(){
  
    let cart = JSON.parse(localStorage.getItem('cartProducts'));
    if (!cart) return;
    if (!document.body.classList.contains("cartbody")) return;

    let outerDiv = document.querySelector('.cartproductslist');
    let totalPrice = 0;

    for (item in cart) {
      console.log(cart[item].title);
      // console.log(cart[item].image);
      console.log(cart[item].price);
      if (cart[item].description) {
        console.log(cart[item].description);
      }

      productDiv = document.createElement("div");
      productDiv.className = 'cartproduct';
      productDiv.id = 'cart'+cart[item].id;

      productBreakline = document.createElement("hr");
      productBreakline.className = 'productbreakline'
      productBreakline.id = 'breakline'+cart[item].id;

      // inserting the html display of item added to cart, and assigning user selected details
      productDiv.insertAdjacentHTML('beforeend', htmlSnippet);

      productDiv.querySelector('.cartproductimg').src = cart[item].image;
      productDiv.querySelector('.shopproducttitle').textContent = cart[item].title;
      productDiv.querySelector('.cartproductprice').textContent = '$'+cart[item].totalPrice.toFixed(2);
      productDiv.querySelector('.cartproductquantity').textContent = 'Quantity: ' + cart[item].quantity;
      quantityCount = productDiv.querySelector('.cartquantityinput');
      quantityCount.id = 'quantity'+cart[item].id;
      quantityCount.value = cart[item].quantity;

      if (cart[item].description) {
        productDiv.querySelector('.cartproductdesc').textContent = cart[item].description;
      }

      outerDiv.appendChild(productDiv);
      outerDiv.appendChild(productBreakline);

      totalPrice += cart[item].totalPrice;

      // making buttons responsive 
      const deleteButton = productDiv.querySelector('.cartdeleteiconbutton');
      deleteButton.id = cart[item].remove; // Set the ID for the delete button
      console.log("Delete button ID:", deleteButton.id);
      console.log("Product ID for delete:", cart[item].id);
      deleteButton.setAttribute('onclick', `deleteItem('${deleteButton.id}')`);

    }
    // displaying total prices
    document.getElementById('cartsubtotal').textContent = '$'+totalPrice.toFixed(2);
    document.getElementById('carttotal').textContent = '$'+totalPrice.toFixed(2);
    localStorage.setItem('cartTotalPrice', totalPrice);
    console.log("Total price of cart:", totalPrice);
}

function deleteItem(deleteButtonId) {
  let cart = JSON.parse(localStorage.getItem('cartProducts')) || {};
  console.log("Delete button clicked for ID:", deleteButtonId);
  // deleteButtonId = deleteButtonId.id;
  const productId = String(deleteButtonId).slice(6); 
  console.log("Product ID to delete:", productId);
  if (!cart[productId]) return; 
  delete cart[productId]; 

  localStorage.setItem('cartProducts', JSON.stringify(cart));
  document.querySelector('.cartproductslist').innerHTML = ''; // Clear the cart display
  displayCartItems(); 
}

document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains("cartbody")) return;

  let cart = JSON.parse(localStorage.getItem('cartProducts'));
  let totalPrice = parseFloat(localStorage.getItem('cartTotalPrice')) || 0;
  if (!cart || 0) return;

  const checkoutButton = document.getElementById('cartcheckout');
  checkoutButton.addEventListener('click', () => {


    if (cart && totalPrice) {
      window.location.href = 'pagecheckout.html';
    } else {
      console.log('Cart is empty');
    }
  })
});


function checkoutShowItems() {

  let button = document.getElementById('checkouttoggle');
  let content = document.getElementById('checkouttogglecontent');

  if (button.textContent == 'Show Details') {
    content.style.display = 'block';
    button.textContent = 'Hide Details';
  }
  else {
    content.style.display = 'none';
    button.textContent = 'Show Details';
  }
};

const htmlSnippetCheckout = `
<img class="checkoutproductimg">
<div class="checkoutproductdetails">
  <p id="checkoutproductname" class="bold"></p> 
  <p id="checkoutproductprice"></p>
  <p id="checkoutdescription"></p>
  <p id="checkoutquantity"></p>
</div>
`

function displayCheckoutItems() {
  cart = JSON.parse(localStorage.getItem('cartProducts')) || {};
  if (!document.body.classList.contains("checkoutbody")) return;

  let outerDiv = document.getElementById('checkouttogglecontent');
  outerDiv.innerHTML = ''; // Clear previous content

  for (item in cart) {
    let productDiv = document.createElement("div");
    productDiv.className = 'checkoutcartproduct';
    productDiv.insertAdjacentHTML('beforeend', htmlSnippetCheckout);

    productDiv.querySelector('.checkoutproductimg').src = cart[item].image;
    productDiv.querySelector('#checkoutproductname').textContent = cart[item].title;
    productDiv.querySelector('#checkoutproductprice').textContent = '$' + cart[item].totalPrice.toFixed(2);
    productDiv.querySelector('#checkoutquantity').textContent = 'Quantity: ' + cart[item].quantity;
    if (cart[item].description) {
      productDiv.querySelector('#checkoutdescription').textContent = cart[item].description;
    }
    productBreakline = document.createElement("hr");
    productBreakline.className = 'productbreakline';

    outerDiv.appendChild(productDiv);
    outerDiv.appendChild(productBreakline);
  }

}