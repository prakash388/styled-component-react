import React from 'react'
import {
    FaFacebook, FaInstagram, FaLinkedin,
    FaTwitter, FaYoutube
} from 'react-icons/fa';
import { Button } from '../../globalStyles'
import {
    FooterContainer, FooterSubscription,
    FooterSubHeading, FooterSubText,
    Form, FormInput,
    FooterLinksContainer, FooterLinksWrapper,
    FooterLinksItems, FooterLinkTitle, FooterLink,
    SocialMedia, SocialIcon, SocialIcons, SocialLogo, SocialMediaWrap,
    SocialIconLink, WebsiteRights
} from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email"></FormInput>
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terma of Services</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terma of Services</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terma of Services</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terma of Services</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        Weeve Network
                    </SocialLogo>
                    <WebsiteRights>Weeve Network ;&copy 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instgram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
}

export default Footer
