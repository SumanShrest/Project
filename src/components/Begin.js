/* 
* Team 7 
* Project Manager: Suman Shrestha
* Developer: Amrita Khadgi
* Designer: Christopher Fukuhara & Robert Gallardo
* November 22, 2022
*/
import React from 'react';

// This is the intial page that the user will see. If the user selects the start button
// then the questions will begin.
const Begin  = ({ onStartHandler }) => {
    return(
        <main>
            <div class="centerContent">
                <h1 class="startH1">Are you ready to start?</h1>
                <button onClick={onStartHandler}>Start</button>
            </div>
        </main>
    );
}

export default Begin;