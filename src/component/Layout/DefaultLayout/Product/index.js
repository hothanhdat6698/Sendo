import classNames from 'classNames/bind';
import styles from '../Category/Category.module.scss';

const cx = classNames.bind(styles);

function Product(props) {
    const formatMoney = (money) => {
        return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
    };
    return (
        <div className={cx('item')}>
            <div>
                <div className={cx('category-list')}>
                    <div className={cx('iphone-image')}>
                        <img src={props.product ? props.product.img : ''} />
                    </div>
                    <div>
                        <div className={cx('phone-name')}>
                            <img src="https://media3.scdn.vn/img4/2022/08_30/Niw4htmWmKd2rNiMEHpE.png" alt="" />
                            <span className={cx('desc')}>{props.product ? props.product.name : ''}</span>
                        </div>
                        <div className={cx('price')}>
                            <span>{props.product ? formatMoney(props.product.price) : ''}đ</span>
                        </div>
                        <div className={cx('sale')}>
                            <span>Đã bán {props.product ? props.product.sale : ''}</span>
                        </div>
                        <div className={cx('address')}>{props.product ? props.product.address : ''}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
