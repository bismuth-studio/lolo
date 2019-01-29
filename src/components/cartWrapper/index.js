import { h, Component } from 'preact';
import Cart from '../cart'

import { shopClient } from '../app'

class CartWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
    	cart: '',
    	showCart: false,
    }

    window.addToCart = this.addToCart.bind(this)
    this.hideCart = this.hideCart.bind(this)
    this.showCart = this.showCart.bind(this)
    this.updateItem = this.updateItem.bind(this)
  }

  componentWillMount() {
  	const cartIdFromStorage = localStorage.getItem('ej-cart')

  	if (cartIdFromStorage) {
  		shopClient.checkout.fetch(cartIdFromStorage)
      .then(cart => {
       	this.setState({cart})
		  })
      .catch(e => localStorage.removeItem('ej-cart'))
  	} else {
  		shopClient.checkout.create().then(cart => {
        this.setState({cart})

    		localStorage.setItem('ej-cart', cart.id)
      });
  	}

    window.addEventListener('popstate', (event) => {
      if (this.state.showCart && !window.location.href.includes('/cart')) {
        this.setState({showCart: false})
      }
    }, false);
  }

  componentDidMount() {
    const { url } = this.props

    if (url && url.includes('/cart')) {
      this.setState({showCart: true})
    }
  }

  addToCart(variant, quantity) {
    const checkoutId = this.state.cart.id // ID from a previous checkout.create call
    const lineItems = [
      {variantId: variant.id, quantity },
    ];

    shopClient.checkout.addLineItems(checkoutId, lineItems).then((cart) => {
      this.setState({showCart: true, cart}, () => window.history.pushState({}, 'LZ Shop - cart', '/cart'))
    });
  }

  updateItem(id, quantity) {
    const checkoutId = this.state.cart.id // ID from a previous checkout.create call
    const lineItems = [
      {id, quantity },
    ];

    shopClient.checkout.updateLineItems(checkoutId, lineItems).then((cart) => {
      this.setState({showCart: true, cart})
    });
  }

  hideCart() {
  	this.setState({showCart: false})
    if (window.location.href && window.location.href.includes('/cart')) {
      this.props.goToMerch()
    }
  }

  showCart() {
  	this.setState({showCart: true})
    window.history.pushState({}, 'LZ Shop - cart', '/cart')
  }



  render({  }, { cart, showCart }) {
    console.log(cart);
    return (
      <div class="col-12 left variant_item">
        {cart && Boolean(cart.lineItems.length) && <div class="cartBtn"><button onClick={this.showCart}>cart <img src="https://icon.now.sh/shopping_cart/ffffff"/></button> </div>}

        {showCart &&
          <Cart
            cart={cart}
            onHide={this.hideCart}
            onChange={this.updateItem} />
        }
     </div>
    )
  }
}

export default CartWrapper
