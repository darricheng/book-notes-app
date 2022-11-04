import "./App.css";
import Navigation from "./Components/Navigation";
import AppContainer from "./Containers/AppContainer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="app-container mt-18 min-h-app bg-slate-300">
        <AppContainer />
      </div>
    </div>
  );
}

export default App;
