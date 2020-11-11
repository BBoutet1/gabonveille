import React from "react";
import { slide as Menu } from 'react-burger-menu';

// BurgerMenu and Navbar components share same css file below
import "../Navbar/style.css"


export default function BurgerMenu(props) {
    var styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: 'calc(0.8vw + 23px)',
            height: 'calc(0.8vw + 18px)',
            left: 'calc(4vw - 5px)',
            top: '96px'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%',
            width: 'calc(16vw + 94px)',
            minWidth: '160px'
        },
        bmMenu: {
            background: '#373a47',
            padding: '0',
            marginTop: '1px'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmItem: {
            display: 'block',
            outline: 'none'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }

  return (
    <Menu styles={styles}>
      {props.children}
    </Menu>);
    }