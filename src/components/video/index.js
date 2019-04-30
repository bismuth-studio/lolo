import { h, Component } from 'preact';
import axios from 'axios'
import { Link } from 'preact-router/match';

import ReactPlayer from 'react-player'
import Helmet from "preact-helmet";
const PAGES = 'https://auxcorde.fodaco.de/wp-json/wp/v2/video';

export default class Videos extends Component {
	state = {
		shows: [],
		showsLoaded: false,
	};

	componentDidMount() {
		axios.get(PAGES)
		.then(response => this.setState({shows: response.data || [], showsLoaded: true}))
		.then(this.timer = setInterval(() => this.socet(), 5000))
	}

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  socet = () => {
		axios.get(PAGES)
		.then(response => {
			if (this.state.shows.length !== response.data.length) {
				this.setState({shows: response.data})
			}
		})
  }

	render({ }, { shows, showsLoaded }) {
		return (
			<div class="videos"  >


				{showsLoaded
					? shows.length
					  ? <div >
						<Helmet
   htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
	 title="Videos"
		titleTemplate="Lolo Zouaï - %s" />
							{shows.filter(video => video.acf.type === "official").map((video, i) =>
							<div class="col-4 p1 left">
								<div dangerouslySetInnerHTML={{ __html: video.title.rendered }} />

					  	  <Link class="videoOverlay" href={`/video/${video.acf.slug}`} key={i}>
					  	  <img src={`https://img.youtube.com/vi/${video.acf.id}/maxresdefault.jpg`} />

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
