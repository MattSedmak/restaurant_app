import { useState } from "react"
import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar"
import { HeroContainer, HeroContent, HeroItems, HeroTitle, HeroText, NavLink } from "./HeroStyle"

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSideBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggleSideBar}/>
            <Sidebar sideBar={isOpen} toggle={toggleSideBar}/>
            <HeroContent>
                <HeroItems>
                    <HeroTitle>Eat. Drink. Dream.</HeroTitle>
                    <HeroText>En oförglömlig upplevelse</HeroText>
                    <NavLink to="/booking">Boka bord</NavLink>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
