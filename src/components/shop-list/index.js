import { h, Component } from 'preact';
import ShopifyBuy from 'shopify-buy'
import Product from '../../components/product-list'
import fetch from 'whatwg-fetch'
import { Link } from 'preact-router/match';

const shopClient = ShopifyBuy.buildClient({
  accessToken: '720582fbbce8468d4d4724b80a0852d2',
  domain: 'lolozouai.myshopify.com',
  appId: '6'
});

class Shop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
    }
  }

  componentWillMount() {
    shopClient.fetchQueryProducts({collection_id: 55301079082, sort_by: ['manual']}).then((products) => {
      this.setState({products})
    })
  }

  render ({}, { products }) {
    console.log(products);
    return (
      <div>

      <div class="list fixed left">    {products.map((product, i) => (
          <Product key={i} product={product} onClick={window.addToCart} />
        ))} </div>

      </div>
    )
  }
}

export default Shop
