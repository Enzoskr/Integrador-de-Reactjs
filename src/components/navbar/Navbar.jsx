import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


import LogoBranding from '../../assets/Logo.png'


import {
    CartNavStyled,
  
   LinksContainerStyled,
   NavbarContainerStyled,
   SpanStyled,
   UserContainerStyled,
   UserNavStyled,
  
   
   
   
   
  } from './NavbarStyles'

  
  import ModalCart from './Cart/ModalCart'
  import CartIcon from './CartIcon/CartIcon';

import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuHidden } from '../../redux/user/userSlice';
import { FaUserAlt } from 'react-icons/fa';
import ModalUser from './user/ModalUser';


 function Navbar() {
  const currentUser = useSelector(state => state.user.currentUser)
  
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  return (
    <NavbarContainerStyled>
      <ModalCart/>
      <ModalUser/>
      
      
      
      <Link to= '/' >
        <img src={LogoBranding} alt="Logo-marca" />
      </Link>
    
      <LinksContainerStyled>
       <UserNavStyled>
        <UserContainerStyled onClick={() => 
        currentUser 
        ? dispatch(toggleMenuHidden())
        : navigate("/login")
      }>
          <SpanStyled>
            {
              currentUser ? `${currentUser.nombre}`: "Iniciar Sesión"
            }
          </SpanStyled>
          <FaUserAlt />
        </UserContainerStyled>
      </UserNavStyled>


      
      <CartNavStyled>
        <CartIcon />
      </CartNavStyled>
      </LinksContainerStyled>
      
    </NavbarContainerStyled>
    

  );
}

export default Navbar;