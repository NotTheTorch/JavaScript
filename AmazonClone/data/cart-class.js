class Cart
{
    cartItems;
    #localStorageKey;
    
    constructor(localStorageKey)
    {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }


    #loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [
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
      }

    saveToStorage() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productID, Quantity) {
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
          if (productID === cartItem.id)
            matchingItem = cartItem;
        });
    
        if (matchingItem)
          matchingItem.quantity += Quantity;
        else {
          this.cartItems.push({
            id: productID,
            quantity: Quantity,
            deliveryOptionId: '1'
          });
        }
        this.saveToStorage();
      }

    updateCartQuantity_checkout() {
        let cartQuantity = 0;
        this.cartItems.forEach((cartItem) => {
          cartQuantity += cartItem.quantity;
        });
        return cartQuantity;
    }

    updateQuantity(productId, newQuantity) {
        this.cartItems.forEach((cartItem) => {
          if (cartItem.id === productId)
            cartItem.quantity = newQuantity;
        });
    
        this.saveToStorage();
    }

    removeFromCart(productId) {
        let newCart = [];
    
        this.cartItems.forEach((cartItem) => {
          if (cartItem.id !== productId)
            newCart.push(cartItem);
        });
    
        this.cartItems = newCart;
        this.saveToStorage();
    }
    
      updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;
    
        this.cartItems.forEach((cartItem) => {
          if (productId === cartItem.id)
            matchingItem = cartItem;
        });
    
        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }
}

const cart = new Cart('cart-oop');
const businees_cart = new Cart('business-cart');

businees_cart.addToCart('58b4fc92-e98c-42aa-8c55-b6b79996769a');

console.log(cart);
console.log(businees_cart);