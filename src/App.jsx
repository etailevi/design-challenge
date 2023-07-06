import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './assets/scss/main.scss';

import { AppHeader } from './cmps/app-header';
import { HomePage } from './views/home';
import { AboutUs } from './views/about.jsx';
import { AppFooter } from './cmps/app-footer';


function App() {

  return (
    <Router>
      <section className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<AboutUs />} path="/about" />
          </Routes>
        </main>
        <AppFooter />
      </section>
    </Router>
  )
}

export default App
