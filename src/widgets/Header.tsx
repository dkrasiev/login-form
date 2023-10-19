import { Link, RouteObject } from 'react-router-dom'

export default function Header({ routes }: { routes: RouteObject[] }) {
  return (
    <header>
      {routes.map((r) => (
        <Link key={r.path} to={r.path!}>
          {r.path}
        </Link>
      ))}
    </header>
  )
}
