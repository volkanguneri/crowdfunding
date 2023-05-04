import { StyledHeader } from './styles/Header.styled'
import Navbar from './Navbar'


export default function Header({ open, setOpen }) {

    return (
        <StyledHeader>
            <Navbar open={open} setOpen={setOpen} />
        </StyledHeader >
    )
}
