import { h, Component } from 'preact';
import Swiper from 'react-id-swiper';
import { shopClient } from '../../components/app'
import Variant from '../../components/variantItem'
import ShopList from '../../components/shop-list'
import fetch from 'whatwg-fetch'
import { Link } from 'preact-router';
import Pimage from 'pimg/src/preact';

import Helmet from "preact-helmet";


  
class Item extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
    }
  }
  
  componentWillMount() {
 

    // Fetch a single collection by ID, including its products
    const collectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzYwMDIyNTU0NjY2';

    shopClient.collection.fetchWithProducts(collectionId).then((collection) => {
      // Do something with the collection

      console.log(collection.products);
      this.setState({products: collection.products})
    });


  }


  changeUrl = (url, addition) => url.split('.jpeg').join(`${addition}.jpeg`)

  render ({}, { products }) {
		const params = {
			slidesPerView: 2,
			spaceBetween: 30,
			freeMode: true,
      grabCursor:true,
      centeredSlides: true,
			pagination: {
			
				clickable: true
			},

			breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,	
          spaceBetween: 10
				}
			}
		};

    const currentIndex = products.findIndex(product => product.handle === this.props.handle)
    const product = products[currentIndex]
    if (!product) { return false }
    const next = currentIndex + 1 <= products.length - 1 ? currentIndex + 1 : 0
    const prev = currentIndex - 1 >= 0 ? currentIndex - 1 : products.length - 1

    return (
			<div>
		
      <div className="page page__shop">
      <div class="shopLogo">
      <img src="/assets/MERCHLOGO.jpg"/>
      </div>
 <div className="shopbg bg"></div>
			<Helmet
              htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
              title={product.title}
               titleTemplate="Lo-Rider Shop - %s" />
			<div className="link-item">
        {products.map(product => <Link href={`/merch/${product.handle}`}>{product.title}</Link>)}
</div>

<div class="productHeader">
<h1>{product.title}</h1>
<div class="clearfix"></div>

{ product.variants[0].available === false 
  ? <span></span>
  :<div> <span class="price"> {product.variants[0].price}</span></div>
}

			<div class="col-3 left productDeets">

					


{product.variants.map((variant, i) =>
  <Variant
    onClick={window.addToCart}
    variant={variant}
    key={i}
    isRoute={false}
  />
)}
<div class="clearfix"></div>
      <div class="nxtprv">
      <Link class="left" href={`/merch/${products[prev].handle}`}> 
prev </Link>
<Link class="right" href={`/merch/${products[next].handle}`}> 
next</Link>

</div>
<Link class="backBtn" href="/merch"> 
back to all</Link>
</div>

</div>

      	<div className="variants">
          <div class="col-12 left mobile-col-12 ahhhh productItem">



			    <div class="variants_contain">
					<div class="col-12 left">
					<Swiper key={product.id} {...params}>
    			  {product.images.map((image, k) =>

    			   <div key={product.id + k}>
                 <img src={this.changeUrl(image.src, '_700x')} />
	
			       </div>

				)}	

</Swiper>
				

</div>
		
<div class="clearfix"></div>

<div class="col-12">

</div>
			  </div>
			</div>

        </div>
				<div class="clearfix"></div>
				
      </div>
			</div>
    )
  }
}

export default Item
