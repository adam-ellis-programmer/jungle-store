import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <div className="my-3 p-3  card-custom">
      <Link to={`/product/${product._id}`}>
        <Card.Img className='custom-card-img' src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          {/* display as a <div> */}
          <Card.Title as="div" className="prouct-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>
        <Card.Text className='card-price' as="h3">£{product.price}</Card.Text>
      </Card.Body>
    </div>
  )
}

export default Product
