import classNames from 'classnames';
const cx = classNames;
function Score() {
    return (
        <div className={cx('w-1/4 flex justify-center pt-10')}>
            <div
                className={cx(
                    'w-80 h-60 bg-black border-4 rounded-lg flex justify-center items-center font-number text-[#E5A736] text-9xl',
                )}
            >
                999
            </div>
        </div>
    );
}

export default Score;
