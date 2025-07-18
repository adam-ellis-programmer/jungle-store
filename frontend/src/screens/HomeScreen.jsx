import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import { Link } from 'react-router-dom'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { useEffect } from 'react'

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams()
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  })
  useEffect(() => {
    window.scrollTo({ top: 0 })
    return () => {}
  }, [data])

  return (
    <>
      {!keyword ? (
        <>
          <ProductCarousel />
          <section className='featured-grid-section'>
            <p className='featured-p'>featured products</p>
            <div className='featured-grid'>
              {data?.products &&
                [...data?.products]
                  .slice(-3) // Takes last 3 items
                  .reverse()
                  .map((item, i) => {
                    return (
                      <div key={i} className='home-featured-card'>
                        <img className='featured-img' src={item.image} alt='' />
                        <p className='featured-card-p'>
                          <span className='featued-span' >{item?.name}</span>
                        </p>
                      </div>
                    )
                  })}
            </div>
          </section>
        </>
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1 className='home-h1'>our products</h1>
          <div className='paginate-custom-container'>
            <Paginate
              pages={data.pages}
              page={data.page}
              keyword={keyword ? keyword : ''}
            />
          </div>
          <Row className='g-2.5'>
            {/* Controls gap for all breakpoints */}
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <div className='paginate-custom-container'>
            <Paginate
              pages={data.pages}
              page={data.page}
              keyword={keyword ? keyword : ''}
            />
          </div>
        </>
      )}
    </>
  )
}

export default HomeScreen
