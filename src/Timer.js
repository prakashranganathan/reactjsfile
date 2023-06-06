import React, { useEffect, useState } from "react";
import "../src/css/timers.css"
function Timer() {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false)
    const [count, setCount] = useState(0)
    const [isClear, setIsClear] = useState(false)


    useEffect(() => {

        if (isActive) {
            setTimeout(() => {
                setSeconds(seconds + 1)
                if (seconds >= 60) {
                    setSeconds(0)
                    setMinutes(minutes + 1)
                }
                if (minutes >= 60) {
                    setMinutes(0)
                    setHours(hours + 1)
                    if (hours > 12) {
                        setHours(0)
                    }
                }
            }, 1000)
        }
        if (isActive && count > 1) {
            setIsActive(false)
            setCount(0)
            console.log("count", count)
        }

        if (isClear) {
            setSeconds(0);
            setMinutes(0);
            setHours(0);
        }

    }, [seconds, isActive, count, isClear])
    return (
        <>
            <div className="mainblock">

                <button onClick={() => { setIsClear(false); setIsActive(true); setCount(count + 1) }}>start</button>
                <button onClick={() => { setIsClear(true); setIsActive(false); setCount(0) }}>clear</button>
                <br />
                <div className="DesignClock">
                    <p>{hours}:{minutes}:{seconds}</p>
                </div>
            </div>
        </>
    )
}
export default Timer;