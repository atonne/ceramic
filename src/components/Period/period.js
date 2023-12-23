import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
const cx = classNames;
function Period() {
    const [period, setPeriod] = useState(1);
    const handleOnChangePeriod = (e) => {
        let data = e.target.value;
        data = data.slice(0, 1);

        // Loại bỏ các ký tự không phải số
        data = data.replace(/[^0-9]/g, '');

        setPeriod(data);
    };
    return (
        <div className={cx('flex')}>
            <h1 className={cx('text-6xl font-quantico mt-10 mr-3 italic')}>PERIOD </h1>
            <input
                onChange={handleOnChangePeriod}
                value={period}
                className={cx('text-8xl text-center w-20 border-4 bg-black rounded-lg font-number text-[#10FF00]')}
            ></input>
        </div>
    );
}

export default Period;
