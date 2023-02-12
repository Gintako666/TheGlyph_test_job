import React from 'react';
import { PlayerList } from './components/PlayerList';
import { PlayersStats } from './components/PlayersStats';
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <PlayerList />
      <PlayersStats />
    </div>
  );
};

export default App;
