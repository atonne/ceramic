import PropTypes from 'prop-types';

function DefaultLayout({ children }) {
    return (
        <>
            <div className="w-full h-screen overflow-scroll flex ">
                <div className="w-full h-screen overflow-hidden">{children}</div>
            </div>
        </>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node,
};

export default DefaultLayout;
