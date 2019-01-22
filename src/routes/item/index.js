import { h, Component } from 'preact';
import Swiper from 'react-id-swiper';
import ShopifyBuy from 'shopify-buy'
import Variant from '../../components/variantItem'
import ShopList from '../../components/shop-list'
import fetch from 'whatwg-fetch'
import { Link } from 'preact-router';
import Pimage from 'pimg/src/preact';

import Helmet from "preact-helmet";

const shopClient = ShopifyBuy.buildClient({
  accessToken: '720582fbbce8468d4d4724b80a0852d2',
  domain: 'lolozouai.myshopify.com',
    appId: '6'
  });
  
class Item extends Component {
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

  changeUrl = (url, addition) => url.split('.jpeg').join(`${addition}.jpeg`)

  render ({}, { products }) {
		const params = {
			slidesPerView: 3,
			spaceBetween: 30,
			freeMode: true,
			grabCursor:true,
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

    const currentIndex = products.findIndex(product => product.attrs.handle === this.props.handle)
    const product = products[currentIndex]
    if (!product) { return false }
    const next = currentIndex + 1 <= products.length - 1 ? currentIndex + 1 : 0
    const prev = currentIndex - 1 >= 0 ? currentIndex - 1 : products.length - 1

    return (
			<div>
		
      <div className="page page__shop">
			<Helmet
              htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
              title={product.title}
               titleTemplate="LO-Rider Shop - %s" />
			<div className="link-item">
        {products.map(product => <Link href={`/collection/lolo-zouai-x-stickybaby/${product.attrs.handle}`}>{product.title}</Link>)}
</div>

      	<div className="variants">
          <div class="col-12 left mobile-col-12 ahhhh productItem">



			    <div class="variants_contain">
					<div class="col-12 left">
					<Swiper key={product.id} {...params}>
    			  {product.attrs.images.map((image, k) =>

    			   <div key={product.id + k}>
                 <img src={this.changeUrl(image.src, '_700x')} />
	
			       </div>

				)}	

</Swiper>
				

</div>
					<div class="col-3 left productDeets">
			<div class="absolute nxtprv">

				<Link href={`/collection/lolo-zouai-x-stickybaby/${products[next].attrs.handle}`}> <img src='https://icon.now.sh/chevron/ffffff/left/20' alt='chevron icon' />
 next</Link>
 <Link class="right-align" href={`/collection/lolo-zouai-x-stickybaby/${products[prev].attrs.handle}`}> 
 prev <img src='https://icon.now.sh/chevron/ffffff/right/20' alt='chevron icon' /></Link>
		</div>
<Link class="back" href="/shop"> 
 back to all</Link>
					<h1>{product.title}</h1>
<h2 class="center-align">

{ product.attrs.variants[0].available === false 
  ? <span></span>
  : <span> {product.attrs.variants[0].price}</span>
}



</h2>
			      {product.attrs.variants.map((variant, i) =>
			        <Variant
			          onClick={window.addToCart}
			          variant={variant}
			          key={i}
			          isRoute={false}
			        />
			      )}
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
