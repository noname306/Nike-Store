const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const searchInput = document.querySelector(".input");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Function to update product display
function updateProductDisplay(index) {
  // Change the current slide
  wrapper.style.transform = `translateX(${-100 * index}vw)`;
  
  // Change the chosen product
  choosenProduct = products[index];
  
  // Change texts of currentProduct
  currentProductTitle.textContent = choosenProduct.title;
  currentProductPrice.textContent = "$" + choosenProduct.price;
  currentProductImg.src = choosenProduct.colors[0].img;
  
  // Assign new colors
  currentProductColors.forEach((color, idx) => {
    color.style.backgroundColor = choosenProduct.colors[idx].code;
  });
}

// Menu item click event
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    updateProductDisplay(index);
  });
});

// Search functionality
searchInput.addEventListener("keyup", function(event) {
  // Check if Enter key is pressed
  if (event.key === "Enter") {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm !== "") {
      // Find matching product index
      const foundIndex = products.findIndex(product => 
        product.title.toLowerCase().includes(searchTerm)
      );
      
      // If found, update display and highlight menu item
      if (foundIndex !== -1) {
        updateProductDisplay(foundIndex);
        
        // Highlight the corresponding menu item
        menuItems.forEach((item, idx) => {
          if (idx === foundIndex) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
        
        // Clear search input
        searchInput.value = "";
      }
    }
  }
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});