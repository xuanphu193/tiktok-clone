import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from '../'
import MenuItem from './MenuItem';
import classNames from 'classnames/bind';
import styles from "./Menu.module.scss"
import { useState } from 'react';
import Header from './Header';


const cx = classNames.bind(styles)

function Menu({ children, items = [] , onChange}) {
    const [menu, setMenu] = useState([{data: items}]);
    const current = menu[menu.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            let isParent = !!item.children

            return <MenuItem data={item} key={index} onClick={()=>{
                if (isParent) {
                    setMenu(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }} />
        })
    }

    return ( 
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-2" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {menu.length > 1  && <Header title={current.title} onBack={()=> {
                            setMenu(prev => prev.slice(0, -1))
                        }}/>}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={()=>{
                setMenu(prev => prev.slice(0,1))
            }}
        >
            {children}
        </Tippy>
     );
}

export default Menu;