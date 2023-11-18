import classNames from 'classnames';
import Logo from '~/components/Logo';
import Clock from '~/components/Clock';
import Score from '~/components/Score';
import Period from '~/components/Period';
import ShotClock from '~/components/ShotClock';
import { tImage } from '~/image';

const cx = classNames;
function Home() {
    return (
        <div className={cx('bg-[#313131]   text-white h-full flex flex-col')}>
            <div className={cx('flex h-1/3')}>
                <Logo name="Ceramic" img={tImage.CeramicLogo} />
                <div className={cx('w-2/4 ')}>
                    <Clock />
                </div>
                <Logo name="IUBC" img={tImage.IuLogo} />
            </div>
            <div className={cx('flex h-1/3')}>
                <Score />
                <div className={cx('w-2/4 flex flex-col items-center')}>
                    <Period />
                    <ShotClock />
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
                    <div
                        className={cx(
                            'w-28 flex items-center text-8xl text-left justify-center border-4 bg-black rounded-lg font-number text-[#FF0000]',
                        )}
                    >
                        4
                    </div>
                    <div
                        className={cx(
                            'w-28 flex items-center text-8xl text-left justify-center border-4 bg-black rounded-lg font-number text-[#FF0000]',
                        )}
                    >
                        4
                    </div>{' '}
                    <div
                        className={cx(
                            'w-28 flex items-center text-8xl text-left justify-center border-4 bg-black rounded-lg font-number text-[#FF0000]',
                        )}
                    >
                        4
                    </div>{' '}
                    <div
                        className={cx(
                            'w-28 flex items-center text-8xl text-left justify-center border-4 bg-black rounded-lg font-number text-[#FF0000]',
                        )}
                    >
                        4
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
