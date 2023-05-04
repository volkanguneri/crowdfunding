import ReactDom from 'react-dom'
import { StyledNavContent } from './styles/Nav.styled'


function NavContent({ open }) {
    return ReactDom.createPortal(

        <StyledNavContent open={open}>
            <li><a href="#">About</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Get Started</a></li>
        </StyledNavContent >,
        document.getElementById('portal')

    )
}

export default NavContent

