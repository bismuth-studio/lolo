import { h, Component } from 'preact';
import style from './style';
import Videos from '../../components/videos';
import { Link } from 'preact-router/match';
export default class Home extends Component {

	render() {
		return (
			<div class="video" >
					<div class="lolo-tv-wrapper">
					<img class="lolo-tv" src="assets/loloTV.png" />
					</div>

				<Videos />
			</div>
		);
	}
}
