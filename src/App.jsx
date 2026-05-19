import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lent" element={<MenuPage pageKey="lent" />} />
      <Route path="/burgers" element={<MenuPage pageKey="burgers" />} />
      <Route path="/sandwiches" element={<MenuPage pageKey="sandwiches" />} />
      <Route path="/pizza" element={<MenuPage pageKey="pizza" layout="full" />} />
      <Route path="/platters" element={<MenuPage pageKey="platters" />} />
      <Route path="/blaajine" element={<MenuPage pageKey="biAajine" />} />
      <Route path="/sidesandbeverages" element={<MenuPage pageKey="sidesandbeverages" />} />
      <Route path="/tobacco" element={<MenuPage pageKey="tobacco" />} />
    </Routes>
  )
}
