import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import axios from 'axios'
import ReactPlayer from 'react-player'
import Videos from '../videos'
import Helmet from "preact-helmet";
const PAGES = 'https://api.lolozouai.com/videos/videos.json';

export default class Video extends Component {
	state = {
		show: {},
		showLoaded: false,
		shows: [],
		number: ''
	};

	componentDidMount() {
		this.updateInfo(this.props)
		axios.get(PAGES)
		.then(response => this.setState({
			show: response.data.records.find(show => show.fields.slug === this.props.match.params.id) || {},
			showLoaded: true,
			shows: response.data.records || [],
			number: response.data.records.indexOf(response.data.records.find(show => show.fields.slug === this.props.match.params.id))
		}))
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.match.params.id !== nextProps.match.params.id) {
			this.setState({showLoaded: false})
			this.updateInfo(nextProps)
	    axios.get(PAGES)
			.then(response => this.setState({
				show: response.data.records.find(show => show.fields.slug === nextProps.match.params.id) || {},
				number: response.data.records.indexOf(response.data.records.find(show => show.fields.slug === nextProps.match.params.id)),
				showLoaded: true
			}))
		}
	}

	updateInfo = (prop) => {
		axios.get(PAGES)
		.then(response => this.setState({
			show: response.data.records.find(show => show.fields.slug === prop.match.params.id) || {},
			number: response.data.records.indexOf(response.data.records.find(show => show.fields.slug === prop.match.params.id)),
			shows: response.data.records || [],
			showLoaded: true
		}))
	}

	render({}, { shows, number, show, showLoaded }) {
		const prev = ((number - 1) % shows.length == -1) ? (shows.length - 1) : ((number - 1) % shows.length)
		const next = (number + 1) % shows.length;
		return (
			<div class="page video" key={show.id}>
		<div class="pageBg"></div>
				{showLoaded
					? Object.keys(show).length
					  ? <div class="videoWrapper">
					  <Helmet

		   title={show.fields.title}

	   />


					  <ReactPlayer  url={show.fields.link} playing />
					 
						  <br/>
						  <div class="clearfix"></div>
					  <div class="catalogControls">
	
		<div class="prev col-6 left btn">
		<Link to={'/videos/'+ shows[prev].fields.slug }>←</Link>
					</div>

					<div class="next col-6 left  btn" >
					<Link to={'/videos/'+ shows[next].fields.slug }>→</Link>
					</div>
<br />
					<div class="back" >
					  	<Link to="/videos" style="color: #f96600;">
					  		back to all
					  	</Link>
						  </div>
			
				</div>
				
				<h1 class="videoTitle">
					  	{show.fields.title}	  </h1>
	
			
					  </div>
					  : <div>Ooops, no video with this id.</div>
				  : <div class="loading"></div>
				}


			</div>
		);
	}
}
