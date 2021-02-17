import React, { Component } from 'react';

function Home() {
    return (
        <div id="home"> 
           <main>
            <h1>Welcome<br />to<br /><span>OPEN HACK</span></h1>
            <h2>Coming soon</h2>
            <div id="timer">
                <div id="day" class="time"></div>
                <div id="hour" class="time"></div>
                <div id="minute" class="time"></div>
                <div id="second" class="time"></div>
            </div>
        </main>   
        <div id="particles-js"></div>   
        <script type="text/javascript" src="../js/particles.js"></script>
        <script type="text/javascript" src="../js/app.js"></script>
        </div>
    );
}

export default Home;