import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import CartWrapper from '../cartWrapper'
import Nav from '../nav'

export default class Header extends Component {
	render() {
		const { url = '', goToMerch } = this.props
		const isShop = url.includes('shop') || url.includes('collection')
		const isMusic = url.includes('/#')
		const isShows = url.includes('shows')
		return (
			<div>
				<div class="nav" >
			
					<Link  class="left" href="/">music</Link>
					<Link  class="left" href="/videos">videos</Link>
					<Link  class="left" href="/merch">merch</Link>
				<div class="cart" >
					<CartWrapper url={url} goToMerch={goToMerch} />
				</div>
				</div>
				<footer>
              <a href="https://twitter.com/lolozouai" target="_blank">twitter</a>
              <a href="https://instagram.com/lolozouai" target="_blank">instagram</a>
              <a href="https://facebook.com/lolozouai" target="_blank">facebook</a>
          </footer>

			</div>
		);
	}
}
