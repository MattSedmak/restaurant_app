import { Bars, Nav, NavIcon, NavLink } from "./NavbarStyle"

interface IToggleSidebar {
    toggle: () => void;
}

const Navbar = (props: IToggleSidebar) => {
    return (
        <Nav>
            <NavLink to='/'>3Dudes</NavLink>
                <NavIcon onClick={props.toggle}>
                    <Bars />
                </NavIcon>
        </Nav>
    )
}

export default Navbar
