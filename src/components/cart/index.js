import { h } from 'preact';
import CartItem from '../cartItem'

import Helmet from "preact-helmet";

const Cart = ({onHide, onChange, cart}) => (
  
  <div class="cart js-active">
    <Helmet
              htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
              title="Cart"
               titleTemplate="Lo-Rider Shop - %s" />
    <div class="cart-section cart-section--top">
    
      <button class="btn--close" onClick={onHide}>
      <img src='https://icon.now.sh/chevron/left/10' alt='chevron icon' /> continue shopping 
       
        <span class="visuallyhidden">Close</span>
      </button>
          <button class="btn--close-overlay" onClick={onHide}></button>

    </div>

    <div class="cart-form">
    <img src="https://cdn.shopify.com/s/files/1/2994/1228/files/CARLO_d51b55f4-5ae4-4624-b2ac-72610cc23c26.png?8958156513269625621"/>
      
    <div class="cart-bottom">
        <div class="cart-info clearfix cart-section">
          <div class="type--caps cart-info__total cart-info__small">Total</div>
          <div class="cart-info__pricing">
            <span class="cart-info__small cart-info__total"><small>USD</small></span>
            <span class="pricing pricing--no-padding">${cart.totalPrice}</span>
          </div>
        </div>
        <div class="cart-actions-container cart-section type--center">
          <div class="cart-discount-notice cart-info__small">Shipping and discount codes are added at checkout.</div>
          <a href={cart.webUrl} target="_blank" class="btn btn--cart-checkout">Checkout</a>
        </div>
      </div>
      <div class="cart-item-container cart-section">
    
        {cart.lineItems && cart.lineItems.map((item, i) => <CartItem item={item} onChange={onChange} />)}
      </div>

 
    </div>
  </div>
)



export default Cart
