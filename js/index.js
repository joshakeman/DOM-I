const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// New Link
const newLink1 = document.createElement('a');
newLink1.textContent = "Our Team";
const newLink2 = document.createElement('a');
newLink2.textContent = "History";

let navBar = document.querySelector('nav');
navBar.append(newLink1);
navBar.prepend(newLink2);

//navigation links

let navLinks = document.querySelectorAll("nav a");

navLinks.forEach( currentValue => currentValue.style.color = "green");
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];


// CTA section

let h1 = document.querySelector('h1');
h1.textContent = siteContent["cta"]["h1"];

let btn = document.querySelector('button');
// btn.textContent = siteContent["cta"]["button"];
btn.textContent = "Blow up this site";

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//Main Content

let topH4 = document.querySelectorAll('.top-content h4');
topH4[0].textContent = siteContent["main-content"]["features-h4"];
topH4[1].textContent = siteContent["main-content"]["about-h4"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let topP = document.querySelectorAll('.top-content p');
topP[0].textContent = siteContent["main-content"]["features-content"];
topP[1].textContent = siteContent["main-content"]["about-content"];

let bottomH4 = document.querySelectorAll('.bottom-content h4');
bottomH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomH4[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomP = document.querySelectorAll('.bottom-content p');
bottomP[0].textContent = siteContent["main-content"]["services-content"];
bottomP[1].textContent = siteContent["main-content"]["product-content"];
bottomP[2].textContent = siteContent["main-content"]["vision-content"];

//Contact

let contactH4 = document.querySelectorAll('.contact h4');
contactH4[0].textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

//footer

let footerP = document.querySelectorAll('footer p');
footerP[0].textContent = siteContent["footer"]["copyright"];

//Events

let containerDiv = document.querySelector('.container');

function myFunction() {
  // let containerDiv = document.querySelector("body");
  containerDiv.remove()
  const atomicBomb = document.createElement('img');
  atomicBomb.setAttribute('src', 'https://3dsgm810md7fr0s6s2luyaf1-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/0ac43fecac55ec6c6e9e5d3de0f270c1_image-result-for-atom-bomb-explosion-nuclear-warfare-pinterest-cartoon-atomic-bomb-explosion_2560-1600.jpeg');
  document.querySelector('body').append(atomicBomb);
}

// function myFunction() {
//   // let containerDiv = document.querySelector("body");
//   navLinks.forEach( currentValue => currentValue.style.color = "blue");
// }

// btn.addEventListener("click", myFunction);

btn.addEventListener("click", myFunction);