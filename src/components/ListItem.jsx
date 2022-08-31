import { Link } from 'react-router-dom'

const ListItem = ({ image, name, rating, id, summary }) => {
  return (
    <Link to={`/singleshow/${id}`} className='listItem'>
      <img className='listItem__img' src={image} alt={name} />
      <div className='listItem__info'>
        <p className='listItem__info--title'>{name}</p>
        <p className='listItem__info--summary'>{summary}</p>
        <p className='listItem__info--rating'>{rating}</p>
      </div>
    </Link>
  )
}

export default ListItem
