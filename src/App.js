import Row from "./Row"
import './App.css';
import  './Row.css';
import Banner from './Banner'
import Nav from './Nav'
import request from "./request"


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>
      <Row isLarge={true} title="Netflix Originials" fetchUrl={request.fetchNetflixOriginals}/>
      <Row isLarge={false} title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row isLarge={false} title="Top Rated" fetchUrl={request.fetchToprated}/>
      <Row isLarge={false} title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row isLarge={false} title="Comedies" fetchUrl={request.fetchComedyMovies}/>
      <Row isLarge={false} title="Horrors" fetchUrl={request.fetchHorrorMovies}/>
      <Row isLarge={false} title="Romance" fetchUrl={request.fetchRomanceMovies}/>
      <Row isLarge={false} title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
