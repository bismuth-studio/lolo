import { h, Component } from 'preact';
import Product from '../../components/product'
import ShopList from '../../components/shop-list'
import fetch from 'whatwg-fetch'
import { Link } from 'preact-router/match';
import { shopClient } from '../../components/app'

import Helmet from "preact-helmet";

class Shop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
    }
  }

  componentWillMount() {
    const query = {
      query: 'updated_at:>="2018-07-08T21:31:33"',
      sortBy: 'title'
    };
    
    shopClient.product.fetchQuery(query).then((products) => {
      this.setState({products})
    })
  }


  render ({}, { products }) {
    return (
      <div className="page page__shop thin">
        <Helmet
              htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
              title="Shop"
               titleTemplate="Lolo Zouaï - %s" />
      <div className="link-item">
        {products.map(product => <Link href={`/collection/lolo-zouai-x-stickybaby/${product.attrs.handle}`}>{product.title}</Link>)}
        </div>
      <div className="shopbg bg"></div>
      <div className="variants">    {products.map((product, i) => (
          <Product key={i} product={product} onClick={window.addToCart} />
        ))} </div>
<br />

<div class="clearfix"></div>
<br />

      </div>
    )
  }
}

export default Shop
