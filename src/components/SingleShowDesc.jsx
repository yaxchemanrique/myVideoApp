const SingleShowDesc = ({ name, summary, mainImage }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0, 0.8)'
      }}
      className='singleShow__background'
    >
      <div className='singleShow__container container'>
        <div className='singleShow__info'>
          <h1 className='singleShow__info--title'>{name}</h1>
          <p className='singleShow__info--summary'>{summary}...</p>
        </div>
        <img className='singleShow__mainImg' src={mainImage} alt={name} />
      </div>
    </div>
  )
}

export default SingleShowDesc
