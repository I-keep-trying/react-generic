import logo from '../logo.svg'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NavLink to="/test">Router Test</NavLink>
      </header>
    </div>
  )
}

export default Home
