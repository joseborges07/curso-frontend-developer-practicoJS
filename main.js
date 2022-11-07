const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);

menuHamIcon.addEventListener('click', toggleMobileMenu);

menuCarrito.addEventListener('click', togglemenuCarritoAside);

function toggleDesktopMenu(){
    const isAsaidClosed = shoppingCardContainer.classList.contains('inactive');
    
    if (!isAsaidClosed){
        shoppingCardContainer.classList.add('inactive')
    }
    
desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){

    const isAsaidClosed = shoppingCardContainer.classList.contains('inactive');
    
    if (!isAsaidClosed){
        shoppingCardContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
    }

function togglemenuCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    
    shoppingCardContainer.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'moto',
    price: 600,
    image: 'https://i.ytimg.com/vi/o4IfP3BMEx0/maxresdefault.jpg'
})

productList.push({
    name: 'Carro',
    price: 5000,
    image: 'https://www.kia.com/content/dam/kwcms/gt/en/images/discover-kia/voice-search/parts-80-1.jpg'
})

productList.push({
    name: 'Laptop',
    price: 500,
    image: 'https://www.lenovo.com/medias/ww-lenovo-laptop-v14-amd-hero.png?context=bWFzdGVyfHJvb3R8MjU2MjQ1fGltYWdlL3BuZ3xoNjIvaDkwLzE0MzI1NjI5NjQ4OTI2LnBuZ3w2MjQ3YjIwZjkxZTZkYjY4NDczNjg1YTFiZDk0NzJlYmFhMWFmMTJhZmY1YjA4NmIyOTJhMzc1YzhiODA1ODUx'
})
productList.push({
    name: 'Drone',
    price: 250,
    image: 'https://http2.mlstatic.com/D_NQ_NP_981891-MLV51094715291_082022-W.jpg'
})
productList.push({
    name: 'TV',
    price: 300,
    image: 'https://mobile-support.tcl.com/content/dam/tcl-dam/product/tv-product/s-series/s60a/site/pc/product-image/S60A_Front_32inch_Global.png'
})



for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');


      // product = {name,price,img} >> product.image
    const ProductImg = document.createElement('img');
    ProductImg.setAttribute('src',product.image);


   const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('figure');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);


    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(ProductImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

}