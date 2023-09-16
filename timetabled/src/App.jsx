import './App.css'; //Import the CSS file
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
     <h1>Itineray for 7 Days in Chicago</h1>
     <h2>Welcome to Chicago, Natalia Check out this calendar to get to know the city and see all the sights during you stay.</h2>
      <Calendar/>
    </div>
  )
}

export default App
