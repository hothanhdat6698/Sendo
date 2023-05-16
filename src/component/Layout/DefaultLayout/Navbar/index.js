import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import Price from '../../../../pages/Price';
import Products from '../../../../pages/Products';
import Shop from '../../../../pages/Shop';
import Collection from '../../../../pages/Collection';
import Home from '../../../../pages/Home';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('navbar')}>
            <nav>
                <ul>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? cx('active') : '')} to="/">
                            Trang chủ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? cx('active') : '')} to="/" to="products">
                            Sản phẩm
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? cx('active') : '')} to="/" to="collection">
                            Bộ sưu tập
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? cx('active') : '')} to="/" to="price">
                            Giá tốt hôm nay
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? cx('active') : '')} to="/" to="shop">
                            Thông tin shop
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/price" element={<Price />} />
                <Route path="/products" element={<Products />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </div>
    );
}

export default Navbar;
