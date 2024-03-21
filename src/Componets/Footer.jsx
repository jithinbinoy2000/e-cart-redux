import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
   
    useEffect(()=>{
        
    })
  return (
    <div className='bg-body-tertiary text-light user-select-none mt-4'data-bs-theme="dark">
        <div className="container text-center">
            <div className="row w-100" style={{width:'100%',padding:"0px"}}>
                {/* description---------------------------------------------------------------------------------------------------------- */}
                <div className="col-lg-6  col-sm-12 text-justify">ECart
                <p className='text-start mt-2 para' >Crafted using React with React Bootstrap, this project aims to learn Redux thoroughly. Through research and hands-on experimentation, it explores Redux's state management concepts. Integration of Redux enhances scalability and empowers developers for complex state management challenges.</p>
                </div>
            {/* links-------------------------------------------------------------------------------------------------------------------- */}
                <div className="col-lg-2 col-sm-12">Links
                <ul className='text-start ms-3 mt-2 ' >
                   <Link to={"/"} className='link'> <li className='items'>Home</li></Link>
                    <Link to={"/cart"}className='link'><li className='items'>Cart</li></Link>
                    <Link to={"/wishlist"}className='link'><li className='items'>WishList</li></Link>
                </ul>
                </div>
            {/* contact------------------------------------------------------------------------------------------------------------------- */}
                <div className="col-lg-4">Contact
                <ul className='d-flex justify-content-evenly mt-2'> 
                    <li><a href='mailto:jithinbinoy2000@gmail.com' className='link'><i className="fa-regular fa-envelope fa-2x "></i> </a></li>
                    <li><a href={"https://github.com/jithinbinoy2000"} className='link'><i className="fa-brands fa-github fa-2x"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/jithin-binoy2001/' className='link'><i className="fa-brands fa-linkedin fa-2x"></i></a>
                    </li>
                    <li> <a href='https://vercel.com/jithinbinoy2000s-projects' className='link'><div className='triangle-up'></div></a></li>
                </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">Copyright &copy;2024 E-cart ; Build By JITHIN BINOY</div>
            </div>
        </div>
    </div>
  )
}

export default Footer