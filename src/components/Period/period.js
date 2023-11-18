import classNames from 'classnames';
const cx = classNames;
function Period() {
    return (
        <div className={cx('flex')}>
            <h1 className={cx('text-6xl font-quantico mt-10 mr-3 italic')}>PERIOD </h1>
            <h1 className={cx('text-8xl border-4 bg-black rounded-lg font-number text-[#10FF00]')}>4</h1>
        </div>
    );
}

export default Period;
