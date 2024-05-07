import React, { useCallback, useEffect, useRef, useState } from 'react';
import ProcessMobile from './ProcessMobile';

function useInterval(callback: any, delay: number) {
    const savedCallback = useRef<any>();
    const intervalRef = useRef<any>(null);

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current!();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            intervalRef.current = id;
            return () => clearInterval(id);
        }
    }, [delay]);

    const stop = useCallback(() => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }
    }, []);

    return {
        stop
    };
}

const ProcessMobileContainer = () => {
    const [step, setStep] = useState(0);
    const [duration, setDuration] = useState(5000);
    const [flagClicked, setFlagClicked] = useState(false);
    
    let { stop } = useInterval(() => {
        setFlagClicked(false);
        setDuration(5000);
        if (step === 7) {
            stop();
        } else {
            setStep(step + 1);
        }
    }, 5000);

    const handleSelectedStep = (value: number) => {
        setStep(value - 1);
        setDuration(600);
        setFlagClicked(true);
    };

    return (
        <>
            <ProcessMobile
                completedSteps={step}
                totalSteps={7}
                startColor='#16A816'
                diameter={400}
                animationDuration={duration}
                circleWidth={1}
                circleColor='#B8DDFF'
                flagClicked={flagClicked}
                onSelectedStep={handleSelectedStep}
            />
        </>
    );
};

export default ProcessMobileContainer;