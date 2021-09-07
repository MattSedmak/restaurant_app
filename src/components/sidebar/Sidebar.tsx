import { useState } from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink} from './SidebarStyle';
import './Sidebar.css';

interface IOnShowSidebar {
    sideBar: boolean;
    toggle: () => void;
}

const Sidebar = (props: IOnShowSidebar) => {

    const showHide = props.sideBar
    ? 'remove-bar'
    : 'show-bar'
    
    
    return (
        <SidebarContainer onClick={props.toggle} className={showHide}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/contact">Kontakt</SidebarLink>
                <SidebarLink to="/booking">Boka bord</SidebarLink>
                <SidebarLink to="/admin">Admin</SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar
