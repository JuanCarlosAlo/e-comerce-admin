import { StyledAside, StyledLink, StyledNavbar } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { navbarLinks } from "@/lib/Sections/navbarLinks";
import { useSelectedLayoutSegment } from 'next/navigation'


const Navbar = () => {

    const activeSegment = useSelectedLayoutSegment(); 
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
            </StyledNavbar>
        </StyledAside>
    );
};

export default Navbar;
