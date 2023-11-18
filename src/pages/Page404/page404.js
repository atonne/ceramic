import classNames from 'classnames';
const cx = classNames;

function Page404() {
    return (
        <div className={cx('w-screen h-screen flex justify-center flex-col items-center')}>
            <h1>Oops..! 404 Trang bạn tìm kiếm không tìm thấy</h1>
            {/* <Button to={config.routeConfig.home} className="bg-lcn-blue-4 text-white">
                Trở về trang chủ
            </Button> */}
        </div>
    );
}

export default Page404;
