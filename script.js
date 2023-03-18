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
    document.getElementById('amount-num').innerText = (amountNum++) + 1;
}

const minus = () => {
    if (amountNum > 0) {
        document.getElementById('amount-num').innerText = (amountNum--) - 1;
    }
};
let quantity = parseInt(document.getElementById('quantity').innerText);

let cardBody = document.getElementById('card-body');

const addToCart = () => {
    if (amountNum !== 0) {
        document.getElementById('quantity').innerText = (quantity++) + 1;
    }
    if (amountNum === 0) {
        return
    }
    {
        document.getElementById('cart-empty').classList.add('hidden');
        cardBody.innerHTML += `<div class="flex mt-4">
        <img class="rounded-md w-12 h-12" src="images/image-product-1-thumbnail.jpg" alt="">
        <div>
            <p class="text-orange-500 pl-4">Fall Limited Edition Sneakers</p>
            <div class="flex mt-4">
                <p class="text-orange-500 pl-4">$125.00 ✕ ${amountNum}</p>
            <p class="font-bold">$${125 * amountNum}</p>
            </div>
            <button onclick="shesh()" class='px-4 py-2 cursor-pointer rounded-lg text-white bg-orange-500 mt-4 ml-6'>clear</button>

        </div>
    </div>`
    }
}

function shesh(){
    location.reload()
}




