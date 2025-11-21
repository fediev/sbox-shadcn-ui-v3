import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="space-x-2 border-b border-indigo-200 p-2">
      <Link to="/">home</Link>
    </header>
  )
}
