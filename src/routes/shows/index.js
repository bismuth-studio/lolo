
import { h, Component } from 'preact';
import axios from 'axios'
import { Link } from 'preact-router/match'
import Helmet from "preact-helmet";
const PROXY = 'https://coors.now.sh/';
const PAGES = 'https://lolozouai-auxql-shows-show1.now.sh';
// const PAGES2 = '/assets/api/shows.json';
const id =  parseInt(Math.floor(100000 + Math.random() * 900000))
const PAGES2 = 'https://cdn.shopify.com/s/files/1/2994/1228/t/1/assets/airtable.json?' + id ;

console.log(id);
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
			<div class="shows-wrapper" style={`background:url('assets/showsBg/lowhighbg.jpg');`}>

	      <Helmet htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
	              title="Shows"
	              titleTemplate="Lolo Zouaï - %s" />

				<div class="shows" >
				<div  class="flyer-wrapper" id="second">
				<div class="border">

						<div class="cover-img ">
							<div class="grid-2 intro-text">
								<h1 class="text-left">Lolo Zouaï</h1>
								<div>
									<h1 class="text-right">High Highs to low lows</h1>
									<h1 class="text-right">Europe Tour</h1>
								</div>
							</div>
							<img src='assets/showsBg/lolobg-001.png' />
						</div>


						<div class="clearfix"></div>
						{shows2Loaded
							? shows2.length
							? <div class="tour-dates"> {shows2.map((show, i) =>
							<div>
								{ show.fields.sold === true
		  						? <div class="soldout">
												<div class="entry" key={i}>
														<div class="concert-line"></div>
														<div class="concert-day">
															<div class="date">{show.fields.dateFormat}</div>
														</div>

														<div class="concert-links">
															<div class="location">{show.fields.city},  {show.fields.country} </div>
															<span>  </span>
																<div class="link1">
																		<a href={show.fields.ticket_link} target="_blank">Sold Out</a>
																</div>
														</div>
												</div>
										</div>
									  :
										<div class="entry" key={i}>
											<div class="concert-line"></div>

											<div class="concert-links concert-day">
													<div class="date">{show.fields.dateFormat} </div>
											</div>

											<div class="concert-links concert-location">
												<div class="location">{show.fields.city},  {show.fields.country} </div>
											</div>

											<div class="concert-links link1">
													<a href={show.fields.ticket_link} target="_blank">Tickets </a>
											</div>

											<div class="concert-links link1">
													<span>- </span><a href={show.fields.vip_link} target="_blank"> VIPS</a>
											</div>

										</div>
									}
									</div>
									)}
									</div>
										: <div>Ooops, no shows.</div>
									  : <div class="fixed center loading">
												<img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/05/main-qimg-a9a6c8ccb7c798ff67413118220c7bc3.png" />
											</div>
									}
									<br />
									<div class="clearfix"></div>
									<div class="show-footer">
										<img class="show-footer-right" src="assets/showsBg/lolobg-002.png" />
									</div>

				</div>
				</div>
				</div>

			</div>
		);
	}
}
