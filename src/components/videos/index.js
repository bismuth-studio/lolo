import { h, Component } from 'preact';
import axios from 'axios'
import { Link } from 'preact-router/match';
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
			<div class="videos">
				{showsLoaded
					? shows.length
					  ? <div >
						<Helmet
   htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
	 title="Videos"
		titleTemplate="Lolo Zouaï - %s" />
							{shows.filter(video => video.acf.type === "official").map((video, i) =>
							<div class="col-4 p1 left">
						<h3>		<div dangerouslySetInnerHTML={{ __html: video.title.rendered }} />		</h3>
					  	  <Link class="videoOverlay" href={`/video/${video.acf.video_slug}`} key={video.acf.id}>
					  	  <img src={`https://img.youtube.com/vi/${video.acf.id}/maxresdefault.jpg`} />
								</Link>
								</div>
						    )}
					    </div>
					  : <div>Ooops, no videos.</div>
				  : 	<div class="fixed center loading"><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/05/main-qimg-a9a6c8ccb7c798ff67413118220c7bc3.png" /></div>
				}
	
			</div>
		);
	}
}
