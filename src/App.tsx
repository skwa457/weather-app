import * as React from 'react';
import './styles/App.css';
import Weather from "./components/Weather";

class App extends React.Component <{}> {
  public render() {
    return (
      <div className="WebApp">
        <header className="App-header">
          <h1 className="App-title">Weather</h1>
        </header>
          <div className="body-content">
            <Weather/>
          </div>
      </div>
    );
  }   
}

export default App;
