import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <div className='my-3 p-3  card-custom'>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          className='custom-card-img'
          src={product.image}
          variant='top'
        />
      </Link>

      <Card.Body>
        <Link className='link' to={`/product/${product._id}`}>
          {/* display as a <div> */}
          <Card.Title as='div' className='prouct-title'>
            <p className='product-title'>{product.name}</p>
          </Card.Title>

          <Card.Text className='ratings-div' as='div'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text className='card-price' as='h3'>
            £{product.price}
          </Card.Text>
          <ul className='tag-ul'>
            {product?.tags.map((item, i) => {
              return (
                <li className='tag-item' key={i}>
                  {item}
                </li>
              )
            })}
          </ul>
        </Link>
      </Card.Body>
    </div>
  )
}

export default Product
