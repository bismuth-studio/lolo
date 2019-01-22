import { h, Component } from 'preact';
import axios from 'axios'
import { Link } from 'preact-router/match';

import ReactPlayer from 'react-player'
import Helmet from "preact-helmet";
const PAGES = '/assets/api/videos.json';

export default class Videos extends Component {
	state = {
		shows: [],
		showsLoaded: false,
	};

	componentDidMount() {
		axios.get(PAGES)
		.then(response => this.setState({shows: response.data.records || [], showsLoaded: true}))
		.then(this.timer = setInterval(() => this.socet(), 5000))
	}

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  socet = () => {
		axios.get(PROXY+PAGES)
		.then(response => {
			if (this.state.shows.length !== response.data.records.length) {
				this.setState({shows: response.data.records})
			}
		})
  }

	render({ }, { shows, showsLoaded }) {
		return (
			<div class="videos">


				{showsLoaded
					? shows.length
					  ? <div >
						<Helmet
   htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
	 title="Videos"
		titleTemplate="Lolo Zouaï - %s" />
							{shows.map((show, i) =>
							<div class="col-4 p1 left">
							<h3>{show.fields.title}</h3>

					  	  <Link class="videoOverlay" href={`/video/${show.fields.slug}`} key={i}>
					  	  <img src={`https://img.youtube.com/vi/${show.fields.yt_id}/maxresdefault.jpg`} />

								</Link>
								</div>
						    )}
					    </div>
					  : <div>Ooops, no videos.</div>
				  : <div class="loading"></div>
				}
	
			</div>
		);
	}
}
