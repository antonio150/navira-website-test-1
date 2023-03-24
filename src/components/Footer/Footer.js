import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    // FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    // SocialIcon,
    // WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './Footer.elements';



const Footer = () => {
    return (
        <FooterContainer >
            

            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        {/* <FooterLink to='/sign-up'>How it work</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink> */}
                        
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        {/* <FooterLink to='/sign-up'>How it work</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink> */}
                        
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        {/* <FooterLink to='/sign-up'>How it work</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink> */}
                        
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        {/* <FooterLink to='/sign-up'>How it work</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink> */}
                        
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        Navira
                    </SocialLogo>
                 
                    <SocialIcons>
                        <SocialIconLink href={'//www.facebook.com/antonio.navira.9'} rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href='/' target="_blank" aria-label="Intagram">
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href={'//www.youtube.com/'} target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                            <FaYoutube />

                        </SocialIconLink>

                        <SocialIconLink href='/services' target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>

                        <SocialIconLink href='/' target="_blank" aria-label="LinkedIn">
                            <FaLinkedin/>
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
        
    )
}

export default Footer
