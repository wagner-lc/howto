import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = (props) => {
  return (

    <Link to={props.link} className='categoria'>

      <div className='icone'>
        {props.icone}
      </div>

      <div className='categoria-info'>
        <h2>
          {props.titulo}
        </h2>

        <p>
          {props.descricao}
        </p>
      </div>

    </Link>

  )
}

export default CategoryCard
