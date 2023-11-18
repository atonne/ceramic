import classNames from 'classnames';

const cx = classNames;
function Logo({ name, img }) {
    return (
        <div className={cx('pt-4 w-1/4 flex flex-col items-center justify-around ')}>
            <div className={cx('font-bold font-quantico text-3xl')}>{name}</div>
            <div className={cx('w-56 h-48 ')}>
                <img src={img} alt={img} />
            </div>
        </div>
    );
}

export default Logo;
