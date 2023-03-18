const imgContainer = document.getElementById('img-container');
const product1 = () =>
    imgContainer.innerHTML = `<img class="w-full rounded-md cursor-pointer" src="images/image-product-1.jpg" alt="">`;


const product2 = () =>
    imgContainer.innerHTML = `<img class="w-full rounded-md cursor-pointer" src="images/image-product-2.jpg" alt="">`;


const product3 = () =>
    imgContainer.innerHTML = `<img class="w-full rounded-md cursor-pointer" src="images/image-product-3.jpg" alt="">`;


const product4 = () =>
    imgContainer.innerHTML = `<img class="w-full rounded-md cursor-pointer" src="images/image-product-4.jpg" alt="">`;

    let amountNum = parseInt(document.getElementById('amount-num').innerText);
const plus = () => {
    document.getElementById('amount-num').innerText = (amountNum++)+ 1;
}

const minus = () => {
    if(amountNum>0){
        document.getElementById('amount-num').innerText = (amountNum--) - 1;
    }
};
    
    
