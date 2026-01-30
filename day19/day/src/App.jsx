import { Link, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Contact } from "./components/Contact"

function App() {
  return (
    <>
      <Link to="/">Home</Link> |
      <Link to="/About">About</Link> |
      <Link to="/Contact">Contact</Link>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default App
