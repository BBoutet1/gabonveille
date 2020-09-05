import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./assets/style.css"

class PortfolioContainer extends Component {
    state = {
        currentPage: "Home",
        backgroundClass: "HomeBackground"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
        this.setBakground(page)
    };

    //Conditional backgound image (only the home page)
    setBakground = page => {
        if (page !== "Home") {
            this.setState({
                backgroundClass: ""
            })
        } else {
            this.setState({
                backgroundClass: "HomeBackground"
            })
        }
    };



    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <Home/ > ;
        } else if (this.state.currentPage === "Contact") {
            return <Contact/ > ;
        } 
    };



    render() {
        return (
            <div className={"wrapper " + this.state.backgroundClass} >
            <
                NavTabs currentPage = { this.state.currentPage }
                handlePageChange = { this.handlePageChange }
            /> {this.renderPage()}
        </div >
        );
    }
}

export default PortfolioContainer;