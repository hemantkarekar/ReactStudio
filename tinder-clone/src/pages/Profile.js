import React from "react";
import Sidebar from '../components/Sidebar';


import '../App.css';

export default function Profile() {
    let { id } = 12;
    return (
        <div className="Home">
            <Sidebar/>
            {/* Tinder Cards */ } 
            {/* Swipe Buttons Cards */ } 
            {/* Chat Screen */ } 
            {/* Individual Chat Screen */ } 
            <h1>Let's Build React Profile!</h1>
        </div>
    );
}

export const ProfileID = function Profile(props) {
    let { id } = 12;

    return (
        <div className="Home">
            <Sidebar/>
            {/* Tinder Cards */ } 
            {/* Swipe Buttons Cards */ } 
            {/* Chat Screen */ } 
            {/* Individual Chat Screen */ } 
            <h1>Let's Build React Profile for Child ID: {props.match.params.id}!</h1>
        </div>
    );
}