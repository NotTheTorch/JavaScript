export let cart = JSON.parse(localStorage.getItem('cart')) || [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: '1'
    },

    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: '2'
    }

];

function saveToStorage()
{
    localStorage.setItem('cart',JSON.stringify(cart));
}



export function addToCart(productID,Quantity)
{
    let matchingItem;

        cart.forEach((cartItem)=>{

            if(productID === cartItem.id)
                matchingItem = cartItem;
        });

        if(matchingItem)
            matchingItem.quantity += Quantity;
        else
        {
            cart.push({
                id: productID,
                quantity: Quantity,
                deliveryOptionId: '1'
            });
        }
    saveToStorage();
}

export function updateCartQuantity_checkout()
{
    let cartQuantity = 0;
    cart.forEach((cartItem)=>{
        cartQuantity += cartItem.quantity;
    });
    return cartQuantity;
}

export function updateQuantity(productId,newQuantity)
{
    cart.forEach((cartItem)=>{
        if(cartItem.id === productId)
            cartItem.quantity = newQuantity;
    });

    saveToStorage();
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

export function updateDeliveryOption(productId,deliveryOptionId)
{
    let matchingItem;

        cart.forEach((cartItem)=>{

            if(productId === cartItem.id)
                matchingItem = cartItem;
        });
    
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}