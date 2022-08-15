
const Recipe = ({title, img, crusine}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{crusine}</p>
        <img src={img} alt="food-image" />
    </div>
  )
}

export default Recipe