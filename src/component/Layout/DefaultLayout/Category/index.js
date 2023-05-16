import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Category.scss';
import Product from '../Product';

const cx = classNames.bind(styles);

function Category() {
    const Data = [
        {
            img: 'https://media3.scdn.vn/img4/2023/02_09/ESa2epS8iBH3MthGkh71_simg_ab1f47_350x350_maxb.jpg',
            name: 'iPhone 14 Plus 256GB Chính hãng (VN/A)',
            price: 30990000,
            sale: 10,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2023/02_09/ESa2epS8iBH3MthGkh71_simg_ab1f47_350x350_maxb.jpg',
            name: 'iPhone 14 Plus 256GB Chính hãng (VN/A)',
            price: 30990000,
            sale: 5,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2023/02_09/ESa2epS8iBH3MthGkh71_simg_ab1f47_350x350_maxb.jpg',
            name: 'iPhone 14 Plus 256GB Chính hãng (VN/A)',
            price: 30990000,
            sale: 14,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2023/02_09/ESa2epS8iBH3MthGkh71_simg_ab1f47_350x350_maxb.jpg',
            name: 'iPhone 14 Plus 256GB Chính hãng (VN/A)',
            price: 30990000,
            sale: 11,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2023/02_09/ESa2epS8iBH3MthGkh71_simg_ab1f47_350x350_maxb.jpg',
            name: 'iPhone 14 Plus 256GB Chính hãng (VN/A)',
            price: 30990000,
            sale: 13,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2023/02_09/ESa2epS8iBH3MthGkh71_simg_ab1f47_350x350_maxb.jpg',
            name: 'iPhone 14 Plus 256GB Chính hãng (VN/A)',
            price: 30990000,
            sale: 55,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2023/02_09/ESa2epS8iBH3MthGkh71_simg_ab1f47_350x350_maxb.jpg',
            name: 'iPhone 14 Plus 256GB Chính hãng (VN/A)',
            price: 30990000,
            sale: 96,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2023/02_09/ESa2epS8iBH3MthGkh71_simg_ab1f47_350x350_maxb.jpg',
            name: 'iPhone 14 Plus 256GB Chính hãng (VN/A)',
            price: 30990000,
            sale: 5,
            address: 'TP.HCM',
        },
    ];
    const Watch = [
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/bW0dMuu51xnZTzM6mDmD_simg_ab1f47_350x350_maxb.jpg',
            name: 'Apple Watch',
            price: 14990000,
            sale: 3,
            address: 'TP.HCM',
        },
    ];

    const Sound = [
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/Ggwn8qGFVIv0iWOaR7T9_simg_ab1f47_350x350_maxb.png',
            name: 'Air Pod',
            price: 2950000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/Ggwn8qGFVIv0iWOaR7T9_simg_ab1f47_350x350_maxb.png',
            name: 'Air Pod',
            price: 2950000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/Ggwn8qGFVIv0iWOaR7T9_simg_ab1f47_350x350_maxb.png',
            name: 'Air Pod',
            price: 2950000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/Ggwn8qGFVIv0iWOaR7T9_simg_ab1f47_350x350_maxb.png',
            name: 'Air Pod',
            price: 2950000,
            sale: 3,
            address: 'TP.HCM',
        },
    ];

    const Ipad = [
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/5nsbRgw7j4AXa69OsNu6_simg_ab1f47_350x350_maxb.png',
            name: 'Ipad',
            price: 16690000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/5nsbRgw7j4AXa69OsNu6_simg_ab1f47_350x350_maxb.png',
            name: 'Ipad',
            price: 16690000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/5nsbRgw7j4AXa69OsNu6_simg_ab1f47_350x350_maxb.png',
            name: 'Ipad',
            price: 16690000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/5nsbRgw7j4AXa69OsNu6_simg_ab1f47_350x350_maxb.png',
            name: 'Ipad',
            price: 16690000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/5nsbRgw7j4AXa69OsNu6_simg_ab1f47_350x350_maxb.png',
            name: 'Ipad',
            price: 16690000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/5nsbRgw7j4AXa69OsNu6_simg_ab1f47_350x350_maxb.png',
            name: 'Ipad',
            price: 16690000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/5nsbRgw7j4AXa69OsNu6_simg_ab1f47_350x350_maxb.png',
            name: 'Ipad',
            price: 16690000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/5nsbRgw7j4AXa69OsNu6_simg_ab1f47_350x350_maxb.png',
            name: 'Ipad',
            price: 16690000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/5nsbRgw7j4AXa69OsNu6_simg_ab1f47_350x350_maxb.png',
            name: 'Ipad',
            price: 16690000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/5nsbRgw7j4AXa69OsNu6_simg_ab1f47_350x350_maxb.png',
            name: 'Ipad',
            price: 16690000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/5nsbRgw7j4AXa69OsNu6_simg_ab1f47_350x350_maxb.png',
            name: 'Ipad',
            price: 16690000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/5nsbRgw7j4AXa69OsNu6_simg_ab1f47_350x350_maxb.png',
            name: 'Ipad',
            price: 16690000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/5nsbRgw7j4AXa69OsNu6_simg_ab1f47_350x350_maxb.png',
            name: 'Ipad',
            price: 16690000,
            sale: 3,
            address: 'TP.HCM',
        },
    ];

    const Mac = [
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/hVAz2abHCLxdpNS3KlGy_simg_ab1f47_350x350_maxb.jpg',
            name: 'Macbook',
            price: 39990000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/hVAz2abHCLxdpNS3KlGy_simg_ab1f47_350x350_maxb.jpg',
            name: 'Macbook',
            price: 39990000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/hVAz2abHCLxdpNS3KlGy_simg_ab1f47_350x350_maxb.jpg',
            name: 'Macbook',
            price: 39990000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/hVAz2abHCLxdpNS3KlGy_simg_ab1f47_350x350_maxb.jpg',
            name: 'Macbook',
            price: 39990000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/hVAz2abHCLxdpNS3KlGy_simg_ab1f47_350x350_maxb.jpg',
            name: 'Macbook',
            price: 39990000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/hVAz2abHCLxdpNS3KlGy_simg_ab1f47_350x350_maxb.jpg',
            name: 'Macbook',
            price: 39990000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/hVAz2abHCLxdpNS3KlGy_simg_ab1f47_350x350_maxb.jpg',
            name: 'Macbook',
            price: 39990000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/hVAz2abHCLxdpNS3KlGy_simg_ab1f47_350x350_maxb.jpg',
            name: 'Macbook',
            price: 39990000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/hVAz2abHCLxdpNS3KlGy_simg_ab1f47_350x350_maxb.jpg',
            name: 'Macbook',
            price: 39990000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/hVAz2abHCLxdpNS3KlGy_simg_ab1f47_350x350_maxb.jpg',
            name: 'Macbook',
            price: 39990000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/hVAz2abHCLxdpNS3KlGy_simg_ab1f47_350x350_maxb.jpg',
            name: 'Macbook',
            price: 39990000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/hVAz2abHCLxdpNS3KlGy_simg_ab1f47_350x350_maxb.jpg',
            name: 'Macbook',
            price: 39990000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/hVAz2abHCLxdpNS3KlGy_simg_ab1f47_350x350_maxb.jpg',
            name: 'Macbook',
            price: 39990000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/hVAz2abHCLxdpNS3KlGy_simg_ab1f47_350x350_maxb.jpg',
            name: 'Macbook',
            price: 39990000,
            sale: 3,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/hVAz2abHCLxdpNS3KlGy_simg_ab1f47_350x350_maxb.jpg',
            name: 'Macbook',
            price: 39990000,
            sale: 3,
            address: 'TP.HCM',
        },
    ];

    const Selling = [
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/FRr5myjHLsCRVC3WkUkB_simg_ab1f47_350x350_maxb.png',
            name: 'Apple AirTag Combo 4 cái Chính Hãng',
            price: 2790000,
            sale: 1,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/FRr5myjHLsCRVC3WkUkB_simg_ab1f47_350x350_maxb.png',
            name: 'Apple AirTag Combo 4 cái Chính Hãng',
            price: 2790000,
            sale: 1,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/FRr5myjHLsCRVC3WkUkB_simg_ab1f47_350x350_maxb.png',
            name: 'Apple AirTag Combo 4 cái Chính Hãng',
            price: 2790000,
            sale: 1,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/FRr5myjHLsCRVC3WkUkB_simg_ab1f47_350x350_maxb.png',
            name: 'Apple AirTag Combo 4 cái Chính Hãng',
            price: 2790000,
            sale: 1,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/FRr5myjHLsCRVC3WkUkB_simg_ab1f47_350x350_maxb.png',
            name: 'Apple AirTag Combo 4 cái Chính Hãng',
            price: 2790000,
            sale: 1,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/FRr5myjHLsCRVC3WkUkB_simg_ab1f47_350x350_maxb.png',
            name: 'Apple AirTag Combo 4 cái Chính Hãng',
            price: 2790000,
            sale: 1,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/FRr5myjHLsCRVC3WkUkB_simg_ab1f47_350x350_maxb.png',
            name: 'Apple AirTag Combo 4 cái Chính Hãng',
            price: 2790000,
            sale: 1,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/FRr5myjHLsCRVC3WkUkB_simg_ab1f47_350x350_maxb.png',
            name: 'Apple AirTag Combo 4 cái Chính Hãng',
            price: 2790000,
            sale: 1,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/FRr5myjHLsCRVC3WkUkB_simg_ab1f47_350x350_maxb.png',
            name: 'Apple AirTag Combo 4 cái Chính Hãng',
            price: 2790000,
            sale: 1,
            address: 'TP.HCM',
        },
        {
            img: 'https://media3.scdn.vn/img4/2022/07_07/FRr5myjHLsCRVC3WkUkB_simg_ab1f47_350x350_maxb.png',
            name: 'Apple AirTag Combo 4 cái Chính Hãng',
            price: 2790000,
            sale: 1,
            address: 'TP.HCM',
        },
    ];

    const settings = {
        focusOnSelect: true,
        slidesToShow: 6,
        centerMode: false,
        infinite: false,
        slidesToScroll: 1,
        speed: 500,
    };
    return (
        <div>
            <main>
                <div className={cx('category')}>
                    <div className={cx('banner')}>
                        <img src="https://media3.scdn.vn/img4/2022/10_26/ANj33Df0JKatKZfjHTOj.jpg" alt="" />
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('Product-name')}>
                            <h2>Điện thoại - Máy tính bảng</h2>
                            <a>Xem tất cả</a>
                        </div>
                        <Slider {...settings} className={cx('carousel')}>
                            {Data.map((item) => {
                                return <Product product={item} />;
                            })}
                        </Slider>
                    </div>
                </div>
                <div className={cx('category')}>
                    <div className={cx('banner')}>
                        <img src="https://media3.scdn.vn/img4/2022/10_26/VUQhzjxB3p5nbZe8GCAV.jpg" alt="" />
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('Product-name')}>
                            <h2>Apple Watch</h2>
                            <a>Xem tất cả</a>
                        </div>
                        <Slider {...settings} className={cx('carousel')}>
                            {Watch.map((item) => {
                                return <Product product={item} />;
                            })}
                        </Slider>
                    </div>
                </div>
                <div className={cx('category')}>
                    <div className={cx('banner')}>
                        <img src="https://media3.scdn.vn/img4/2022/10_26/4UhGJZsKvOwbDeeecPRB.jpg" alt="" />
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('Product-name')}>
                            <h2>Thiết bị âm thanh</h2>
                            <a>Xem tất cả</a>
                        </div>
                        <Slider {...settings} className={cx('carousel')}>
                            {Sound.map((item) => {
                                return <Product product={item} />;
                            })}
                        </Slider>
                    </div>
                </div>
                <div className={cx('category')}>
                    <div className={cx('banner')}>
                        <img src="https://media3.scdn.vn/img4/2022/10_26/ccdFvYofQhz68UBHDQvN.jpg" alt="" />
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('Product-name')}>
                            <h2>IPad</h2>
                            <a>Xem tất cả</a>
                        </div>
                        <Slider {...settings} className={cx('carousel')}>
                            {Ipad.map((item) => {
                                return <Product product={item} />;
                            })}
                        </Slider>
                    </div>
                </div>
                <div className={cx('category')}>
                    <div className={cx('banner')}>
                        <img src="https://media3.scdn.vn/img4/2022/10_26/7oDIrgxll8wEoSQ12Rnc.jpg" alt="" />
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('Product-name')}>
                            <h2>Mac</h2>
                            <a>Xem tất cả</a>
                        </div>
                        <Slider {...settings} className={cx('carousel')}>
                            {Mac.map((item) => {
                                return <Product product={item} />;
                            })}
                        </Slider>
                    </div>
                </div>
                <div className={cx('category')}>
                    <div className={cx('banner')}>
                        <img src="https://media3.scdn.vn/img4/2022/10_26/GFwiwkkxtS7lOqKuPMde.jpg" alt="" />
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('Product-name')}>
                            <h2>Bán chạy</h2>
                            <a>Xem tất cả</a>
                        </div>
                        <Slider {...settings} className={cx('carousel')}>
                            {Selling.map((item) => {
                                return <Product product={item} />;
                            })}
                        </Slider>
                    </div>
                </div>
                <div className={cx('category')}>
                    <div className={cx('banner')}>
                        <img src="https://media3.scdn.vn/img4/2022/08_26/g7UY3yfqdv9vaM0XVcKX.jpg" alt="" />
                    </div>
                    <div className={cx('btn-selling')}>
                        <div className={cx('btn-sell')}>
                            <a className={cx('btn-sale')}>Bán chạy</a>
                        </div>
                        <div className={cx('btn-sell')}>
                            <a>Mới nhất</a>
                        </div>
                        <div className={cx('btn-sell')}>
                            <a>Giá</a>
                        </div>
                    </div>
                </div>
                <div className={cx('category', 'item-flex')}>
                    {Selling.map((item) => {
                        return <Product product={item} />;
                    })}
                </div>
            </main>
        </div>
    );
}

export default Category;
