import { h, Component, render } from 'preact';
import Variant from '../variant'
import { Link } from 'preact-router/match';
import Pimage from 'pimg/src/preact';


const Product = ({ product, onClick }) => (

  <div class="col-6  mobile-col-12 productItem vinyl">


    <div class="variants_contain col-12 left">
      {product.variants.slice(0,1).map((variant, i) =>
      <div>
        <Variant
          onClick={onClick}
          variant={variant}
          key={i}
          isRoute={product.variants.length > 1}
          productTitle={product.title}
          handle={product.handle}
        />

        <div>

        {product.images.slice(0, 1).map((image, k) =>

          <div>


            <Link class="addToCart" href={`/merch/${product.handle}`}>
            <img src={image.src} />


<br />
<h3>
{product.title}
<br />
<small>
{ product.attrs.variants[0].available === false
  ? <span class="sold">sold out</span>
  : <span class="price"> ${product.variants[0].price}</span>
}

</small>
</h3>



</Link>
          </div>

        )}
        </div>
        </div>

      )}



  </div>
  </div>
)

export default Product
