import React, { useState } from 'react';
import DrawerComponent from './Drawer';
import ToolbarComponent from './Toolbar';

const NavbarUser = () => {
    let [state, setState] = useState({ left: false })
    const openDrawer = () => setState({left: !state.left})
    const toggleDrawer = () => setState({left:!state.left})
    return (
        <div>
            <ToolbarComponent openDrawerHandler={openDrawer}>
            <h1>This is navbar user</h1>
            </ToolbarComponent>
            <DrawerComponent left={state.left} toggleDrawerHandler={toggleDrawer}>
            </DrawerComponent>
        </div>
    );
}

export default NavbarUser;
