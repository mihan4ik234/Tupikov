import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Link to="/">ООО "Лидерком"</Link>
      <Link to="/zaiavka">ООО "Лидерком"</Link>
    </div>
  )
}

export default Header
