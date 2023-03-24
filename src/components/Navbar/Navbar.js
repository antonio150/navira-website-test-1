import React, {useEffect, useState} from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon,
    NavMenu,NavItem, NavLinks,
   Select,
    
} from './Navbar.elements';
import {FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobile = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const {t, i18n } = useTranslation();

    function handleClick2(){
        // var val = document.getElementById("lang");
        // console.log(document.getElementById("lang").value);
        var language = document.getElementById("lang").value;
        i18n.changeLanguage(language);
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav>
                
                <NavbarContainer>
                    <NavLogo 
                    to="/" 
                    onClick={closeMobile}                   
                    >
                       
                        Navira
                    </NavLogo>
                    <MobileIcon 
                    onClick={handleClick}
                    >
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>

            {/* <LangCont> */}

                <Select id="lang" onChange={()=>handleClick2()} >
                    <option value="en" >
                                  
                            English
                       
                    </option>
                    <option value="fr"  >
                       
                            Français
                       
                    </option>
                </Select>    
            
            {/* </LangCont>          */}

                
                
                    <NavMenu 
                    onClick={handleClick} 
                    click={click}>
                        <NavItem>
                            <NavLinks 
                            to='/'
                            >
                                {/* Home */}
                                {t('Home.1')}
                            </NavLinks>
                        </NavItem>
                  

                    
                        <NavItem >
                            <NavLinks 
                            to='/services'
                            >
                                {/* Services */}
                                {t('Services.1')}
                            </NavLinks>
                        </NavItem >
                   

                    
                        <NavItem >
                            <NavLinks 
                            to='/products'
                            >
                                {/* Products */}
                                {t('Product.1')}
                            </NavLinks>
                        </NavItem>

                        
                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
