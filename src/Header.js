import React from 'react'
import "./header.css";
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
function Header() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <nav className = "header">
        
        {/* {logo on the left -> } */}
        <Link to ="/">
        <img className = "header__logo" 
        src =  "http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
        alt = "amazon logo"/>
        </Link>
        
        {/* Search box */}
        <div className = "header__search">
          <input type = "text" className = "header__searchInput"/>
          <SearchIcon className = "header__searchIcon"/>
        </div>

        {/* 3 links */}
        <div className = "header__nav">
            {/* 1ST link */}
            <Link to = "/login" className = "header__link">
              <div className = "header__option">
                <span className = "header_optionLineOne" > Hello Kyle </span>
                <span className = "header_optionLineTwo"> sign in </span>
              </div> 
            </Link>
            {/* 2nd link */}
            <Link to = "/" className = "header__link">
              <div className = "header__option">
                <span className = "header_optionLineOne" > Returns </span>
                <span className = "header_optionLineTwo"> Orders </span>
              </div> 
            </Link>
            {/* 3rd lin */}
            <Link to = "/" className = "header__link">
              <div className = "header__option">
                <span className = "header_optionLineOne" > Your </span>
                <span className = "header_optionLineTwo"> Prime</span>
              </div> 
            </Link>
            {/* 4th */}
              <Link to = "/checkout" className = "header__link">
                <div className = "header__optionBasket">
                  {/* shopping bask icon */}
                  <ShoppingBasketIcon className = "shopping__baskIcon"/>
                  {/* Number of items in the basket */}
                  <span className = "header__optionLineTwo header__basketCount"> {basket?.length} </span>
                </div>
              </Link>
        </div>

        {/* Basket icon with numbers */}
        
    </nav>
  )
}
export default Header