const imgContainer = document.getElementById('img-container');
const product1 = () =>
    imgContainer.innerHTML = `<label for="my-modal-3"><img class="w-full rounded-md cursor-pointer" src="images/image-product-1.jpg" alt=""></label>`;


const product2 = () =>
    imgContainer.innerHTML = `<label for="my-modal-3"><img class="w-full rounded-md cursor-pointer" src="images/image-product-2.jpg" alt=""></label>`;


const product3 = () =>
    imgContainer.innerHTML = `<label for="my-modal-3"><img class="w-full rounded-md cursor-pointer" src="images/image-product-3.jpg" alt=""></label>`;


const product4 = () =>
    imgContainer.innerHTML = `<label for="my-modal-3"><img class="w-full rounded-md cursor-pointer" src="images/image-product-4.jpg" alt=""></label>`;

    let amountNum = parseInt(document.getElementById('amount-num').innerText);
const plus = () => {
    document.getElementById('amount-num').innerText = (amountNum++)+ 1;
}

const minus = () => {
    if(amountNum>0){
        document.getElementById('amount-num').innerText = (amountNum--) - 1;
    }
};
let quantity = parseInt(document.getElementById('quantity').innerText);
const addToCart = () => {
    if(amountNum !== 0){
        document.getElementById('quantity').innerText = (quantity++)+ 1;
    }
}
    
    
