
import { h, Component } from 'preact';
import axios from 'axios'
import { Link } from 'preact-router/match'
import Helmet from "preact-helmet";
const PROXY = 'https://coors.now.sh/';
const PAGES = 'https://lolozouai-auxql-shows-show1.now.sh';
// const PAGES2 = '/assets/api/shows.json';
const PAGES2 = 'https://cdn.shopify.com/s/files/1/2994/1228/t/1/assets/airtable.json';

export default class Shows extends Component {

	handleScroll(event) {
    const menu = document.getElementById('scroll_down')
    if (window.pageYOffset > 100) {
      // scrolled more than first screen
      menu.classList.add('hide')
    } else {
      menu.classList.remove('hide')
    }
  }

	state = {
		shows: [],
		showsLoaded: false,
		shows2: [],
		showsLoaded2: false,
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		axios.get(PAGES2).then(response => this.setState({shows2: response.data.records || [], shows2Loaded: true}))

	}

	render({ }, { shows, showsLoaded, shows2, shows2Loaded }) {
		return (
			<div class="shows">

				   <Helmet
              htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
              title="Shows"
               titleTemplate="Lolo Zouaï - %s" />
<div class="shows" style={`background:url('assets/showsBg/2.jpg');`}>
<div  class="shows-inner" id="second">
<br /><br />
<div class="">
<img src="assets/showsBg/wc-tour-lz-logo-min.png" style="width:100%;" />
<div class="support"><img src="assets/showsBg/sab.png"/></div>
</div>
<div class="clearfix"></div>
				{shows2Loaded
					? shows2.length
					  ? <div class="a3col"> {shows2.map((show, i) =>
					<div>
						{ show.fields.sold === true
  ? <div class="soldout"><div>	<div class="dateItem" key={i}>
	<a href={show.fields.link} target="_blank">
	<span class="date"> {show.fields.dateFormat}</span>
	<span class="city"> {show.fields.city} , {show.fields.state} </span>
	<a class="tix" href={show.fields.link} target="_blank">soldout</a>
	<br />
	<div class="venue">{show.fields.venue} </div>
	</a></div>  </div></div>
  :  <div>	<div class="dateItem" key={i}>
	<a href={show.fields.link} target="_blank">
	<span class="date"> {show.fields.dateFormat}</span>
	<span class="city"> {show.fields.city} , {show.fields.state} </span>
	<a class="tix" href={show.fields.link} target="_blank">tickets & VIPs</a>
	<br />
	<div class="venue">{show.fields.venue} </div>
	</a></div>  </div>
}
					</div>
								)}

					    </div>

					  : <div>Ooops, no shows.</div>
				  : <div class="fixed center loading"><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/05/main-qimg-a9a6c8ccb7c798ff67413118220c7bc3.png" /></div>
				}
				<br />
					<div class="clearfix"></div>

										<div class="tourGraphic">
							<img src="assets/showsBg/wc-tour-graphic-min.png" style="width:100%;" />
							</div>
				</div>
				</div>
{/* <div class="shows first" style={`background:url('assets/showsBg/1.jpg');`}>
				<div class="">
<img src="assets/tour-side.jpg" style="margin-top:0px;" />
</div>
				<div  class="shows-inner" id="first" >


<div class="clearfix"></div>
				{showsLoaded
					? shows.length
					  ? <div> <br />{shows.map((show, i) =>
						<div class="dateItem" key={i}>
						<a href={show.fields.link} target="_blank">
						<span class="date"> {show.fields.dateFormat}</span>
						<span class="city"> {show.fields.city} , {show.fields.state} </span>
						<a class="tix" href={show.fields.link} target="_blank">tickets</a>
						<br />
						<div class="venue">{show.fields.venue} </div>
						</a>
					  </div>
						    )}
					    </div>
					  : <div>Ooops, no shows.</div>
				  : <div class="fixed center loading"><img src="https://auxcorde.fodaco.de/wp-content/uploads/2018/05/main-qimg-a9a6c8ccb7c798ff67413118220c7bc3.png" /></div>
				}
				</div>
				</div> */}

{/* <div id="scroll_down">
  <span class="arrow-down">

  </span>
  <span id="scroll-title">
    more shows
  </span>
</div> */}


			</div>
		);
	}
}
