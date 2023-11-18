import classNames from 'classnames';
import React, { useState, useRef, useEffect } from 'react';

const cx = classNames;

function Time({ status, time, trigger }) {
    const [timeLeft, setTimeLeft] = useState(time);
    const [triggerRerender, setTriggerRerender] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        setTimeLeft(time);
        if (trigger !== triggerRerender) {
            setTriggerRerender(false);
        }
    }, [trigger, time, triggerRerender]);
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimeLeft((timeLeft) => timeLeft - 100);
        }, 100);
        if (timeLeft < 10) clearTimeout(intervalRef.current);
        if (status === 'stop') clearTimeout(intervalRef.current);
        return () => clearInterval(intervalRef.current);
    }, [status, timeLeft]);

    // const minutesLeft = Math.floor(timeLeft / 60)
    // .toString()
    // .padStart(2, '0');
    // const secondsLeft = (timeLeft % 60).toString().padStart(2, '0');

    // const milliseconds = timeLeft % 1000;

    // String(timeLeft % 1000).padStart(2, '0');
    //timeLeft < 10 ? '00' : timeLeft < 100 ? '0' + timeLeft.toString()[0] :
    // String(timeLeft % 1000).slice(0, 2);

    const renderTime = () => {
        // const minutes = Math.floor(timeLeft / 60000);
        // const seconds = Math.floor((timeLeft % 60000) / 1000);
        const minutes = Math.floor(timeLeft / 60000)
            .toString()
            .padStart(2, '0');
        const seconds = Math.floor((timeLeft % 60000) / 1000)
            .toString()
            .padStart(2, '0');
        const displayMilliseconds = (timeLeft % 1000) / 100;

        if (timeLeft < 10000)
            return (
                <>
                    {minutes}:{seconds}
                    <span className={cx('text-5xl p-0 m-0')}>.{displayMilliseconds}</span>
                </>
            );
        else {
            return (
                <>
                    {minutes}:{seconds}
                </>
            );
        }
    };
    return (
        <div
            className={cx(
                'w-[530px] h-36 bg-black border-4 flex justify-center items-center rounded-3xl drop-shadow-ceramic',
            )}
        >
            <span className={cx('text-8xl font-number')}>
                {/* {minutesLeft}:{secondsLeft} */}
                {/* {minutes}:{seconds}:{displayMilliseconds} */}
                {renderTime()}
            </span>
        </div>
    );
}

export default Time;
