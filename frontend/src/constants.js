// export const BASE_URL =
//   process.env.NODE_ENV === 'development'
//     ? 'http://localhost:5001'
//     : 'https://jungle-store-server.onrender.com'
export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5001'
    : 'https://jungle-store-production.up.railway.app'

// export const BASE_URL = 'http://localhost:5001'
// export const BASE_URL = 'https://jungle-store-server.onrender.com'

export const PRODUCTS_URL = '/api/products'

export const USERS_URL = '/api/users'
export const ORDERS_URL = '/api/orders'
export const PAYPAL_URL = '/api/config/paypal'
export const UPLOAD_URL = '/api/upload'
// --
