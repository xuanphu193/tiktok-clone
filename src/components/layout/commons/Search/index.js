import { useEffect, useState, useRef } from 'react';
import classNames from "classnames/bind";
import styles from './Search.module.scss'
import {Wrapper as PopperWrapper} from '../../../Popper'
import AccountItem from '../../../AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSpinner 
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { SearchIcon, CircleXmarkIcon } from '../../../Icons';

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const inputSearch = useRef();

    useEffect(()=> {
        if (!searchValue.trim()) {
            setSearchResult([])
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                if (res.data) {
                    setSearchResult(res.data)
                    
                }
                setLoading(false);
            }).catch(()=>{
                setLoading(false);
            })
    }, [searchValue])

    const handleClear = () => {
        setSearchValue('')
        inputSearch.current.focus()
        setSearchResult([])
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    return ( 
        <HeadlessTippy
            interactive={true}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-result--title')}>Accounts</h4>
                        {searchResult.map((data)=>(
                            <AccountItem key={data.id} data={data}/>
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputSearch}
                    placeholder="Search accounts and videos"
                    value={searchValue}
                    spellCheck={false}
                    onChange={(e) => {setSearchValue(e.target.value)}}
                    onFocus={() => {setShowResult(true)}}
                />
                { !!searchValue && !loading && (
                    <button 
                        className={cx('clear')}
                        onClick={handleClear}
                    >
                        <CircleXmarkIcon />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            
            </div>
        </HeadlessTippy>
     );
}

export default Search;