import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import CategoryCard from './components/CategoryCard'
import categorias from './data/categorias'
import ReactPage from './pages/React'

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

      <Routes>

        <Route path="/" element={<Inicio />} />

        <Route path="/react" element={<ReactPage />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App