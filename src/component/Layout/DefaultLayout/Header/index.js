import classNames from 'classNames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [showResult, setShowResult] = useState(false);

    return (
        <div>
            <header className={cx('wrapper')}>
                <div className={cx('text')}>
                    <p>Tải ứng dụng</p>
                    <p>Chăm sóc khách hàng</p>
                    <p>Kiểm tra đơn hàng</p>
                </div>
            </header>
            <header className={cx('wrapper-1')}>
                <div className={cx('content')}>
                    <h2 className={cx('logo')}>Sendo</h2>
                    <div className={cx('icon')}>
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
                    <div className={cx('input-shop')}>
                        <input onClick={() => setShowResult(!showResult)} type="text" placeholder="Tìm trong Shop" />
                        {showResult && (
                            <div className={cx('results')}>
                                <ul>
                                    <li>Lịch sử tìm kiếm</li>
                                    <li>tai nghe blutetooth</li>
                                    <li>Xu hướng tìm kiếm</li>
                                </ul>
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
