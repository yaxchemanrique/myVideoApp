const PersonCast = ({ image, actor, character }) => {
  return (
    <li className='castItem'>
      <img className='castItem__img' src={image} alt={actor} />
      <div className='castItem__info'>
        <p className='castItem__info--actor'>{actor}</p>
        <p className='castItem__info--character'>As: {character}</p>
      </div>
    </li>
  )
}

export default PersonCast
