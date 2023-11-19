import classNames from 'classnames';

import React, { useState, useRef, useEffect } from 'react';
import Button from '../Button/button';
const cx = classNames;
function Clock({ time, onData, statusHome, buttonStatusHome }) {
    const [status, setStatus] = useState(statusHome);
    const [trigger, setTrigger] = useState();
    const [buttonStatus, setButtonStatus] = useState(buttonStatusHome);
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
        setStatus(statusHome);
        setButtonStatus(buttonStatusHome);
        intervalRef.current = setInterval(() => {
            setTimeLeft((timeLeft) => timeLeft - 100);
        }, 100);
        if (status === 'stop') {
            clearTimeout(intervalRef.current);
        }
        if (timeLeft < 10) clearTimeout(intervalRef.current);
        return () => clearInterval(intervalRef.current);
    }, [status, timeLeft, statusHome, buttonStatusHome]);

    const updateStateAndRerender = () => {
        if (buttonStatus === 'Start') setTrigger(false);
        else {
            setTimeLeft(time);
            onData('stop', 'Start');
        }
    };

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
        <div className={cx(' flex flex-col justify-around items-center pt-2')}>
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

            <div className={cx('flex items-center justify-between mt-5')}>
                <Button
                    onClick={() => {
                        if (status === '') {
                            // setButtonStatus('Resume');
                            setTrigger(false);
                            // setStatus('stop');
                            onData('stop', 'Resume');
                        } else {
                            // setStatus('');
                            setTrigger(false);
                            // setButtonStatus('Pause');
                            onData('', 'Pause');
                        }
                    }}
                    className={cx('w-32 h-10 bg-black border-4 flex justify-center items-center italic')}
                >
                    {buttonStatus}
                </Button>
                <Button
                    onClick={updateStateAndRerender}
                    className={cx('w-32 h-10 bg-black border-4 flex justify-center items-center italic')}
                >
                    Reset
                </Button>
            </div>
        </div>
    );
}

export default Clock;
