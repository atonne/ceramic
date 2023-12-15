import classNames from 'classnames';
import Button from '../Button/button';
import React, { useState, useRef, useEffect } from 'react';

const cx = classNames;
function ShotClock({ time, onData, statusHome, buttonStatusHome }) {
    const [timeLeft, setTimeLeft] = useState(time);
    const [status, setStatus] = useState(statusHome);
    const [buttonStatus, setButtonStatus] = useState(buttonStatusHome);
    const intervalRef = useRef(null);
    useEffect(() => {
        setTimeLeft(time);
    }, [time]);
    useEffect(() => {
        // setTimeLeft(time);
        setStatus(statusHome);
        setButtonStatus(buttonStatusHome);
        intervalRef.current = setInterval(() => {
            setTimeLeft((timeLeft) => timeLeft - 100);
        }, 100);

        if (status === 'stop') {
            clearTimeout(intervalRef.current);
        }

        if (timeLeft < 10) {
            onData('stop', 'Start');
            clearTimeout(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [status, time, onData, timeLeft, statusHome, buttonStatusHome]);
    const renderTime = () => {
        const seconds = Math.floor((timeLeft % 60000) / 1000)
            .toString()
            .padStart(2, '0');
        const displayMilliseconds = (timeLeft % 1000) / 100;

        if (timeLeft < 10000)
            return (
                <>
                    {seconds}
                    <span className={cx('text-3xl p-0 m-0')}>.{displayMilliseconds}</span>
                </>
            );
        else {
            return <>{seconds}</>;
        }
    };
    // const handleOnClick = () => {

    // };
    const handleRestart24 = () => {
        setTimeLeft(24000);
        setStatus('stop');
        setButtonStatus('Resume');
    };
    const handleRestart14 = () => {
        setTimeLeft(14000);
        setStatus('stop');
        setButtonStatus('Resume');
    };
    return (
        <div className={cx('flex flex-col ')}>
            <div className={cx('mt-2 flex w-full justify-center ')}>
                <div className={cx('flex w-1/3  flex-col justify-center items-end')}>
                    <h1 className={cx('text-xl')}>Shot</h1>
                    <h1 className={cx('text-xl')}>Clock</h1>
                </div>

                <div
                    className={cx(
                        'ml-4 mr-4 flex items-center justify-center text-5xl w-36 text-left border-4 bg-black rounded-lg font-number text-[#10FF00]',
                    )}
                >
                    {renderTime()}
                </div>

                <div className={cx('w-1/3 flex flex-col h-20 justify-around')}>
                    <Button
                        onClick={handleRestart24}
                        className={cx(' w-28 bg-black flex justify-center border border-[#10FF00] hover:bg-opacity-10')}
                    >
                        Restart 24s
                    </Button>
                    <Button
                        onClick={handleRestart14}
                        className={cx('w-28 bg-black flex justify-center border border-[#E5A736] hover:bg-opacity-10')}
                    >
                        Restart 14s
                    </Button>
                </div>
            </div>
            <div className={cx('mt-5  w-full flex justify-center')}>
                <Button
                    onClick={() => {
                        if (status === '') {
                            // setTrigger(false);

                            onData('stop', 'Resume');
                        } else {
                            setStatus('');
                            // setTrigger(false);
                            setButtonStatus('Pause');
                            onData('', 'Pause');
                        }
                    }}
                    className={cx('mr-5 flex justify-center  bg-black border w-[80px] h-8 hover:bg-opacity-20')}
                >
                    {buttonStatus}
                </Button>
            </div>
        </div>
    );
}

export default ShotClock;
