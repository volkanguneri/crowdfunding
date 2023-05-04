import NavContent from './NavContent'
import { StyledBurgerMenu } from "./styles/Nav.styled"


function Burger({ open, setOpen }) {


    return (
        <>
            <StyledBurgerMenu open={open} onClick={() => setOpen(!open)} >
                <div></div>
                <div></div>
                <div></div>
            </StyledBurgerMenu>

            <NavContent open={open} />

        </>


    )
}

export default Burger
