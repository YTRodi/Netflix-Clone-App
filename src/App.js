import requests from './requests';
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav';
import './App.css';

function App() {
    return (
    <div className='app'>
      <Nav />
      <Banner />


      <Row 
        title="NETFLIX ORIGINALS"
        fetchUrl={ requests.fetchNetflixOriginals }
        isLargeRow
      />
      <Row title="Trending Now 🔥" fetchUrl={ requests.fetchTrending } />
      <Row title="Top Rated 💯" fetchUrl={ requests.fetchTopRated } />
      <Row title="Action Movies 👊🏼" fetchUrl={ requests.fetchActionMovies } />
      <Row title="Comedy 😂" fetchUrl={ requests.fetchComedyMovies } />
      <Row title="Horror 👻" fetchUrl={ requests.fetchHorrorMovies } />
      <Row title="Romance 💖" fetchUrl={ requests.fetchRomanceMovies } />
      <Row title="Documentaries 🧐" fetchUrl={ requests.fetchDocumentaries } />

    </div>
    );
}

export default App;
