import './App.css';
import { NavBar, HomePage, TopRated, Delivery, AboutPage, Footer } from './containers'

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <TopRated />
      <Delivery />
      <AboutPage />
      <Footer />
    </div>
  );
}

export default App;
