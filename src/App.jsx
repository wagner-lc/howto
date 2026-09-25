/* Página principal que gerencia todo o conteúdo */

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import CategoryCard from './components/CategoryCard'
import categorias from './data/categorias'
/*import CssPage from './pages/Css'*/
import GitPage from './pages/Git' 
import JavascriptPage from './pages/Javascript'
import PhpPage from './pages/Php'
import ReactPage from './pages/React'
import SqlPage from './pages/Sql'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

function Inicio() {

  return (
    <main>
      <section className="inicio">

        <h1>Como eu faço isso mesmo?</h1>

        <p className="subtitulo">
          Escolha uma categoria para encontrar meus tutoriais.
        </p>

        <div className="categorias">

          {categorias.map((categoria) => (

            <CategoryCard
              key={categoria.titulo}
              icone={categoria.icone}
              titulo={categoria.titulo}
              descricao={categoria.descricao}
              link={categoria.link}
            />

          ))}

        </div>

      </section>

    </main>
  )
}

function App() {

  return (
    <BrowserRouter>

      <Header />

      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Inicio />} />
        

        <Route path="/git" element={<GitPage />} />        

        <Route path="/javascript" element={<JavascriptPage />} />

        <Route path="/php" element={<PhpPage />} />
        
        <Route path="/react" element={<ReactPage />} />

        <Route path="/sql" element={<SqlPage />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App