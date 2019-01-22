import { h, Component } from 'preact';
import { Router, route } from 'preact-router';

// -- ./componenets

import Header from './header';

import Home from '../routes/home';

import Merch from '../routes/merch';
import MerchItem from '../routes/merch-item';

import Shows from '../routes/shows';

import Video from '../routes/video';
import Videos from '../routes/videos';

// -- *3rdparty

import ShopifyBuy from 'shopify-buy'
import Helmet from "preact-helmet";

// import Home from 'async!./home';
// import Profile from 'async!./profile';

export const shopClient = ShopifyBuy.buildClient({
  accessToken: '720582fbbce8468d4d4724b80a0852d2',
  domain: 'lolozouai.myshopify.com',
  appId: '6'
});

export default class App extends Component {
	state = {
		currentUrl: window.location.href
	}

	goToMerch = () => route('/merch', true);
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => window.scrollTo(0, 0) && this.setState({currentUrl: e.url})  ;

	render() {
		return (
			<div id="app">
			
			  <Helmet
              htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
			  title="Home"
			  titleTemplate="Lolo Zouaï - %s" />

				<Header url={this.state.currentUrl} goToMerch={this.goToMerch} />

				<Router onChange={this.handleRoute}>

					<Home path="/" />

					<Shows path="/shows" />

					<Merch path="/merch"  key="product" />
					<MerchItem key="variant" path="/merch/:handle" />

					<Videos path="/videos" />
					<Video path="/video/:id" />

				</Router>
			</div>
		);
	}
}
