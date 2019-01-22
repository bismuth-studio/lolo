import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

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
      <div class="col-12 left variant_item">

            </div>
    )
  }
}

export default Variant
