import { BrowserRouter as Router } from 'react-router-dom'
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import CountList from './components/Counter/CountList';
import { countsData } from './components/Counter/Data';
import EventList from './components/Price/EventList'
import { eventsData } from "./components/Price/Data";

function App() {
    return ( 
      <>
        <Router>
        <Header />
        <About />
        <Shop />
        <Menu />
        <CountList data={countsData}/>
        <EventList data={eventsData}/>
        </Router>
      </>
    );
}

export default App; 

