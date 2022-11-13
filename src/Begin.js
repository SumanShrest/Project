import React from 'react';

const Begin  = ({ onBeginHandler }) => {
    return(
        <main>
            <div className="centerContent">
                <h1 class="startH1">Are you ready to start?</h1>
                <button class="startBtn" onClick={onBeginHandler}>Start</button>
            </div>
        </main>
    );
}

export default Begin;