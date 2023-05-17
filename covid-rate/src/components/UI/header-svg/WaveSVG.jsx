import React from "react";
import Wave from 'react-wavify'

function WaveSvg(){
    
    return (
        <div className="relative rotate-180 -top-2">
            <Wave 
                fill='#fcc300'
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