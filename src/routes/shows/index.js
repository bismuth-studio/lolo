
import { h, Component } from 'preact';
import axios from 'axios'
import { Link } from 'preact-router/match'
import Helmet from "preact-helmet";
const PROXY = 'https://coors.now.sh/';
const PAGES = 'https://lolozouai-auxql-shows-show1.now.sh';
// const PAGES2 = '/assets/api/shows.json';
const PAGES2 = 'https://cdn.shopify.com/s/files/1/2994/1228/t/1/assets/airtable.json' + '?374233747237427';

export default class Shows extends Component {

	handleScroll(event) {
    // const menu = document.getElementById('scroll_down')
    // if (window.pageYOffset > 100) {
    //   // scrolled more than first screen
    //   menu.classList.add('hide')
    // } else {
    //   menu.classList.remove('hide')
    // }
  }

	state = {
		shows: [],
		showsLoaded: false,
		shows2: [],
		showsLoaded2: false,
	};

	componentDidMount() {
		// window.addEventListener('scroll', this.handleScroll);
		axios.get(PAGES2).then(response => {
			this.setState({shows2: response.data.records || [], shows2Loaded: true})
			console.log(response);
		})

	}

	render({ }, { shows, showsLoaded, shows2, shows2Loaded }) {
		return (
			<div class="shows">

				   <Helmet
              htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
              title="Shows"
               titleTemplate="Lolo Zouaï - %s" />
<div class="shows" style={`background:url('assets/showsBg/lowhighbg.jpg');`}>
<div  class="wrapper" id="second">


<div class="cover-img">
	<img src='assets/showsBg/header2.png' />
</div>


<div class="clearfix"></div>
				{shows2Loaded
					? shows2.length
					  ? <div class=""> {shows2.map((show, i) =>
					<div>
						{ show.fields.sold === true
  ? <div class="soldout">
			<div class="entry" key={i}>
			<div class="concert-day">
				<div class="date">{show.fields.dateFormat}</div>
				<div class="location">{show.fields.city} , {show.fields.state} </div>
				<div class="venue">{show.fields.venue} </div>
			</div>
			<div class="concert-links">
				<div class="link1">
						<a href={show.fields.vip_link} target="_blank"></a>
				</div>
				<div class="link1">
				<a href={show.fields.link} target="_blank">Sold Out</a>
				</div>
			</div>
		</div>
	</div>
  :
	<div class="entry" key={i}>
	<div class="concert-day">
		<div class="date">{show.fields.dateFormat}</div>
		<div class="location">{show.fields.city} , {show.fields.state} </div>
		<div class="venue">{show.fields.venue} </div>
	</div>
	<div class="concert-links">
		<div class="link1">
		<a href={show.fields.vip_link} target="_blank">VIP</a>
</div>
		<div class="link1">
		<a href={show.fields.link} target="_blank">Tickets</a>
		</div>
	</div>
</div>

}
					</div>
								)}

					    </div>

					  : <div>Ooops, no shows.</div>
				  : <div class="fixed center loading"><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/05/main-qimg-a9a6c8ccb7c798ff67413118220c7bc3.png" /></div>
				}
				<br />
					<div class="clearfix"></div>

					<div class="show-footer">
					 <img class="show-footer-left" src="https://auxcorde.fodaco.de/wp-content/uploads/2019/01/footer-left2.png" />
						<img class="show-footer-right" src="assets/showsBg/extra.png" />
					 </div>

				</div>
				</div>


			</div>
		);
	}
}
