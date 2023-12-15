import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import Logo from '~/components/Logo';
import Clock from '~/components/Clock';
import Score from '~/components/Score';
import Period from '~/components/Period';
import ShotClock from '~/components/ShotClock';
import { tImage } from '~/image';
import Button from '~/components/Button';
import Modal from '~/components/Modal';

const cx = classNames;
function Home() {
    const [status, setStatus] = useState('stop');
    const [buttonStatus, setButtonStatus] = useState('Start');
    const [isActiveButton1, setIsActiveButton1] = useState(true);
    const [isActiveButton2, setIsActiveButton2] = useState(false);

    const activateButton1 = () => {
        setIsActiveButton1(true);
        setIsActiveButton2(false);
    };

    const activateButton2 = () => {
        setIsActiveButton1(false);
        setIsActiveButton2(true);
    };
    const [timeShotClock, setTimeShotClock] = useState(24000);
    const [matchTime, setMatchTime] = useState(600000);
    const [trigger, setTrigger] = useState(24000);
    const handleOnChangeStatus = (data, getButtonStatus, time) => {
        setStatus(data);
        setButtonStatus(getButtonStatus);
        if (!!time) setTimeShotClock(24000);
        // setKey((prevKey) => prevKey + 1);
    };
    const [minuteValue, setMinuteNumberValue] = useState(10);
    const [secondValue, setSecondNumberValue] = useState(40);
    const [miliSecondValue, setMiliSecondNumberValue] = useState(40);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputChangeMinutes = (e) => {
        let inputValue = e.target.value;

        // Chỉ giữ lại hai chữ số đầu tiên
        inputValue = inputValue.slice(0, 2);

        // Loại bỏ các ký tự không phải số
        inputValue = inputValue.replace(/[^0-9]/g, '');
        // Cập nhật giá trị của state
        setMinuteNumberValue(inputValue);
    };
    const handleInputChangeSeconds = (e) => {
        let inputValue = e.target.value;

        // Chỉ giữ lại hai chữ số đầu tiên
        inputValue = inputValue.slice(0, 2);

        // Loại bỏ các ký tự không phải số
        inputValue = inputValue.replace(/[^0-9]/g, '');

        // Cập nhật giá trị của state
        setSecondNumberValue(inputValue);
    };

    const handleInputChangeMiliSeconds = (e) => {
        let inputValue = e.target.value;

        // Chỉ giữ lại hai chữ số đầu tiên
        inputValue = inputValue.slice(0, 1);

        // Loại bỏ các ký tự không phải số
        inputValue = inputValue.replace(/[^0-9]/g, '');

        // Cập nhật giá trị của state
        setMiliSecondNumberValue(inputValue);
    };
    const handleOnClickApply = () => {
        if (isActiveButton1 === true) {
            setMatchTime(60000 * minuteValue + 1000 * secondValue + 100 * miliSecondValue);
        } else if (isActiveButton2 === true) {
            setTimeShotClock(1000 * secondValue + 100 * miliSecondValue);
            // setTimeShotClock((prev) => prev +);
        }
    };
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={cx('bg-[#313131]   text-white h-full flex flex-col')}>
            <div className={cx('flex h-1/3')}>
                <Button className={cx('absolute')} onClick={openModal}>
                    setttings
                </Button>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className="right-2/3 relative w-[923px] h-[606px] bg-[#303030]">
                        <div className="absolute w-[318px] top-[44px] left-[330px] [text-shadow:0px_4px_60px_#000000] [-webkit-text-stroke:1px_#000000] [font-family:'Quantico-BoldItalic',Helvetica] font-bold italic text-white text-[30px] tracking-[0] leading-[normal]">
                            CONFIGURATION
                        </div>
                        <div className="absolute w-[314px] h-[60px] top-[146px] left-[50px]">
                            <div
                                onClick={activateButton1}
                                className={
                                    isActiveButton1
                                        ? "absolute w-[251px] top-[12px] left-0 [font-family:'Quantico-Bold',Helvetica] font-bold text-[#E5A736] text-[20px] tracking-[0] leading-[normal]"
                                        : "absolute w-[251px] top-[12px] left-0 [font-family:'Quantico-Bold',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal]  cursor-pointer"
                                }
                            >
                                Quarter period :
                            </div>
                            <div className="w-[71px] h-[59px] top-0 left-[244px] border-[3px] border-solid absolute bg-black border-white" />

                            <input
                                onChange={handleInputChangeMinutes}
                                value={minuteValue}
                                className="absolute bg-transparent w-[56px] top-[8px] left-[250px] [text-shadow:0px_4px_60px_#ffffff] [font-family:'Digital_Numbers-Regular',Helvetica] font-normal text-white text-[30px] tracking-[0] leading-[normal]"
                            ></input>
                        </div>
                        <div className="absolute w-[84px] top-[154px] left-[453px] [font-family:'Quantico-Bold',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal]">
                            min(s)
                        </div>
                        <div className="absolute w-[127px] top-[241px] left-[453px] [font-family:'Quantico-Bold',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal]">
                            second(s)
                        </div>
                        <div
                            onClick={activateButton2}
                            // className={isActiveButton1 ? 'active' : 'inactive'}
                            className={
                                isActiveButton2
                                    ? "absolute w-[227px] top-[241px] left-[50px] [font-family:'Quantico-Bold',Helvetica] font-bold text-[#E5A736] text-[20px] tracking-[0] leading-[normal]"
                                    : "absolute w-[227px] top-[241px] left-[50px] [font-family:'Quantico-Bold',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal]  cursor-pointer"
                            }
                        >
                            Shot clock period :
                        </div>
                        <div className="absolute w-[205px] top-[328px] left-[453px] [font-family:'Quantico-Bold',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal]">
                            milisecond(s)
                        </div>
                        <Button
                            onClick={closeModal}
                            className="absolute w-[99px] h-[31px] top-[496px] left-[501px] bg-white rounded-[50px] border-[5px] border-solid border-black shadow-[0px_4px_60px_#000000]"
                        >
                            <div className="absolute flex justify-center w-[67px] top-[-2px] left-[11px] [font-family:'Quantico-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal]">
                                Cancel
                            </div>
                        </Button>
                        <Button
                            onClick={handleOnClickApply}
                            className="absolute   w-[99px] h-[31px] top-[496px] left-[621px] bg-black rounded-[50px] border-[5px] border-solid border-black shadow-[0px_4px_60px_#000000]"
                        >
                            <div className="absolute  w-[67px] top-[-2px] left-[11px] [font-family:'Quantico-Bold',Helvetica] font-bold text-white text-[20px] tracking-[0] leading-[normal]">
                                Apply
                            </div>
                        </Button>
                        <div className="absolute w-[71px] h-[60px] top-[230px] left-[294px]">
                            <div className="w-[71px] h-[59px] top-0 left-0 border-[3px] border-solid absolute bg-black border-white" />
                            <input
                                onChange={handleInputChangeSeconds}
                                value={secondValue}
                                maxLength="2"
                                className="top-[8px] bg-transparent absolute w-[56px] left-[6px] [text-shadow:0px_4px_60px_#ffffff] [font-family:'Digital_Numbers-Regular',Helvetica] font-normal text-white text-[30px] tracking-[0] leading-[normal]"
                            ></input>
                        </div>
                        <div className="absolute w-[71px] h-[66px] top-[316px] left-[294px]">
                            <div className="w-[71px] h-[59px] top-0 left-0 border-[3px] border-solid absolute bg-black border-white" />
                            <input
                                onChange={handleInputChangeMiliSeconds}
                                value={miliSecondValue}
                                className="top-[14px] flex justify-center bg-transparent absolute w-[56px] left-[6px] [text-shadow:0px_4px_60px_#ffffff] [font-family:'Digital_Numbers-Regular',Helvetica] font-normal text-white text-[30px] tracking-[0] leading-[normal]"
                            ></input>
                        </div>
                    </div>
                </Modal>
                <Logo name="Ceramic" img={tImage.CeramicLogo} />
                <div className={cx('w-2/4 ')}>
                    <Clock
                        time={matchTime}
                        triggerHome={trigger}
                        buttonStatusHome={buttonStatus}
                        statusHome={status}
                        onData={handleOnChangeStatus}
                    />
                </div>
                <Logo name="IUBC" img={tImage.IuLogo} />
            </div>
            <div className={cx('flex h-1/3')}>
                <Score />
                <div className={cx('w-2/4 flex flex-col items-center')}>
                    <Period />
                    <ShotClock
                        time={timeShotClock}
                        buttonStatusHome={buttonStatus}
                        statusHome={status}
                        onData={handleOnChangeStatus}
                    />
                </div>
                <Score />
            </div>
            <div className={cx(' h-1/3 ')}>
                <div className={cx('flex justify-between pt-10 px-[120px]')}>
                    <div className={cx(' text-6xl')}>FOUL</div>
                    <div className={cx('text-6xl')}>TIME OUTS</div>
                    <div className={cx('text-6xl')}>FOUL</div>
                </div>
                <div className={cx('flex w-full justify-around')}>
                    <input
                        value={1}
                        className={cx(
                            'w-28 flex items-center text-8xl text-left justify-center border-4 bg-black rounded-lg font-number text-[#FF0000]',
                        )}
                    ></input>
                    <input
                        value={1}
                        className={cx(
                            'w-28 flex items-center text-8xl text-left justify-center border-4 bg-black rounded-lg font-number text-[#FF0000]',
                        )}
                    ></input>{' '}
                    <input
                        value={1}
                        className={cx(
                            'w-28 flex items-center text-8xl text-left justify-center border-4 bg-black rounded-lg font-number text-[#FF0000]',
                        )}
                    ></input>{' '}
                    <input
                        value={1}
                        className={cx(
                            'w-28 flex items-center text-8xl text-left justify-center border-4 bg-black rounded-lg font-number text-[#FF0000]',
                        )}
                    ></input>
                </div>
            </div>
        </div>
    );
}

export default Home;
