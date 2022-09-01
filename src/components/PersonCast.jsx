const PersonCast = ({ image, actor, character }) => {
  return (
    <li className='catItem'>
      <img className='catItem__img' src={image} alt={actor} />
      <div className='catItem__info'>
        <p className='catItem__info--title'>{actor}</p>
        <p className='catItem__info--title'>As: {character}</p>
      </div>
    </li>
  )
}

export default PersonCast
