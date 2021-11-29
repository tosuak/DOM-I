const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

console.log('project wired!')

const navItem1 = document.querySelector('nav a');
const navItem2 = navItem1.nextElementSibling;
const navItem3 = navItem2.nextElementSibling;
const navItem4 = navItem3.nextElementSibling;
const navItem5 = navItem4.nextElementSibling;
const navItem6 = navItem5.nextElementSibling;
const logo = document.querySelector('#logo-img');
const bigTitle = document.querySelector('.cta-text h1');
const button = document.querySelector('.cta-text button');
const topImg = document.querySelector('#cta-img');
const features = document.querySelector('.top-content .text-content:nth-of-type(1) h4');
const featureContent = features.nextElementSibling;
const about = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
const aboutContent = about.nextElementSibling;
const middleImg = document.querySelector('#middle-img');
const service = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
const serviceContent = service.nextElementSibling;
const product = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
const productContent = product.nextElementSibling;
const vision = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
const visionContent = vision.nextElementSibling;
const contactTitle = document.querySelector('.contact h4');
const contactAddress = contactTitle.nextElementSibling;
const contactPhone = contactAddress.nextElementSibling;
const contactEmail = contactPhone.nextElementSibling;
const footer = document.querySelector('footer a');

navItem1.textContent = siteContent['nav']['nav-item-1'];
navItem1.className = 'italic';
navItem2.textContent = siteContent['nav']['nav-item-2'];
navItem2.className = 'italic';
navItem3.textContent = siteContent['nav']['nav-item-3'];
navItem3.className = 'italic';
navItem4.textContent = siteContent['nav']['nav-item-4'];
navItem4.className = 'italic';
navItem5.textContent = siteContent['nav']['nav-item-5'];
navItem5.className = 'italic';
navItem6.textContent = siteContent['nav']['nav-item-6'];
navItem6.className = 'italic';

logo.src = siteContent['images']['logo-img'];
bigTitle.textContent = siteContent['cta']['h1'];
button.textContent = siteContent['cta']['button'];
topImg.src = siteContent['images']['cta-img'];
features.textContent = siteContent['main-content']['features-h4'];
featureContent.textContent = siteContent['main-content']['features-content'];
about.textContent = siteContent['main-content']['about-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];
middleImg.src = siteContent['images']['accent-img'];
service.textContent = siteContent['main-content']['services-h4'];
serviceContent.textContent = siteContent['main-content']['services-content'];
product.textContent = siteContent['main-content']['product-h4'];
productContent.textContent = siteContent['main-content']['product-content'];
vision.textContent = siteContent['main-content']['vision-h4'];
visionContent.textContent = siteContent['main-content']['vision-content'];
contactTitle.textContent = siteContent['contact']['contact-h4'];
contactAddress.textContent = siteContent['contact']['address'];
contactPhone.textContent = siteContent['contact']['phone'];
contactEmail.textContent = siteContent['contact']['email'];
footer.textContent = siteContent['footer']['copyright'];
footer.className = 'bold';