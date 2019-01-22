import { h, Component } from 'preact';
import Variant from '../variant'
import { Link } from 'preact-router/match';

const Product = ({ product, onClick }) => (
  <div class="productItem">


    <div class=" col-12 left">

        {product.attrs.variants.slice(0,1).map((variant, i) =>

          <div>
            <a class="addToCart" href={`/collection/lolo-zouai-x-stickybaby/${product.attrs.handle}`}>   {product.attrs.handle}
</a>

          </div>

        )}
        </div>

  </div>
)

export default Product
