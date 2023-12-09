//======================================DAX JS=====================================//
/* Koriscenje funkcije stvoriPorukicu('Upesno!', 1, 5); 
            Poruka za ispis korisniku -  ^^      ^^ ^^ - vreme trajanja u sekundama
                                                 ^^ - tip greske ( 1 - tacno, 2 - greska)
*/

//=================================SPECIAL OFFER===================================//

var specOffer = document.getElementById('spec-offer')
specOffer.textContent = 'Free shipping on all products over 100$'

//====================================NAV BAR======================================//
// Definišemo podatke za meni
var menuData = [
    { label: "Home", link: "#", subMenu: [
        { label: "Home V1", link: "index.html" },
        { label: "Home V2", link: "index.html", badge: "PRO" }
      ]
    },
    { label: "Men", link: "#shop" },
    { label: "Women", link: "#shop" },
    { label: "Shop", link: "#shop" },
    { label: "Sale", link: "#shop" },
    { label: "About Author", link: "about-author.html", isButton: true, classes: "btn btn-dark rounded-pill" }
  ];
  
  // Prikazuje meni
  function generateMenu() {
    var container = document.getElementById('navbarContainer');
    var ul = document.createElement("ul");
    ul.id = "navbar";
    ul.classList.add("navbar-nav", "fw-bold", "justify-content-end", "align-items-center", "flex-grow-1");
  
    menuData.forEach(element => {
      var li = document.createElement("li");
      li.classList.add("nav-item");
  
      if (element.subMenu) {
        var dropdown = document.createElement("li");
        dropdown.classList.add("nav-item", "dropdown");
  
        var link = document.createElement("a");
        link.classList.add("nav-link", "me-5", "active", "dropdown-toggle", "border-0");
        link.href = element.link;
        link.setAttribute("data-bs-toggle", "dropdown");
        link.setAttribute("aria-expanded", "false");
        link.innerHTML = element.label;
  
        var dropdownMenu = document.createElement("ul");
        dropdownMenu.classList.add("dropdown-menu", "fw-bold");
  
        element.subMenu.forEach(subElement => {
          var subLi = document.createElement("li");
          var subLink = document.createElement("a");
          subLink.classList.add("dropdown-item");
          subLink.href = subElement.link;
          subLink.innerHTML = `${subElement.label} ${subElement.badge ? `<span class="badge bg-primary">${subElement.badge}</span>` : ""}`;
          subLi.appendChild(subLink);
          dropdownMenu.appendChild(subLi);
        });
  
        dropdown.appendChild(link);
        dropdown.appendChild(dropdownMenu);
        ul.appendChild(dropdown);
      } else {
        var link = document.createElement("a");
        link.classList.add("nav-link", "me-5");
        link.href = element.link;
        link.innerHTML = element.label;

        li.appendChild(link);
        ul.appendChild(li);
      }
    });
  
    container.appendChild(ul);
  }
  
  // Pozivamo funkciju za prikaz menija
  generateMenu();
//=====================================SHOP========================================//
let url = window.location.pathname;
url = (url=='/shanner/')?'/shanner/index.html':url;
// console.log(url);
window.onload = function(){
if(url=='/shanner/index.html'){

var shopData = [
    { imageUrl: 'assets/images/card-large-item1.jpg', title: 'Running shoes for men', price: '$79' },
    { imageUrl: 'assets/images/card-large-item2.jpg', title: 'Running shoes for men', price: '$119' },
    { imageUrl: 'assets/images/card-large-item3.jpg', title: 'Running shoes for men', price: '$279' },
    { imageUrl: 'assets/images/card-large-item4.jpg', title: 'Running shoes for men', price: '$79' },
    { imageUrl: 'assets/images/card-large-item5.jpg', title: 'Running shoes for men', price: '$79' },
    { imageUrl: 'assets/images/card-large-item6.jpg', title: 'Running shoes for men', price: '$39' },
    { imageUrl: 'assets/images/card-large-item7.jpg', title: 'Running shoes for men', price: '$69' },
    { imageUrl: 'assets/images/card-large-item8.jpg', title: 'Running shoes for men', price: '$89' },
    { imageUrl: 'assets/images/card-large-item9.jpg', title: 'Running shoes for men', price: '$99' }
]

// Funkcija za dinamicko kreiranje bloka featured products
function generateShop() {
var shopContainer = document.getElementById('shop-container');
shopContainer.className = 'product-content product-store d-flex justify-content-between flex-wrap'
    
var buttonCounter = 0;
// Petlja koja pravi html sadrzaj i ubacije u productCard
shopData.forEach(element => {
    var shopifyGrid = document.createElement('div');
    shopifyGrid.className = 'col-lg-4 col-md-12 col-sm-12 mb-4 pe-3'
    shopifyGrid.innerHTML = `
        <div class="product-card position-relative">
            <div class="card-img">
            <img src="${element.imageUrl}" alt="product-item" class="product-image img-fluid">
            <div class="cart-concern position-absolute d-flex justify-content-center">
            <div class="cart-button d-flex gap-2 justify-content-center align-items-center">
                <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modallong">
                <svg class="shopping-carriage">
                    <use xlink:href="#shopping-carriage"></use>
                </svg>
                </button>
                <button type="button" class="btn btn-light prikaziModalDugme" data-bs-target="#modaltoggle" data-bs-toggle="modal" id='shopButton${buttonCounter}'>
                <svg class="quick-view">
                        <use xlink:href="#quick-view"></use>
                      </svg>
                </button>
            </div>
            </div>
            <!-- cart-concern -->
            </div>
            <div class="card-detail d-flex justify-content-between align-items-center mt-3">
            <h3 class="card-title fs-6 fw-normal m-0">
                <a href="single-product.html">${element.title}</a>
            </h3>
            <span class="card-price fw-bold">${element.price}</span>
            </div>
        </div>
    `;
    buttonCounter++;
    console.log(buttonCounter);
    // 
    shopContainer.appendChild(shopifyGrid);
}); 
}

// Pozivanje funkcije za generisanje produkata
generateShop();

//================================FEATURED PRODUCTS================================//
var products = [
{ imageUrl: 'assets/images/card-item6.jpg', title: 'Running shoes for men', price: '$89' },
{ imageUrl: 'assets/images/card-item7.jpg', title: 'Running shoes for men', price: '$99' },
{ imageUrl: 'assets/images/card-item8.jpg', title: 'Running shoes for men', price: '$69' },
{ imageUrl: 'assets/images/card-item9.jpg', title: 'Walking shoes for men', price: '$49' },
{ imageUrl: 'assets/images/card-item10.jpg', title: 'Walking shoes for men', price: '$39' }
];

// Funkcija za dinamicko kreiranje bloka featured products
function generateProductCards() {
var productContainer = document.getElementById('product-container');

// Petlja koja pravi html sadrzaj i ubacije u productCard
products.forEach(element => {
    var productCard = document.createElement('div');
    productCard.className = 'col mb-4 mb-3';
    productCard.innerHTML = `
    <div class="product-card position-relative">
        <div class="card-img">
        <img src="${element.imageUrl}" alt="product-item" class="product-image img-fluid">
        </div>
        <div class="card-detail d-flex justify-content-between align-items-center mt-3">
        <h3 class="card-title fs-6 fw-normal m-0">
            <a href="single-product.html">${element.title}</a>
        </h3>
        <span class="card-price fw-bold">${element.price}</span>
        </div>
    </div>
    `;

    // 
    productContainer.appendChild(productCard);
});
}

// Pozivanje funkcije za generisanje produkata
generateProductCards();

// Funkcija za dinamicko kreiranje bloka featured products
function generateProductCardsLP() {
  var productContainerLP = document.getElementById('product-container-lp');
  
  // Petlja koja pravi html sadrzaj i ubacije u productCard
  products.findLast(element => {
      var productCardLP = document.createElement('div');
      productCardLP.className = 'col mb-4 mb-3';
      productCardLP.innerHTML = `
      <div class="product-card position-relative">
          <div class="card-img">
          <img src="${element.imageUrl}" alt="product-item" class="product-image img-fluid">
          </div>
          <div class="card-detail d-flex justify-content-between align-items-center mt-3">
          <h3 class="card-title fs-6 fw-normal m-0">
              <a href="single-product.html">${element.title}</a>
          </h3>
          <span class="card-price fw-bold">${element.price}</span>
          </div>
      </div>
      `;
  
      // 
      productContainerLP.appendChild(productCardLP);
  });
  }
  
  // Pozivanje funkcije za generisanje produkata
  generateProductCardsLP();

//Dodavanje kolicine u modalu
var dodaj_modal_broj = document.getElementById('modal-add');
var oduzmi_modal_broj = document.getElementById('modal-back');
var broj_modal = document.getElementById('quantity_001');

var greska_modal = document.getElementById('greska_modal');
var btn_modal = document.getElementById('btn_modal');
var opis_greske_modal = document.getElementById('opis_greske_modal');

btn_modal.addEventListener('click', f => { 
    if(broj_modal.value <= 0) { greska_modal.classList.remove('d-none'); greska_modal.classList.add('d-flex'); 
    opis_greske_modal.textContent = 'Ne mozes poruciti 0 pari!'; }
    else { poruci() }
 })

dodaj_modal_broj.addEventListener('click', f => { 
    if(broj_modal.value >= 10) { greska_modal.classList.remove('d-none'); greska_modal.classList.add('d-flex');
    opis_greske_modal.textContent = 'Ne mozes izabrati vise od 10 pari od jednom!';
    }
    else { broj_modal.value ++; greska_modal.classList.remove('d-flex'); greska_modal.classList.add('d-none'); }
})
oduzmi_modal_broj.addEventListener('click', f => { 
    if(broj_modal.value <= 0) { greska_modal.classList.remove('d-none'); greska_modal.classList.add('d-flex');
    opis_greske_modal.textContent = 'Ne mozes izabrati manje od 0 pari!'; }
    else { broj_modal.value --; greska_modal.classList.remove('d-flex'); greska_modal.classList.add('d-none'); }
})

//ispisivanje greske u modalu
var loading_store = document.getElementById('loading-shop')
//loading porudzbine
function poruci() {
    // Prikaz loading poruke
    prikaziLoading();
  
    // Simulacija čekanja od 3 sekunde
    setTimeout(function() {
      // Sakrij loading poruku
        sakrijLoading();
      // Prikazi poruku o uspešnoj porudžbini
    }, 2000);
  }
  
  function prikaziLoading() {
    $('#modaltoggle').modal('hide'); 
    loading_store.classList.remove('d-none')
    loading_store.classList.add('d-block')
  }
  
  function sakrijLoading() {
    loading_store.classList.remove('d-block'); loading_store.classList.add('d-none')
    stvoriPorukicu('You have successfully added the product to the basket!', 1, 5);
  }
  

//================================END FEATURED PRODUCTS================================//

//================================SHOW MODAL FUNCTION=================================//

var dugmadKreiranja = document.querySelectorAll('.prikaziModalDugme')

dugmadKreiranja.forEach(element => {
    element.addEventListener('click', function(event) {
      if(event.target.id)
      {
        kreirajModal((event.target.id).substring(10))
      }
      else
      {
        kreirajModal((event.target.parentElement.id).substring(10))
      }
    });
});

function kreirajModal(element){
    var modalBody = document.getElementById('modal-body-id')

    modalBody.innerHTML = `
    <div class="col-lg-12 col-md-12 me-3">
    <div class="image-holder">
      <img src="${shopData[element].imageUrl}" alt="Shoes" width="465" height="450">
    </div>
  </div>
  <div class="col-lg-12 col-md-12">
    <div class="summary">
      <div class="summary-content fs-6">
        <div class="product-header d-flex justify-content-between mt-4">
          <h3 class="display-7">${shopData[element].title}</h3>
          <div class="modal-close-btn">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            </button>
          </div>
        </div>
        <span class="product-price fs-3">${shopData[element].price}</span>
        <div class="product-details">
          <p class="fs-7">Buy good shoes and a good mattress, because when you're not in one you're in the
            other. With four pairs of shoes, I can travel the world.</p>
        </div>

        <!-- variations-form -->
        <div class="categories d-flex flex-wrap pt-3">
          <strong class="pe-2">Categories:</strong>
          <a href="#" title="categories">Clothing,</a>
          <a href="#" title="categories">Men's Clothes,</a>
          <a href="#" title="categories">Tops & T-Shirts</a>
        </div>
      </div>
    </div>
  </div>
    `;
}

//==============================END SHOW MODAL FUNCTION===============================//

//==============================SWIPER

var swiper6 = new Swiper(".mySwiper6", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    prev: {
      shadow: false,
      origin: "left center",
      translate: ["-5%", 0, -200],
      rotate: [0, 70, 0],
    },
    next: {
      origin: "right center",
      translate: ["5%", 0, -200],
      rotate: [0, -70, 0],
    },
  },
});

//==================================PRIMENA SNEGA===================================//
/*
function prikaziElement() {
  var danas = new Date();
  var pocetniDatum = new Date(danas.getFullYear(), 11, 1); // 11 predstavlja decembar jer se meseci numerišu od 0 do 11
  var zavrsniDatum = new Date(danas.getFullYear() + 1, 0, 30); // 0 predstavlja januar

  if (danas >= pocetniDatum && danas <= zavrsniDatum) {
      specOffer.textContent = 'Happy Xmas and New Year! Free Shipping'

      // Prikazi element ako je trenutni datum između 1. decembra i 30. januara
      $("#elementZaPrikaz").show();
      
      // Učitaj skriptu za sneg
      ucitajSkriptu("https://cdn.jsdelivr.net/npm/christmas-snow-3d/build/snow3d.js");
  } else {
      // Sakrij element ako trenutni datum nije u tom opsegu
      specOffer.textContent = 'Free Shipping above 100$'
  }
}

// Funkcija za dinamičko učitavanje skripte
function ucitajSkriptu(src) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
}

// Pozovi funkciju prilikom učitavanja stranice i prilikom promene datuma
$(document).ready(function () {
  prikaziElement();
  setInterval(prikaziElement, 60000);
});*/

//====================================SCROLL===========================================//

$(document).on("ready", function() {

  function scrollToAnchor(aid){
      const destination = $("a[name='"+ aid +"']");
      $('html,body').animate({
          scrollTop: destination.offset().top
      },'slow');
  }

  $(document).on('click', '.smooth-link', function(){
      scrollToAnchor('shop');
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('#toTopBtn').fadeIn();
    } else {
      $('#toTopBtn').fadeOut();
    }
  });

  $('#toTopBtn').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});


//Timer

document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

});

//===============================dynamic slider

var swiperDynamic = document.getElementById('swiper-dax')
for(let i = 1; i < 10; i++)
{
  swiperDynamic.innerHTML += ` <div class="swiper-slide"><img class="rounded" src="assets/images/card-item${i}.jpg" alt="Slika ${i}"/></div>`;
}

//=============================================

  }
}

//===================================END OF HOME PAGE======================================//

//==================================REGISTER FORM=====================================// ima i malo logina :)

var loginSubmit = document.getElementById('loginSubmit')

var emailLogin = document.getElementById('fr-email-login')
var passwordLogin = document.getElementById('fr-password-login')

var ELabelLogin = document.getElementById('ELabelLogin')
var PWLabelLogin = document.getElementById('PWLabelLogin')

LoginSubmit.addEventListener('click', proveraL)

var nrEmailLogin, nrPWLogin;
function proveraL(){

  if(!reEmail.test(emailLogin.value))
  {
      ELabelLogin.classList.remove('d-none'); ELabelLogin.classList.add('d-block'); nrEmailLogin = 1;
  } else { ELabelLogin.classList.remove('d-block'); ELabelLogin.classList.add('d-none'); nrEmailLogin = 0; }

  if(!rePassword.test(passwordLogin.value))
  {
    PWLabelLogin.classList.remove('d-none'); PWLabelLogin.classList.add('d-block'); nrPWLogin = 1;
  } else { 
    PWLabelLogin.classList.remove('d-block'); PWLabelLogin.classList.add('d-none'); nrPWLogin = 0; }

    if(!nrEmailLogin && !nrPWLogin)
    {
      stvoriPorukicu('You have successfully logged in :)', 1, 5)
      $('#modallogin').modal('hide'); 
    }
}

//Prebacivanje iz register u login modal
var loginDugmeURegistraciji = document.getElementById('loginProveraDugme')
var registerDugmeULoginu = document.getElementById('izLoginURegister')

loginDugmeURegistraciji.addEventListener('click', f => {
  $('#modalregister').modal('hide');
  $('#modallogin').modal('show'); 
});
registerDugmeULoginu.addEventListener('click', f => {
  $('#modalregister').modal('show');
  $('#modallogin').modal('hide'); 
});

//

var reFLname = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})?$/
var reEmail = /^[a-z][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var reAdresa = /^(\w)(\w|\s){5,30}$/
var reBrTelefona = /^(6[\d]{6,10})|(06[\d]{6,10})$/
var rePassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

var firstname = document.getElementById('fr-firstname')
var lastname = document.getElementById('fr-lastname')
var email = document.getElementById('fr-email')
var adresa = document.getElementById('fr-address')
var phone = document.getElementById('fr-phone')
var pw = document.getElementById('fr-password')
var pwcheck = document.getElementById('fr-password-confirm')

var regprovera = document.getElementById('registracijaProveraDugme')
var FLNLabel = document.getElementById('FLNLabel')
var ELabel = document.getElementById('ELabel')
var ALabel = document.getElementById('LAdresa')
var PLabel = document.getElementById('LPhone')
var PWLabel = document.getElementById('PWLabel')

var nrFLN = 0, nrEmail = 0, nrAddress = 0, nrPhone = 0, nrPW = 0;
regprovera.addEventListener('click', proveraRE)

function proveraRE(){
    let proveraL = 0, proveraF = 0;
    if(!reFLname.test(firstname.value))
    {   proveraF++;
    } else proveraF = 0;
    if(!reFLname.test(lastname.value))
    {  proveraL++;
    } else proveraL = 0;
    if(proveraF > 0 || proveraL > 0)
    {
        FLNLabel.classList.remove('d-none'); FLNLabel.classList.add('d-block'); nrFLN = 1;
    }
    else { FLNLabel.classList.remove('d-block'); FLNLabel.classList.add('d-none'); nrFLN = 0; }
    if(!reEmail.test(email.value))
    {
        ELabel.classList.remove('d-none'); ELabel.classList.add('d-block'); nrEmail = 1;
    } else { ELabel.classList.remove('d-block'); ELabel.classList.add('d-none'); nrEmail = 0; }
    if(!reAdresa.test(adresa.value))
    {
      ALabel.classList.remove('text-success'); ALabel.classList.add('text-danger', 'fw-bold'); nrAddress = 1;
    } else { ALabel.classList.remove('text-danger', 'fw-bold'); ALabel.classList.add('text-success'); nrAddress = 0; }
    if(!reBrTelefona.test(phone.value))
    {
      PLabel.classList.remove('text-success'); PLabel.classList.add('text-danger', 'fw-bold'); nrPhone = 1;
    } else { PLabel.classList.remove('text-danger', 'fw-bold'); PLabel.classList.add('text-success'); nrPhone = 0; }
    if(!rePassword.test(pw.value))
    {
      pw.classList.remove('border-success'); pw.classList.add('border-danger')
      PWLabel.classList.remove('text-success'); PWLabel.classList.add('text-danger', 'fw-bold'); nrPW = 1;
    } 
    else { 
      PWLabel.classList.remove('text-danger', 'fw-bold'); PWLabel.classList.add('text-success'); 
      pw.classList.remove('border-danger'); pw.classList.add('border-success'); nrPW = 0;
      if(pw.value != pwcheck.value){ nrPW = 1;
        pwcheck.classList.remove('border-success', 'bg-success'); pwcheck.classList.add('border-danger', 'bg-danger')
      } else { pwcheck.classList.remove('border-danger', 'bg-danger'); pwcheck.classList.add('border-success', 'bg-success'); nrPW = 0; }   
    }
    if(!nrFLN && !nrAddress && !nrEmail && !nrPhone && !nrPW)
    {
      stvoriPorukicu('You have successfully created an account :)', 1, 5)
      $('#modalregister').modal('hide');
    }
}




//================================END REGISTER FORM===================================//
//===================================CORRECT MESSAGE===================================//

var porukicaBox = document.getElementById('porukica')
var porukicaText = document.getElementById('uspesnoText')

function stvoriPorukicu(tekstUPorukici, tip, time) {
    porukicaText.textContent = tekstUPorukici;
    if(tip == 1) { porukicaBox.classList.remove('bg-danger'); porukicaBox.classList.add('bg-success'); }
    else if(tip == 2) { porukicaBox.classList.remove('bg-success'); porukicaBox.classList.add('bg-danger'); }
    porukicaBox.classList.remove('d-none')
    porukicaBox.classList.add('d-block')
    setTimeout(unistiPorukicu, time*1000);
}
function unistiPorukicu(){
    $(porukicaBox).slideUp(1000, function(){    
        porukicaBox.classList.remove('d-block')
        porukicaBox.classList.add('d-none')
    });
}

//================================END CORRECT MESSAGE=================================//
