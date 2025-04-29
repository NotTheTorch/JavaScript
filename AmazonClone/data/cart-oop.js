function Cart(LocalStorageKey)
{
    const cart = {

        cartItems: undefined,
      
        loadFromStorage() {
          this.cartItems = JSON.parse(localStorage.getItem(LocalStorageKey)) || [
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
        },
      
        saveToStorage() {
          localStorage.setItem(LocalStorageKey, JSON.stringify(this.cartItems));
        },

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
        },
      
        updateCartQuantity_checkout() {
          let cartQuantity = 0;
          this.cartItems.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
          });
          return cartQuantity;
        },
      
        updateQuantity(productId, newQuantity) {
          this.cartItems.forEach((cartItem) => {
            if (cartItem.id === productId)
              cartItem.quantity = newQuantity;
          });
      
          this.saveToStorage();
        },
      
        removeFromCart(productId) {
          let newCart = [];
      
          this.cartItems.forEach((cartItem) => {
            if (cartItem.id !== productId)
              newCart.push(cartItem);
          });
      
          this.cartItems = newCart;
          this.saveToStorage();
        },
      
        updateDeliveryOption(productId, deliveryOptionId) {
          let matchingItem;
      
          this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.id)
              matchingItem = cartItem;
          });
      
          matchingItem.deliveryOptionId = deliveryOptionId;
          this.saveToStorage();
        }
      
      };
      return cart;
}

const cart = Cart('cart-oop');
cart.loadFromStorage();
cart.addToCart('dd82ca78-a18b-4e2a-9250-31e67412f98d');


const business_cart = Cart('business-cart-oop');
business_cart.loadFromStorage();

console.log(cart);
console.log(business_cart);