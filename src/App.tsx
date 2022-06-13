import Avatar from 'components/Avatar'
import { Routes, Route } from 'react-router-dom'

// pages and components to import
// header, layout, game, about this, resources.
import Header from 'components/header'
import Layout from 'components/layout'
import Game from 'pages/game'
import AboutThis from 'pages/aboutThis'
import Resources from 'resources'

export default function App() {
  return (
    <div className="w-screen h-screen bg-sky-300">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="game" element={<Game />} />
          <Route path="about" element={<AboutThis />} />
          <Route path="resources" element={<Resources />} />
          <Route path="*" element={
            <main style={{padding: "1rem"}}>
              <p>404: There's nothing here.</p>
            </main>
          } />
        </Route>
      </Routes>
    </div>
  )
}

// export default App
