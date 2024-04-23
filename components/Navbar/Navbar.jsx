import { StyledAside, StyledLink, StyledNavbar } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { navbarLinks } from "@/lib/Sections/navbarLinks";
import { useSelectedLayoutSegment } from 'next/navigation'
import { getSelectedLink } from "@/lib/utils/getSelectedLink";

const Navbar = () => {
    const selectedLink = getSelectedLink(); 
    const activeSegment = useSelectedLayoutSegment(); 

    console.log(activeSegment)
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
