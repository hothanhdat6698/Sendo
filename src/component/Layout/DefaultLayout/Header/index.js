import classNames from 'classNames/bind';
import styles from './Header.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [showResult, setShowResult] = useState(false);
    const [downLoadApp, setDownLoadApp] = useState(false);
    const [customers, setCustomers] = useState(false);
    const [selectInput, setSelectInput] = useState('Sendo');
    const [showSelect, setShowSelect] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = (value) => {
        setShowSelect(false);
        setSelectInput(value);
    };
    return (
        <div>
            <header className={cx('wrapper')}>
                <div className={cx('text')}>
                    <p className={cx('app')} onClick={() => setDownLoadApp(!downLoadApp)}>
                        Tải ứng dụng
                    </p>
                    {downLoadApp && (
                        <div className={cx('code-qr')}>
                            <img src="https://media3.scdn.vn/img2/2018/5_23/R842FO.png" alt="" />
                            <p>Quét để tải ứng dụng</p>
                        </div>
                    )}
                    <p className={cx('customer')} onClick={() => setCustomers(!customers)}>
                        Chăm sóc khách hàng
                    </p>
                    {customers && (
                        <div className={cx('customer-result')}>
                            <p>Trung tâm hỗ trợ</p>
                            <p>Trả hàng hoàn tiền</p>
                        </div>
                    )}
                    <p className={cx('order check')}>Kiểm tra đơn hàng</p>
                </div>
            </header>
            <header className={cx('wrapper-1')}>
                <div className={cx('content')}>
                    <h2 className={cx('logo')}>Sendo</h2>
                    <div onClick={() => setShowMenu(!showMenu)} className={cx('icon')}>
                        <svg
                            fill="#f0f0f0"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#f0f0f0"
                            width="24px"
                            height="24px"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                {' '}
                                <g id="Grid_4-1">
                                    {' '}
                                    <g>
                                        {' '}
                                        <path d="M8.5,11H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H8.5a2.5,2.5,0,0,1,2.5,2.5V8.5A2.5,2.5,0,0,1,8.5,11ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V8.5a1.5,1.5,0,0,0,1.5,1.5H8.5A1.5,1.5,0,0,0,10,8.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"></path>{' '}
                                        <path d="M18.436,11H15.5A2.5,2.5,0,0,1,13,8.5V5.564a2.5,2.5,0,0,1,2.5-2.5h2.934a2.5,2.5,0,0,1,2.5,2.5V8.5A2.5,2.5,0,0,1,18.436,11ZM15.5,4.064a1.5,1.5,0,0,0-1.5,1.5V8.5A1.5,1.5,0,0,0,15.5,10h2.934a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"></path>{' '}
                                        <path d="M8.5,20.936H5.564a2.5,2.5,0,0,1-2.5-2.5V15.5a2.5,2.5,0,0,1,2.5-2.5H8.5A2.5,2.5,0,0,1,11,15.5v2.936A2.5,2.5,0,0,1,8.5,20.936ZM5.564,14a1.5,1.5,0,0,0-1.5,1.5v2.936a1.5,1.5,0,0,0,1.5,1.5H8.5a1.5,1.5,0,0,0,1.5-1.5V15.5A1.5,1.5,0,0,0,8.5,14Z"></path>{' '}
                                        <path d="M18.436,20.936H15.5a2.5,2.5,0,0,1-2.5-2.5V15.5A2.5,2.5,0,0,1,15.5,13h2.934a2.5,2.5,0,0,1,2.5,2.5v2.936A2.5,2.5,0,0,1,18.436,20.936ZM15.5,14A1.5,1.5,0,0,0,14,15.5v2.936a1.5,1.5,0,0,0,1.5,1.5h2.934a1.5,1.5,0,0,0,1.5-1.5V15.5a1.5,1.5,0,0,0-1.5-1.5Z"></path>{' '}
                                    </g>{' '}
                                </g>{' '}
                            </g>
                        </svg>
                    </div>
                    {showMenu && (
                        <div className={cx('menu-modal')}>
                            <ul>
                                <li>Thời trang nữ</li>
                                <li>Thời trang nam</li>
                                <li>Sức khỏe - Làm đẹp</li>
                                <li>Giày dép - Túi xách</li>
                                <li>Đồng hồ - Trang sức</li>
                                <li>Điện thoại - Laptop</li>
                                <li>Phụ kiện công nghệ</li>
                                <li>Đồ da dụng - Điện máy</li>
                                <li>Nhà cửa - Tân trang nhà</li>
                                <li>Tivi - Âm thanh - Camera</li>
                                <li>Đời sống - Sách - VPP</li>
                                <li>Bách hóa - Thú cưng</li>
                                <li>Mẹ & Bé - Đồ chơi</li>
                                <li>Tiện ích </li>
                                <li>Vay tiền mặt</li>
                                <li>Vé máy bay - Tour - Dịch vụ</li>
                                <li>Ôtô - Xe máy - Xe đạp</li>
                                <li>Thế thao - Dã ngoại</li>
                            </ul>
                        </div>
                    )}
                    <div className={cx('input-shop')}>
                        <input onClick={() => setShowResult(!showResult)} type="text" placeholder="Tìm trong Shop" />
                        {showResult && (
                            <div className={cx('results')}>
                                <ul>
                                    <li>Lịch sử tìm kiếm</li>
                                    <li>tai nghe blutetooth</li>
                                    <li>Xu hướng tìm kiếm</li>
                                    <li>Vay tiền online nhanh nhất</li>
                                    <li>Đồng hồ</li>
                                    <li>Giàn phun viên</li>
                                    <li>Lịch sử tìm kiếm</li>
                                    <li>tai nghe blutetooth</li>
                                    <li>Xu hướng tìm kiếm</li>
                                    <li>Vay tiền online nhanh nhất</li>
                                    <li>Đồng hồ</li>
                                    <li>Giàn phun viên</li>
                                </ul>
                            </div>
                        )}
                        <div className={cx('select')} onClick={() => setShowSelect(!showSelect)}>
                            {selectInput === 'Sendo' ? selectInput : 'Apple Flaship store'}
                        </div>
                        {showSelect && (
                            <div className={cx('select-input')}>
                                <p onClick={() => handleClick('Sendo')}>
                                    Tìm trên Sendo{' '}
                                    {selectInput === 'Sendo' && (
                                        <span>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                            >
                                                <path
                                                    fill="#6F787E"
                                                    fill-rule="nonzero"
                                                    d="M9.707 14.293 19 5l1.414 1.414L9.707 17.121 4 11.414 5.414 10z"
                                                ></path>
                                            </svg>
                                        </span>
                                    )}
                                </p>
                                <p onClick={() => handleClick('Apple Flagship store')}>
                                    Tìm trong Apple Flagship store{''}
                                    {selectInput === 'Apple Flagship store' && (
                                        <span>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                            >
                                                <path
                                                    fill="#6F787E"
                                                    fill-rule="nonzero"
                                                    d="M9.707 14.293 19 5l1.414 1.414L9.707 17.121 4 11.414 5.414 10z"
                                                ></path>
                                            </svg>
                                        </span>
                                    )}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className={cx('search')}>
                        <a href="">
                            <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#e6e6e6"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    {' '}
                                    <path
                                        d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z"
                                        stroke="#5a5353"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>{' '}
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className={cx('cart')}>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                {' '}
                                <path
                                    d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11M20 7L18 3H6L4 7M20 7H4M20 7V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V7"
                                    stroke="#dedede"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>{' '}
                            </g>
                        </svg>
                    </div>
                    <div>
                        <a className={cx('btn-login')}>Đăng nhập</a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
