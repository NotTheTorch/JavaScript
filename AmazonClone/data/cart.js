export let cart = JSON.parse(localStorage.getItem('cart')) || [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2
    },

    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1
    }

];

function saveToStorage()
{
    localStorage.setItem('cart',JSON.stringify(cart));
}



export function addToCart(productID)
{
    let matchingItem;

        cart.forEach((cartItem)=>{

            if(productID === cartItem.id)
                matchingItem = cartItem;
        });

        if(matchingItem)
            matchingItem.quantity += 1;
        else
        {
            cart.push({
                id: productID,
                quantity: 1
            });
        }
    saveToStorage();
}

export function updateCartQuantity()
{
    let cartQuantity = 0;
    cart.forEach((cartItem)=>{
        cartQuantity += cartItem.quantity;
    });
    const cartDisplay = document.querySelector('.js-cart-quantity');
    cartDisplay.innerHTML = cartQuantity;
}

export function removeFromCart(productId)
{
    let newCart = [];

    cart.forEach((cartItem)=>{
        if(cartItem.id != productId)
            newCart.push(cartItem);
    });

    cart = newCart;
    saveToStorage();
}