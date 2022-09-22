import { useState, useCallback, useEffect } from "react";
import React from "react";

interface DelayButtonProps {
    second: number;
    buttonText: string;
    
}
const DelayButton = ({second, buttonText}:DelayButtonProps) => {  
    const [timer, setTimer] = useState(0);    
    const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);

    useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
    }, [timer, timeOutCallback]);

    console.log(timer);

    const resetTimer = function () {
    if (!timer) {
        setTimer(second);
    }
    };

    return (
    <button onClick={resetTimer} disabled={timer !== 0}>{buttonText}{ (timer !== 0) && timer}</button>    
    )
}

export { DelayButton};