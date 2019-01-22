import { h, Component } from 'preact';
import axios from 'axios'
import style from './style'
import { Link } from 'preact-router/match'
import { route } from 'preact-router'
import People from '../../components/peopleU';
import ReactPlayer from 'react-player'

const fieldToDisplayInUrl = 'video'
const fieldForSort = 'slug' // can be creation time, whatever

const PAGES = '/assets/api/videos.json';

export default class Single extends Component {
	state = {
		single: {},
		singleLoaded: false,
		singles: []
	};

	componentDidMount() {
		axios.get(PAGES)
		.then(response => this.setState({
			singles: response.data.records,
			single: response.data.records.find(single => single.fields.slug === this.props.id) || {},
			singleLoaded: true
		}))

		document.addEventListener('keydown', this.handleKeyPress)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress)
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.id !== nextProps.id) {
			this.setState({
				single: this.state.singles.find(single => single.fields.slug === nextProps.id) || {}
			})
		}
	}

	handleKeyPress = (event) => {
	  const { keyCode: code } = event

		if (code ===38 && this.prev) {
			route(`/video/${this.prev}`, true)
		}
		if (code ===37 && this.prev) {
			route(`/video/${this.prev}`, true)
		}

		if (code === 40 && this.next) {
			route(`/video/${this.next}`, true)
		}
		if (code === 39 && this.next) {
			route(`/video/${this.next}`, true)
		}
	}

	render({id}, { singles, single, singleLoaded }) {
		let prev, next

		if (singles.length && singleLoaded && Object.keys(single)) {
			const sorted = singles.sort((a, b) => a.fields[fieldForSort] - b.fields[fieldForSort])
			const index = sorted.findIndex(s => s.fields[fieldToDisplayInUrl] === single.fields[fieldToDisplayInUrl])
			const prevIndex = index === 0 ? singles.length - 1 : index - 1
			const nextIndex = index === singles.length - 1 ? 0 : index + 1
			this.prev = sorted[prevIndex].fields[fieldToDisplayInUrl]
			this.next = sorted[nextIndex].fields[fieldToDisplayInUrl]
		}

		return (
			<div>
	
<div class="col-12 left vid">
				{singleLoaded
					? Object.keys(single).length
					  ? <div class="single" key={single.id}>
					 
					 <ReactPlayer  class="videoWrapper" url={single.fields.link} playing />
			
								   </div>
					
						   
					  : <div>Ooops, no single with this id.</div>
				  : <div class="fixed center loading"><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/05/main-qimg-a9a6c8ccb7c798ff67413118220c7bc3.png" /></div>
				}<div class="clearfix"></div>
					<br />
					<div class="col-12 left ">	<People /></div>
					</div>	
					<div class="clearfix"></div>
					<br /><br /><br />
			</div>
		);
	}
}
