import { h, Component } from 'preact';
import Product from '../../components/product'
import ShopList from '../../components/shop-list'
import fetch from 'whatwg-fetch'
import { Link } from 'preact-router/match';
import { route } from 'preact-router';
import { shopClient } from '../../components/app'

import Helmet from "preact-helmet";

class Merch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
    }
  }





  componentWillMount() {
    window.location.href = 'https://lolozouai.myshopify.com/'
    // route('https://lolozouai.myshopify.com/', true)
    // // Fetch a single collection by ID, including its products
    // const collectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzY1Nzg1Mzk3Mjkw';
    //
    // shopClient.collection.fetchWithProducts(collectionId).then((collection) => {
    //
    //   this.setState({products: collection.products})
    // });


  }

  // changeUrl = (url, addition) => url.split('.jpeg').join(`${addition}.jpeg`)


//   render ({}, { products }) {
//
//     return (
//       <div className="page page__shop thin">
//       <div class="shopLogo">
//       <img src="/assets/MERCHLOGO.jpg"/>
//
//       </div>
//       <img class="dice" src="/assets/PinkFuzzyDice.gif" />
//       <div className="shopbg bg"></div>
//         <Helmet
//               htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
//               title="Shop"
//                titleTemplate="Lo-Rider - %s" />
//       <div className="link-item">
//
//         {products.map(product => <Link href={`/merch/${product.handle}`}>{product.title}</Link>)}
//         </div>
//
//       <div className="variants">    {products.map((product, i) => (
//           <Product key={i} product={product} onClick={window.addToCart} />
//         ))} </div>
// <br />
//
// <div class="clearfix"></div>
// <br />
//
//       </div>
//     )
//   }
}

export default Merch
