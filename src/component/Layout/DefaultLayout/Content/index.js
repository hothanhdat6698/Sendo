import classNames from 'classNames/bind';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content() {
    return (
        <main className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('banner')}>
                    <img src="https://media3.scdn.vn/img4/2022/07_15/Oc85ZlDHDMC3qyJNBMQi.jpg" alt="image" />
                </div>
                <div className={cx('store')}>
                    <div className={cx('store-info')}>
                        <div className={cx('store-logo')}>
                            <img src="https://media3.scdn.vn/img4/2022/07_06/jeSJfXzYnACb4MK3aXmU.jpg" alt="" />
                        </div>
                        <div className={cx('store-flagship')}>
                            <div className={cx('name-channel')}>
                                <h2>Apple Flagship Store</h2>
                                <img src="https://media3.scdn.vn/img4/2022/08_30/Niw4htmWmKd2rNiMEHpE.png" alt="" />
                            </div>

                            <div className={cx('sub')}>
                                <span>
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="_0b84-giBEZB"
                                    >
                                        <path
                                            fill="#FFC600"
                                            fill-rule="nonzero"
                                            d="m12 19.13-7.206 3.788 1.376-8.024L.34 9.212 8.397 8.04 12 .74l3.603 7.3 8.057 1.17-5.83 5.683 1.376 8.024z"
                                        ></path>
                                    </svg>
                                    5/5
                                </span>
                                <span>272 người theo dõi</span>
                            </div>
                        </div>
                        <div className={cx('store-btn')}>
                            <div>
                                <button>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        version="1.1"
                                    >
                                        <path
                                            d="M20 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7.913L6 21.804V18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16Zm0 2H4v12h4v2.196L11.513 16H20V4Zm-6 7v2H7v-2h7Zm2-4v2H7V7h9Z"
                                            fill="#6F787E"
                                            fill-rule="nonzero"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        version="1.1"
                                    >
                                        <path
                                            d="M16.553 2C20.258 2.015 23 5.14 23 9.12c0 .631-.073 1.258-.217 1.88H20.71a6.43 6.43 0 0 0 .289-1.88c0-2.931-1.912-5.11-4.45-5.12-1.163 0-1.804.118-2.568.492a4.18 4.18 0 0 0-1.25.936l-.73.79-.735-.784a4.262 4.262 0 0 0-1.232-.913C9.248 4.13 8.565 4 7.455 4 4.884 4 3 6.148 3 9.12c0 2.38 1.414 4.83 4.186 7.323 1.512 1.36 3.455 2.718 4.814 3.43v2.253l-.866-.449c-1.515-.784-3.63-2.258-5.285-3.747C2.694 15.092 1 12.158 1 9.12 1 5.097 3.716 2 7.455 2c1.395 0 2.376.189 3.467.728.38.188.736.41 1.068.668a6.146 6.146 0 0 1 1.113-.7c1.07-.524 2.003-.696 3.45-.696zM19 13v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2z"
                                            fill="#6F787E"
                                            fill-rule="nonzero"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('store-description')}>
                        <div className={cx('store-icon')}>
                            <div>
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-.883.993L19 21H5a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v4h12v-4a1 1 0 0 1 1-1Zm-6 1a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2h2Zm5-12a1 1 0 0 1 1 1.004c-.001.245.197.557.718 1.046.122.113.256.233.44.393l.5.432C22.25 7.267 23 8.36 23 10c0 1.598-1.431 3-3 3-.743 0-1.458-.321-2.004-.829-.545.506-1.258.829-1.996.829-.74 0-1.454-.325-2-.833-.545.508-1.26.833-2 .833-.747 0-1.461-.315-2.006-.819C9.45 12.683 8.74 13 8 13c-.74 0-1.455-.325-2-.833-.548.509-1.264.833-2.007.833-1.557 0-2.998-1.446-2.998-3 0-1.64.751-2.732 2.345-4.123.112-.098.483-.416.504-.435.186-.161.322-.282.444-.396.519-.486.714-.796.712-1.037A1 1 0 0 1 6 3h12Zm-.804 2H6.806c-.213.513-.6.99-1.151 1.506-.145.135-.298.271-.502.448l-.498.43C3.461 8.426 2.995 9.104 2.995 10c0 .451.547 1 .998 1C4.453 11 5 10.458 5 10c0-1.333 2-1.333 2 0 0 .458.546 1 1 1 .464 0 1-.528 1-1 0-1.333 2-1.333 2 0 0 .49.523 1 1 1 .454 0 1-.543 1-1 0-1.333 2-1.333 2 0 0 .456.547 1 1 1 .455 0 1-.542 1-1 0-1.333 2-1.333 2 0 0 .47.537 1 1 1 .473 0 1-.516 1-1 0-.898-.465-1.576-1.658-2.62l-.494-.426c-.202-.175-.354-.31-.497-.445-.553-.518-.94-.995-1.155-1.509Z"
                                            fill="#6F787E"
                                            fill-rule="nonzero"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <p>Thời gian bán hàng</p>
                                <p className={cx('store-desc')}>10 tháng</p>
                            </div>
                        </div>
                        <div className={cx('store-icon')}>
                            <div>
                                <span>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M6.69 2.999A2 2 0 0 0 4.933 4.04l-2.69 4.923A2 2 0 0 0 2 9.922V20a2 2 0 0 0 2 2h15.908a2 2 0 0 0 2-2V9.91a2 2 0 0 0-.224-.918L19.146 4.08a2 2 0 0 0-1.776-1.082H6.69zm10.68 2L18.92 8H5.05l1.64-3.001h10.68zM14.96 10h4.948v10H4V10h5v5.626l2.98-1.506 2.98 1.506V10zm-2 0H11v2.374l.98-.494.98.494V10z"
                                            fill="#6F787E"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <p>Sản phẩm</p>
                                <p className={cx('store-desc')}>164</p>
                            </div>
                        </div>
                        <div className={cx('store-icon')}>
                            <div>
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm1 3v5h4v2h-6V6h2Z"
                                            fill="#6F787E"
                                            fill-rule="nonzero"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <p>Thời gian chuẩn bị hàng</p>
                                <p className={cx('store-desc')}>13 giờ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Content;
