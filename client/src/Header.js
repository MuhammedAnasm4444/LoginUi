import React from 'react'
import { FaSearch } from 'react-icons/fa';
function Header() {
    return (
        <div className="container">
            <div className="row">
                <div className="mx-auto row">
                    <div className="">
                    <h1 className="title">Fanconvo</h1>
                    <p className="text-white">A masterships for conversation, mentorships and performances</p>
                   <div className="" style={{display:"flex"}}>
                    <h5 className="text-white ml-3">Search New Talent</h5>
                    {/* <input className="search-input col-md-7"/> */}
                    <div className="searchInputWrapper ml-3">
    <input className="searchInput " type="text" placeholder='focus here to search'/>
  
    <i className="searchInputIcon fa fa-search"></i>
    <FaSearch className="searchInputIcon"/>
    
  </div>
                    </div>
                    </div>
                    <div className="row ml-5">
                    <p className="text-white ml-2">Sign up</p>
                    <p className="text-white ml-2">Login</p>
                    </div>
                    
                </div>
            
            </div>
           
            
        </div>
    )
}

export default Header
