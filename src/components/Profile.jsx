import './styles/Profile.css'
import PersonImg from './PersonImg.jsx'
import Body from './Body.jsx'
import Socials from './Socials.jsx'

function Profile() {
	return (
		<div className="profile">
			<div className="profile-content">
				<PersonImg />
				<Body />
				<Socials />
			</div>
		</div>
	)
}

export default Profile
