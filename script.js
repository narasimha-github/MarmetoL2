let containerE1 = document.getElementById('container'); 
let colorSelection=''
let sizeSelection=''


function altProducts(product){
    let {compare_at_price,description,images,price,product_type,title,vendor} = product;
    console.log(product)

    let containerSubE1 = document.createElement('div');
    let containerSubE2 = document.createElement('div');
    containerSubE1.classList.add('sub');
    containerSubE2.classList.add('sub2');
    containerE1.appendChild(containerSubE1);
    containerE1.appendChild(containerSubE2);

    let firstSubE1 = document.createElement('div');
    containerSubE1.appendChild(firstSubE1)

    //images from the API is not working
    
    let imgE1 = document.createElement('img');
    imgE1.src='https://img.freepik.com/premium-photo/pretty-woman-wearing-shirt-jean-pants-with-sungglasses-is-walking-down-sunny-street_969965-193776.jpg?w=360'
    imgE1.alt='wite-shirt'
    imgE1.classList.add('img')
    firstSubE1.appendChild(imgE1)

    let imgM1 = document.createElement('img');
    imgM1.src='https://img.freepik.com/premium-photo/pretty-woman-wearing-shirt-jean-pants-with-sungglasses-is-walking-down-sunny-street_969965-193776.jpg?w=360'
    imgM1.alt='wite-shirt'
    imgM1.classList.add('img2','dynamicButton')

    let imgM2 = document.createElement('img');
    imgM2.src='https://img.freepik.com/premium-photo/beautiful-woman-white-tshirt-smiling-looking-camera-mockup-tshirt_884296-11788.jpg?w=740'
    imgM2.alt='wite-shirt'
    imgM2.classList.add('img2','dynamicButton')

    let imgM3 = document.createElement('img');
    imgM3.src='https://img.freepik.com/premium-photo/girl-empty-white-tshirt-jeans-stands-near-tree-mockup-tshirt-print-shop_179373-49.jpg?w=360'
    imgM3.alt='wite-shirt'
    imgM3.classList.add('img2','dynamicButton')

    let imgM4 = document.createElement('img');
    imgM4.src='https://img.freepik.com/premium-photo/woman-with-white-shirt-that-says-m-it_1069975-13729.jpg?w=740'
    imgM4.alt='wite-shirt'
    imgM4.classList.add('img2','dynamicButton')

    let firstSubE2 = document.createElement('div');
    firstSubE2.classList.add('maintain')
    containerSubE1.appendChild(firstSubE2)

    function handleButtonClick(event) {
        let previousActiveButton = document.querySelector('.dynamicButton.active');
        if (previousActiveButton) {
            previousActiveButton.classList.remove('active');
        }
        let currentActiveButton = event.target;
        currentActiveButton.classList.add('active');
    }

    function createButton(id, text) {
        let button = document.createElement('button');
        button.appendChild(text);
        button.id = id;
        button.classList.add('dynamicButton','but');
        firstSubE2.appendChild(button);
        return button;
    }

    let buttonNames = [imgM4, imgM1, imgM2, imgM3];
    for (let i = 0; i < buttonNames.length; i++) {
        let button = createButton('button' + (i + 1), buttonNames[i]);
        button.addEventListener('click', handleButtonClick);
    }

    let orginalPrice = price.slice(1,price.length)
    let addedPrice = compare_at_price.slice(1,compare_at_price.length)
    let discount = Math.round(((addedPrice-orginalPrice)/addedPrice)*100)+'% Off'
    console.log(discount)

    let formE1 = document.createElement('form')
    formE1.addEventListener('submit',function(event){
        event.preventDefault()
    })
    containerSubE2.appendChild(formE1);

    let vendoreE1 = document.createElement('p');
    vendoreE1.textContent = vendor 
    vendoreE1.classList.add('vendore')
    formE1.appendChild(vendoreE1)

    let titleE1 = document.createElement('h1');
    titleE1.textContent=title
    formE1.appendChild(titleE1)

    let priceContainerE2 = document.createElement('div');
    priceContainerE2.classList.add('priceContainer')
    formE1.appendChild(priceContainerE2)

    let priceContainerE1 = document.createElement('div');
    priceContainerE1.classList.add('disc')
    priceContainerE2.appendChild(priceContainerE1)

    let priceE1 = document.createElement('h1');
    priceE1.textContent=price+'.00'
    priceContainerE1.appendChild(priceE1)

    let discountE1 = document.createElement('p')
    discountE1.textContent=discount;
    discountE1.classList.add('discount')
    priceContainerE1.appendChild(discountE1)
    
    let comPriceE1 = document.createElement('h3');
    comPriceE1.textContent=compare_at_price+'.00'
    comPriceE1.classList.add('comPrice')
    priceContainerE2.appendChild(comPriceE1)

    let colorContainerE1 = document.createElement('div')
    colorContainerE1.classList.add('mar')
    formE1.appendChild(colorContainerE1);

    let colorPara = document.createElement('p')
    colorPara.textContent='Choose a Color';
    colorContainerE1.classList.add('vendore')
    colorContainerE1.appendChild(colorPara)

    let colorContainerE2 = document.createElement('div');
    colorContainerE2.classList.add('color-box')
    colorContainerE1.appendChild(colorContainerE2);

    let colorButtonE1 = document.createElement('button')
    colorButtonE1.addEventListener('click',function(){
        colorSelection='Blue'
        console.log(colorSelection)
    })
    colorButtonE1.classList.add('color-button')
    colorContainerE2.appendChild(colorButtonE1);

    let colorButtonE2 = document.createElement('button')
    colorButtonE2.addEventListener('click',function(){
        colorSelection='Green'
        console.log(colorSelection)
    })
    colorButtonE2.classList.add('color-button1')
    colorContainerE2.appendChild(colorButtonE2);

    let colorButtonE3 = document.createElement('button')
    colorButtonE3.addEventListener('click',function(){
        colorSelection='Red'
        console.log(colorSelection)
    })
    colorButtonE3.classList.add('color-button2')
    colorContainerE2.appendChild(colorButtonE3);

    let colorButtonE4 = document.createElement('button')
    colorButtonE4.addEventListener('click',function(){
        colorSelection='Yellow'
        console.log(colorSelection)
    })
    colorButtonE4.classList.add('color-button3')
    colorContainerE2.appendChild(colorButtonE4);

    let sizeContainerE1 = document.createElement('div');
    formE1.appendChild(sizeContainerE1)

    let sizePara = document.createElement('p');
    sizePara.textContent='Choose a Size'
    sizePara.classList.add('size')
    sizeContainerE1.appendChild(sizePara)
    
    let sizeContainerE2 = document.createElement('div')
    sizeContainerE2.classList.add('sizing')
    sizeContainerE1.appendChild(sizeContainerE2)

    let sizeContainerM1 = document.createElement('div')
    sizeContainerE2.appendChild(sizeContainerM1)

    let inputE1 = document.createElement('input')
    inputE1.addEventListener('click',function(){
        sizeSelection='Small'
        console.log('hiii')
    })
    inputE1.id='small'
    inputE1.type='radio'
    inputE1.name='size'
    sizeContainerM1.appendChild(inputE1)

    let labelE1 = document.createElement('label')
    labelE1.textContent='Small'
    labelE1.setAttribute('for','small')
    sizeContainerM1.appendChild(labelE1)

    let sizeContainerM2 = document.createElement('div')
    sizeContainerE2.appendChild(sizeContainerM2)

    let inputE2 = document.createElement('input')
    inputE2.addEventListener('click',function(){
        sizeSelection='Medium'
        console.log('hiii')
    })
    inputE2.type='radio'
    inputE2.id='medium'
    inputE2.name='size'
    sizeContainerM2.appendChild(inputE2)

    let labelE2 = document.createElement('label')
    labelE2.textContent='Medium'
    labelE2.setAttribute('for','medium')
    sizeContainerM2.appendChild(labelE2)

    let sizeContainerM3 = document.createElement('div')
    sizeContainerE2.appendChild(sizeContainerM3)

    let inputE3 = document.createElement('input')
    inputE3.addEventListener('click',function(){
        sizeSelection='Large'
        console.log('hiii')
    })
    inputE3.type='radio'
    inputE3.id='large'
    inputE3.name='size'
    sizeContainerM3.appendChild(inputE3)

    let labelE3 = document.createElement('label')
    labelE3.textContent='Large'
    labelE3.setAttribute('for','large')
    sizeContainerM3.appendChild(labelE3)

    let sizeContainerM4 = document.createElement('div')
    sizeContainerE2.appendChild(sizeContainerM4)

    let inputE4 = document.createElement('input')
    inputE4.addEventListener('click',function(){
        sizeSelection='Extra Large'
        console.log('hiii')
    })
    inputE4.type='radio'
    inputE4.id='extraLarhe'
    inputE4.name='size'
    sizeContainerM4.appendChild(inputE4)

    let labelE4 = document.createElement('label')
    labelE4.textContent='Extre Large'
    labelE4.setAttribute('for','extraLarhe')
    sizeContainerM4.appendChild(labelE4)


    let qualityAddContainer = document.createElement('div')
    qualityAddContainer.classList.add('quality')
    formE1.appendChild(qualityAddContainer)

    let quantityContainer = document.createElement('div')
    quantityContainer.classList.add('quality1')
    qualityAddContainer.appendChild(quantityContainer)

    let qualityIncBut = document.createElement('button')
    qualityIncBut.textContent = '+'
    qualityIncBut.classList.add('quality-button')
    quantityContainer.appendChild(qualityIncBut)

    let quality = document.createElement('p')
    quality.textContent=1
    quantityContainer.appendChild(quality)

    let qualityDncBut = document.createElement('button')
    qualityDncBut.textContent = '-'
    qualityDncBut.classList.add('quality-button')
    quantityContainer.appendChild(qualityDncBut)

    let addCartBtn = document.createElement('div')
    qualityAddContainer.appendChild(addCartBtn)

    let addCartButton = document.createElement('button')
    addCartBtn.addEventListener('click',function(){
        if ((colorSelection !== null) && (sizeSelection !== null)){
            finallPara.textContent= title+' With Color '+colorSelection+' And Size ' + sizeSelection
        }else{
            finallPara.textContent=''
        }
    })
    addCartButton.textContent='Add To Cart'
    addCartButton.classList.add('addCart')
    addCartBtn.appendChild(addCartButton)

    let finallPara = document.createElement('h3');
    finallPara.classList.add('lastpara')
    formE1.appendChild(finallPara)

    let info = document.createElement('p');
    info.textContent=description.slice(25,description.length-4)
    info.classList.add('vendore')
    formE1.appendChild(info)


    
}


let list = []
let url = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json';
let options = {
    method: 'GET'
};

let compareAtPrice,proDescription,proId,proImages,proPrice,productType,proTitle,proVendor ;

fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let {product} = data;
        altProducts(product);
    });