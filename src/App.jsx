import './App.css'
import PersonImg from './components/PersonImg.jsx'
import Body from './components/Body.jsx'
import Socials from './components/Socials.jsx'

function App() {
	return (
		<div className="app">
			<main className="content">
				<PersonImg />
				<Body />
				<Socials />
			</main>
		</div>
	)
}

export default App
