import './App.css'
import Header from './components/Header'
import CategoryCard from './components/CategoryCard'
import categorias from './data/categorias'

function App() {

  return (

    <>

      <Header />

      <main>
        <section class="inicio">

          <h1>Como eu faço isso mesmo? </h1>

          <p class="subtitulo">
              Escolha uma categoria para encontrar meus tutoriais.
          </p>

          <div className='categorias'>

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

    </>

  )

}

export default App