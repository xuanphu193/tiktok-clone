import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css'
import {
    faCircleXmark,
    faSpinner ,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import Button from '../../../Button';
import images from '../../../../assets/img';
import {Wrapper as PopperWrapper} from '../../../Popper'
import AccountItem from '../../../AccountItem';
import Menu from '../../../Popper/Menu';
import { MessageBox, Messages, UploadIcon } from '../../../Icons';
import Image from '../../../image';



const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
                title : 'Language',
                data: [
                    {
                        type: 'Language',
                        code: 'en',
                        title: 'English'
                    },
                    {
                        type: 'Language',
                        code: 'vi',
                        title: 'Tieng Viet'
                    }
                ]
            }
        
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    }
]


function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(()=> {
        setTimeout(()=>{
            setSearchResult([])
        }, 0)
    }, [])

    const handleMenuChange = (item) => {
        console.log(item)
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]

    const isLogin = true;

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt="" />
            <HeadlessTippy
                interactive={true}
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-result--title')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false}/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                
                </div>
            </HeadlessTippy>
            <div className={cx('actions')}>
                {
                    isLogin ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('action-btn','action-btn--upload')} >
                                    <UploadIcon />
                                    <span className={cx('action-btn--title')}>Tai len</span>
                                </button>
                            </Tippy>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')} >
                                    <Messages />
                                </button>
                            </Tippy>
                            <Tippy content="Message Box" placement="bottom">
                                <button className={cx('action-btn')} >
                                    <MessageBox />
                                </button>
                            </Tippy>
                        </>
                    ) : (

                        <>
                            <Button className='text' >Upload</Button>
                            <Button className='primary' >Log in</Button>
                        </>
                    )
                }
                                    
                    <Menu 
                        items={isLogin ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {
                            isLogin ? (
                                <Image 
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59.jpeg?x-expires=1656925200&x-signature=UXby27hKj7QVISY1LbikTiBbOuE%3D" 
                                className={cx('user-avatar')} 
                                alt="Nguyen Van A" />
                            ) :
                            (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )
                        }
                        
                    </Menu>
            </div>
        </div>
    </header>;
}

export default Header;