import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import ResponsiveAppBar from './ResponsiveAppBar';
import SoccerTransfers from './SoccerTransfers';
import CommentsSection from './CommentsSection';
import SoccerHighlights from './SoccerHighlights';
import xg from "./LiveSoccerGameStates";
import LiveSoccerGameStates from './LiveSoccerGameStates';
import NFLSchedule from './NFLSchedule';
import ToDoList from './ToDoList';
import WeatherComponent from './WeatherComponent';
import ChatApp from './ChatApp';
import TicTacToe from './TicTacToe';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <ResponsiveAppBar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SoccerHighlights />} />
        <Route path="/comments" element={<CommentsSection />} />
        <Route path="/xg" element={<LiveSoccerGameStates />} />
        <Route path="/nfl" element={<NFLSchedule />} />
        <Route path="/soccerTransfers" element={<SoccerTransfers />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/Weather" element={<WeatherComponent />} />
        <Route path="/ChatApp" element={<ChatApp />} />
        <Route path="/Tictactoe" element={<TicTacToe />} />
        
      </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
