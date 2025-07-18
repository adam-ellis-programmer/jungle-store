import React from 'react'
import { Helmet } from 'react-helmet-async'

const Meta = ({
  title = 'welcome to the jungle store',
  description = 'We sell the best products for cheap',
  keywords = 'electronics, buy electronics, cheap electronics',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  )
}

export default Meta
