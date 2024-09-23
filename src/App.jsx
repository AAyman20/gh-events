import MainContent from "./components/MainContent";
import logo from "./assets/images/logo.png";

// why we use React.Fragment instead of div
function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
