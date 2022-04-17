import "./App.css"
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";
import { DetailMovie } from "./pages/Detail";
import background from "./assets/img/background.svg"

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <img src={background} className="background-img" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/query/:query/" element={<SearchResults />} >
            <Route path=":year" element={<SearchResults />} />
          </Route>
          <Route path="/movie/:id" element={<DetailMovie />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </section>
    </div>
  );
}

export default App;
