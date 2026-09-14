import React from 'react'

const CategoryCard = (props) => {
  return (

    <a href={props.link} className='categoria'>
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
    </a>
    )
}

export default CategoryCard
