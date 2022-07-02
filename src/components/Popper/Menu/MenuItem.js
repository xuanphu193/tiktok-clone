import Button from "../../Button";
import classNames from 'classnames/bind';
import styles from "./Menu.module.scss"

const cx = classNames.bind(styles)

function MenuItem({data, onClick}) {
    const classs = cx('menu-item',{
        separate: data.separate
    })
    return ( 
        <Button className={classs} leftIcon={data.icon} to={data.to} onClick={onClick}>{data.title}</Button>
    );
}

export default MenuItem;