import Burger from './Burger'


import { StyledLogo } from './styles/Nav.styled'
import { StyledNavBar } from './styles/Nav.styled'

function Navbar({ open, setOpen }) {

    return (
        <StyledNavBar>

            <StyledLogo>crowdfund</StyledLogo>
            <Burger open={open} setOpen={setOpen} />

        </StyledNavBar>
    )
}

export default Navbar