import React, { Children } from "react";
import { slide as Menu } from 'react-burger-menu';


export default function BurgerMenu(props) {
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '30px',
      height: '25px',
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
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '0',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display:'block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
}

  return (
    <Menu styles={styles}>
      {props.hildren}
    </Menu>
  );
}