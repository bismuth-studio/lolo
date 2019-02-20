import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import CartWrapper from '../cartWrapper'
import Nav from '../nav'

export default class Header extends Component {
	constructor(props) {
		super(props)
		console.log(props);
		this.state = {
			showCheck: false,
			url: ''
		}
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(){
		if (window.location.pathname == '/' || window.location.pathname == '/shows') {
			this.setState({showCheck: true})
		}
		if (this.props.url.includes('shows')) {
			this.setState({showCheck: true})
		}
	}

	handleClick(e){
		if (e.target.innerText.includes('shows')) {
			this.setState({showCheck: true} )
		} else {
			this.setState({showCheck: false} )
		}
	}

	render() {
		const { url = '', goToMerch } = this.props
		const isShop = url.includes('shop') || url.includes('collection')
		const isMusic = url.includes('/#')
		const isShows = this.state.showCheck
		return (
			<div>
			{ isShows ?
				<div>
					<div class="nav shows-nav " >

          <Link onclick={ e => this.handleClick(e)}  class="left" href="/shows">shows</Link>
					<Link onclick={ e => this.handleClick(e)}  class="left" href="/music">music</Link>
					<Link onclick={ e => this.handleClick(e)}  class="left" href="/videos">videos</Link>
					<Link onclick={ e => this.handleClick(e)}  class="left" href="/merch">merch</Link>

						<div class="cart" >
						<CartWrapper url={url} goToMerch={goToMerch} />
						</div>
					</div>
				</div>
				:
				<div>
					<div class="nav no-shows" >
          <Link onclick={ e => this.handleClick(e)}  class="left" href="/shows">shows</Link>
					<Link onclick={ e => this.handleClick(e)}  class="left" href="/music">music</Link>
					<Link onclick={ e => this.handleClick(e)} class="left" href="/videos">videos</Link>
					<Link onclick={ e => this.handleClick(e)}  class="left" href="/merch">merch</Link>

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
			 }
			 </div>

		);
	}
}
