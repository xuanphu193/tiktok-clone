import classNames from 'classnames';
import {useState, forwardRef} from 'react'
import images from '../../assets/img';
import styles from './Image.module.scss'

const Image = forwardRef(({src, alt, className, fallBack: customFallBack = images.noImage, ...attr}, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(images.noImage)
    }
    return ( 
        <img className={classNames(styles.wrapper, className)} ref={ref} src={fallBack || src} alt={alt} {...attr} onError={handleError} />
     );
})

export default Image;