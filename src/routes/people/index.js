import { h, Component } from 'preact';
import style from './style';
import People from '../../components/people';
import { Link } from 'preact-router/match';
export default class Home extends Component {

	render() {
	
		return (
			<div class="video">
		<People />

				
			</div>
		);
	}
}
