import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer-promotion')}>
                <div className={cx('footer-img')}>
                    <img src="https://media3.scdn.vn/img4/2020/12_16/gJwXr6FFZKZCGKWaz4RB.png" alt="" />
                    <div className={cx('desc')}>
                        <p className={cx('text')}>Siêu nhiều hàng tốt</p>
                        <p className={cx('text-desc')}>Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm</p>
                    </div>
                </div>
                <div className={cx('footer-img')}>
                    <img src="https://media3.scdn.vn/img4/2020/12_16/EfZWQVfV6nQzu2vMmnwC.png" alt="" />
                    <div className={cx('desc')}>
                        <p className={cx('text')}>Siêu yên tâm</p>
                        <p className={cx('text-desc')}>Miễn phí đổi trả 48h</p>
                    </div>
                </div>
                <div className={cx('footer-img')}>
                    <img src="https://media3.scdn.vn/img4/2020/12_16/j5C6IQz7gIXPgjFJxmRz.png" alt="" />
                    <div className={cx('desc')}>
                        <p className={cx('text')}>Siêu tiện lợi</p>
                        <p className={cx('text-desc')}>Mang thế giới mua sắm của Sendo trong tầm tay bạn</p>
                    </div>
                </div>
                <div className={cx('footer-img')}>
                    <img src="https://media3.scdn.vn/img4/2020/12_16/7AJFQGQ5qvS7gGOz8P7a.png" alt="" />
                    <div className={cx('desc')}>
                        <p className={cx('text')}>Siêu tiết kiệm</p>
                        <p className={cx('text-desc')}>
                            Giá hợp lý, vừa túi tiền. Luôn có nhiều chương trình khuyến mãi
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('footer-about')}>
                <div className={cx('about')}>
                    <div>
                        <ul>
                            <li>VỀ CHÚNG TÔI</li>
                            <li>Giới thiệu Sendo.vn</li>
                            <li>Giới thiệu SenMall</li>
                            <li>Quy chế hoạt động</li>
                            <li>Chính sách bảo mật</li>
                            <li>Giao hàng và Nhận hàng</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>DÀNH CHO NGƯỜI MUA</li>
                            <li>Giải quyết khiếu nại</li>
                            <li>Hướng dẫn mua hàng</li>
                            <li>Chính sách đổi trả</li>
                            <li>Chăm sóc khách hàng</li>
                            <li>Giao hàng và Nhận hàng</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Dành cho người bán</li>
                            <li>Quy định đổi với người bán</li>
                            <li>Chính sách bán hàng</li>
                            <li>Hệ thống tiêu chí kiểm duyệt</li>
                            <li>Mở shop trên Sendo</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Tải ứng dụng Sendo</li>
                            <li>Mang thế giới mua sắm của Sendo trong tầm tay bạn</li>
                        </ul>
                        <div className={cx('logo')}>
                            <div className={cx('logo-img')}>
                                <img src="https://media3.scdn.vn/img4/2020/12_16/5lUTWdk3DXr8nlC9MDII.png" alt="" />
                                <img src="https://media3.scdn.vn/img4/2021/10_26/0ZARLASzVrfL92924rzW.png" alt="" />
                            </div>
                            <img src="https://media3.scdn.vn/img4/2021/03_19/AMV086JNpEbm4OGAvVng.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-address')}>
                <div className={cx('address')}>
                    <div className={cx('address-text')}>
                        <p>Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT</p>
                        <p>Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 20, ngày 26/04/2022.</p>
                        <p>Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.</p>
                        <p>
                            Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường Tân Thuận, Khu chế xuất
                            Tân Thuận, Phường Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.
                        </p>
                        <p>Email: lienhe@sendo.vn</p>
                        <div className={cx('address-logo')}>
                            <img src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png" alt="" />
                            <img src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png" alt="" />
                        </div>
                    </div>
                    <div className={cx('address-form')}>
                        <p>Đăng ký nhận bản tin ưu đãi khủng từ Sendo</p>
                        <div className={cx('form')}>
                            <input type="text" placeholder="Email của bạn là" />
                            <button>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
