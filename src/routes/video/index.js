import { h, Component } from 'preact';
import axios from 'axios'
import Videos from '../../components/videos';
import ReactPlayer from 'react-player'
import { Link } from 'preact-router/match'


const PAGES = 'https://auxcorde.fodaco.de/wp-json/wp/v2/video';

export default class Single extends Component {
	state = {
		single: {},
		singleLoaded: false,
		singles: []
	};

	componentDidMount() {
		axios.get(PAGES)
		.then(response => this.setState({
			singles: response.data,
			single: response.data.filter(single => single.acf.type === "official").find(single => single.acf.video_slug === this.props.id) || {},
			singleLoaded: true
		}))

		document.removeEventListener('keydown', this.handleKeyPress)
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress)
	}




	render({id}, { singles, single, singleLoaded }) {

		return (
			<div>
	
<div class="col-12 left vid">
				{singleLoaded
					? Object.keys(single).length
					  ? <div class="single" key={single.acf.id}>
					 
					 <ReactPlayer  class="videoWrapper" url={single.acf.url} playing />
			
								   </div>
					
						   
					  : <div>Ooops, no single with this id.</div>
				  : <div class="fixed center loading"><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/05/main-qimg-a9a6c8ccb7c798ff67413118220c7bc3.png" /></div>
				}<div class="clearfix"></div>
					<br />
					{/* <div class="col-12 left ">	
					<Videos />
					</div> */}
					</div>	
					<div class="clearfix"></div>
					<br /><br /><br />
			</div>
		);
	}
}
