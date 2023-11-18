import classNames from 'classnames';
import Time from './Time';
import React, { useState, useRef, useEffect } from 'react';

import Button from '../Button/button';
const cx = classNames;
function Clock() {
    const [status, setStatus] = useState('stop');
    const [trigger, setTrigger] = useState();
    const [time, setTime] = useState(600000);
    const [buttonStatus, setButtonStatus] = useState('Start');

    const updateStateAndRerender = () => {
        if (buttonStatus === 'Start') setTrigger(false);
        else {
            setTime(600000);
            setButtonStatus('Start');
            setStatus('stop');
            setTrigger(true);
        }
    };
    return (
        <div className={cx(' flex flex-col justify-around items-center pt-2')}>
            <Time status={status} time={time} trigger={trigger} />
            <div className={cx('flex items-center justify-between mt-5')}>
                <Button
                    onClick={() => {
                        if (status === '') {
                            setButtonStatus('Resume');
                            setTrigger(false);
                            setStatus('stop');
                        } else {
                            setStatus('');
                            setTrigger(false);
                            setButtonStatus('Pause');
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
