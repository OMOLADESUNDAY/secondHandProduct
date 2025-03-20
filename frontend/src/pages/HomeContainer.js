import React from 'react'
import Home from './Home'
import TrendingCategory from './TrendingCategory'
import FeaturedProduct from '../component/FeaturedProduct'
import Promo from '../component/Promo'
import Todaydeal from '../component/Todaydeal'
import Sponsors from '../component/Sponsors'
import Blog from '../component/Blog'
import Faq from '../component/Faq'
import WhatClientSay from '../component/WhatClientSay'

const HomeContainer = () => {
  return (
    <>
        <Home/>
        <TrendingCategory/>
        <FeaturedProduct/>
        <Promo/>
        <Todaydeal/>
        <Sponsors/>
        <Blog/>
        <Faq/>
        <WhatClientSay/>
    </>
  )
}

export default HomeContainer