import React from "react";
import Wave from 'react-wavify'

function WaveSvg(){
    
    return (
        <div style={{transform: "rotate(180deg)",position:"relative", top:"-4px"}}>
            <Wave fill='#fcc300'
                paused={false}
                options={{
                height: 30,
                amplitude: 30,
                speed: 0.15,
                points: 5
            }}/>
        </div>
    );
}

export default WaveSvg;