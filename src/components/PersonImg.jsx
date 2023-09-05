import './styles/PersonImg.css'
import PersonPng from '../assets/image.png'

function PersonImg() {
	return (
		<div className="person-img-div">
			<img src={PersonPng} className="person-img"></img>
		</div>
	)
}

export default PersonImg;
