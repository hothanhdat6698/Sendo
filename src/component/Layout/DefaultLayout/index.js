import classNames from 'classNames/bind';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Navbar from './Navbar';
import Category from './Category';
import styles from './DefaultLayout.module.scss';
import Footer from './Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <Content />
                <Navbar />
                <Category />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
