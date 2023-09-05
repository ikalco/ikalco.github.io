import './styles/Body.css'

function Body() {
	return (
		<div className="body-div">
			<div className="name-div">
				<h2>David Montano</h2>
				<p>Self-Taught Developer</p>
				<p><a href="https://ikalco.github.io/">ikalco.github.io</a></p>
			</div>
			<div className="contact-div">
				<button>
					<a href="mailto:davidmontanolanza@gmail.com">
						<i className="bi bi-envelope"></i>
						&nbsp;&nbsp;
						Email
					</a>
				</button>
			</div>
			<div className="description-div">
				<h3>About</h3>
				<p>I am a self taught developer with an insatiable hunger for learning by doing. I love to experiment with unfamiliar things and I'm not afraid of putting in some work.</p>
				<h3>Interests</h3>
				<p>What I love the most is anything related to computers, whether it's software or hardware. I also have a keen interest in constant self improvement. As well as being conscious of my health habits, specifically diet and exercise.</p>
			</div>
		</div>
	)
}

export default Body;
