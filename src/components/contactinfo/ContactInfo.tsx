import { useState } from "react"
import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar"
import { 
    ContactContainer, 
    ContactContent, 
    ContactDiv, 
    ContactIconM, 
    ContactIconP, 
    ContactItems, 
    ContactText,
    ContactUs, 
} from "./ContactInfoStyle"

const ContactInfo = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleSideBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <ContactContainer>
            <Navbar toggle={toggleSideBar}/>
            <Sidebar sideBar={isOpen} toggle={toggleSideBar}/>
            <ContactContent>
                <ContactItems>
                        <ContactText>
                            För frågor, önskemål och större bokningar,
                            vänligen kontakta oss:
                        </ContactText>
                        <ContactDiv>
                            <ContactIconP></ContactIconP>
                            <ContactUs>070 - 123 456 7</ContactUs>
                        </ContactDiv>
                        <ContactDiv>
                            <ContactIconM></ContactIconM>
                            <ContactUs>info@3dudes.com</ContactUs>
                        </ContactDiv>
                </ContactItems>
            </ContactContent>
        </ContactContainer>
    )
}

export default ContactInfo
