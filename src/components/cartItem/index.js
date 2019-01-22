import { h } from 'preact';

const CartItem = ({product, item, onChange}) => (
  
  <div class="cart-item">
      <div class="cart-item__content">
      <div class="cart-item__content-row">
      <div><img src={item.variant.image.src}/></div>
        <h3>{item.title} - {item.variant.title}</h3>
        <div class="quantity-container">
        <div class="cart-item__quantity-container">
          <button onClick={() => onChange(item.id, item.quantity -1)} class="btn--seamless quantity-decrement" type="button"><span>-</span><span class="visuallyhidden">Decrement</span></button>
          <input class="cart-item__quantity" type="number" min="0" aria-label="Quantity" value={item.quantity} /><span>{item.quantity}</span>
          <button onClick={() => onChange(item.id, item.quantity + 1)} class="btn--seamless quantity-increment" type="button"><span>+</span><span class="visuallyhidden">Increment</span></button>
        </div>
        <span class="cart-item__price">${item.quantity * item.variant.price}</span>
       </div>
      </div>
    </div>
  </div>
)

export default CartItem
