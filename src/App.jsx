import Header from "./components/Header";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Song from "./pages/Song";
import Songs from "./pages/Songs";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/artists" element={<Artists/>} />
          <Route path="/artist/:id" element={<Artist/>} />
          <Route path="/songs" element={<Songs/>} />
          <Route path="/song/:id" element={<Song/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
