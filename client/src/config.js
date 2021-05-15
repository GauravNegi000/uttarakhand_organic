/**
 * Application wide configuration
 */
const config = {
  baseURI: process.env.REACT_APP_API_BASE_URL,
  payPal: process.env.REACT_APP_API_PAYPAL,
  esewaImageUrl: process.env.REACT_APP_ESEWA_IMAGE_URL,
  esewaPaymentUrl: process.env.REACT_APP_ESEWA_PAYMENT_URL,
  apiEndPoint: {
    product: {
      fetchProducts: '/product',
      fetchProduct: '/product/:id',
      fetchProductReviews: '/product/:id/reviews',
      createReview: '/product/:id/reviews',
      deleteProduct: '/product/:id',
      createProduct: '/product',
      updateProduct: '/product/:id',
    },
    user: {
      login: '/auth/login',
      create: '/auth/register',
      fetchUsers: '/user',
      verifyEmail: '/auth/verifyEmail',
      deleteUser: '/user/:id',
      updateUser: '/user/:id',
      fetchUser: '/user/:id',
      forgotPassword: '/auth/forgotPassword',
      resetPassword: '/auth/resetPassword',
    },
    order: {
      createOrder: '/order',
      order: '/order/:id',
      pay: '/order/:id/pay',
      deliverOrder: '/order/:id/deliver',
      userOrder: '/order/authOrders',
      orders: '/order',
    },
  },
};

export default config;
