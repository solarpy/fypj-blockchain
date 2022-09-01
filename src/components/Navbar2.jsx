import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar2() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/trade">Pricing</CustomLink>
        <CustomLink to="/swap">About</CustomLink>
        <CustomLink to="/cards">About</CustomLink>
        <CustomLink to="/exchange">About</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}