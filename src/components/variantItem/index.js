import { h, Component } from 'preact';
import { Link } from 'preact-router';

class Variant extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quantity: 1
    }
  }

  changeQuantity(change) {
    const { quantity } = this.state

    if (quantity + change > 0) {
      this.setState({quantity: quantity + change})
    }
  }

  render({ variant, onClick, isRoute, productTitle, handle }, { quantity }) {
    return (
      <div class="col-12  left variant_item">
        <div class="col-12 left variant_item">
       
        </div>
          <div class="col-12 left variant_item qty">
     
        {isRoute
          ? <Link class="addToCart" href={`/merch/${handle}`}>SELECT SIZE</Link>
          :  <div>


{ variant.available === false 
  ? <span class="sold"> {variant.title} sold out</span>
  : <span> <button class="addToCart" onClick={() => onClick(variant, quantity)}>{variant.title}</button></span>
}


     
      </div>
    }
      </div>
            </div>
    )
  }
}

export default Variant
