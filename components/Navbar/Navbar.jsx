"use client"
import { StyledAside, StyledButton, StyledLink, StyledNavbar } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { navbarLinks } from "@/lib/Sections/navbarLinks";
import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
import { signOut } from "next-auth/react";



const Navbar = () => {

    const activeSegment = useSelectedLayoutSegment(); 
    const router = useRouter()
    const logout = async () => {
        await router.push('/');
        await signOut()
    }
    return (
        <StyledAside>
            <StyledLink href="/">
                <FontAwesomeIcon icon={faShop} />
                Ecommerce Admin
            </StyledLink>

            <StyledNavbar>
                {navbarLinks.map((link, index) => (
                    <StyledLink
                        href={link.href}
                        key={link._id}
                        
                        selected={activeSegment === link.activeSegment}
                    >
                        <FontAwesomeIcon icon={link.icon} />
                        {link.name}
                    </StyledLink>
                ))}
                <StyledButton onClick={logout}>
                        <FontAwesomeIcon icon={faSignOut} />
                        SignOut
                    </StyledButton>
            </StyledNavbar>
        </StyledAside>
    );
};

export default Navbar;
