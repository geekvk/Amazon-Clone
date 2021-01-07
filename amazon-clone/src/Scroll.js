import React, { useState } from 'react'

function Scroll() {
    const [show, setShow] = useState(showBelow? false : true);

    const handleScroll = () => {
        if(window.pageYOffset > showBelow){
            if(!show) setShow(true);

        } else {
            if(show) setShow(false);
        }
    }
    const gotoTop = () => {
        window[`scrollTo`]({ top:0, behavior: `smooth`});
    }
    return (
        <div className="scroll">
            <button className="scroll__up" onClick={gotoTop} >
                    Back to Top 
            </button>
            
        </div>
    )
}

export default Scroll
