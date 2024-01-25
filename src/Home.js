import React from 'react'
import "./home.css"
import Product from "./Product"

function Home() {
  return (
    <div className = "home">
       
    <img className = "home__image" src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt = "amazon"/>

    {/* product id, title, price, rating, image  */}
    {/* product */}
   <div className = "home__row">
    <Product id = {3123123} 
      title = {"Fiv nigts at freedy"} 
      price = {5} 
      rating = {5}
      image = "https://m.media-amazon.com/images/I/81pAbvgdG-L._AC_UL320_.jpg"
      />
      <Product id = {32163} 
      title = {"Headphones"} 
      price = {199} 
      rating = {3}
      image = "https://m.media-amazon.com/images/I/61GiuI-ebWL._AC_SY145_.jpg"
      />
   </div>
   <div className = "home__row">
   <Product id = {343783} 
      title = {"Ring"} 
      price = {200} 
      rating = {4}
      image = "https://m.media-amazon.com/images/I/41iN+zo-GPS._AC_SY145_.jpg"
      />
      <Product id = {452233} 
      title = {"Grill"} 
      price = {101} 
      rating = {2}
      image = "https://m.media-amazon.com/images/I/81ZsQVXktYL._AC_SY145_.jpg"
      />
      <Product id = {556223} 
      title = {"Tablets"} 
      price = {321} 
      rating = {1}
      image = "https://m.media-amazon.com/images/I/51z3nBXyXpL._AC_UF226,226_FMjpg_.jpg"
      />
      
   </div>
    </div>
  )
}

export default Home