import { h, Component } from 'preact';
import CartWrapper from '../cartWrapper';
import axios from 'axios';
import { DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { shopClient } from '../app'
import { Link } from 'preact-router/match';

export default class songNav extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  current: 0,
		  songs: [],
		  isInitialScroll: true,
		  products: []
		}
	 }
  
  componentDidMount() {
		axios.get('https://auxcorde.fodaco.de/wp-json/wp/v2/singles?post_name=lolo-zouai')
		.then(res => {
		  const { hash } = window.location
  
		  let index = 0
		  if (hash) {
			index = res.data.findIndex(song => song.acf.song === hash.slice(1))
  
			if (index === -1) {
			  index = 0
			}
		  }
  
		  Events.scrollEvent.register('end', (to, element) => {
			this.isScrolling = false
		  });
  
		  // initial scroll
		  this.scrollTo(index)
  
		  this.setState({songs: res.data})
		})

		shopClient.fetchQueryProducts({collection_id: 60022554666, sort_by: ['manual']}).then((products) => {
      this.setState({products})
    })
  }
  
  scrollTo(index) {
		this.isScrolling = true
		scroll.scrollTo(index * window.innerHeight)
		this.setState(state => ({current: index}))
  }
  

	render() {
		const { current, isInitialScroll, songs, products } = this.state
		const { isShop } = this.props
console.log(products)
		return (
			<nav class="contain">
			
				{
          !isShop && songs.map((song, key) =>
            <a key={key} href={`/#${song.acf.slug}`} onClick={() => this.scrollTo(key)}>{song.title.rendered}</a>
          )
        }
        {
        	false && isShop && products.map(product => 		<Link href={`/collection/lolo-zouai-x-stickybaby/${product.attrs.handle}`}>{product.title}</Link>)
        }
		
			</nav>
		);
	}
}
