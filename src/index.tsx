import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import App from 'App'
import Game from 'pages/game'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <BrowserRouter>
    {/* <App /> */}
    <Game />
  </BrowserRouter>
)
