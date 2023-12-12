import { Link } from "react-router-dom"

export default function Topbar() {

    return (
  <nav className="settings">
    <Link to="/">Home</Link>
    <Link to="/login">Login/Signup!</Link>
  </nav>
    )
}
