import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import styles from "./Sidebar.module.scss"
import config from "../../../config"
import {UserGroupIcon, HomeIcon, LiveIcon } from "../../../components/Icons"

const cx = classNames.bind(styles)

function Sidebar() {
    return <aside className={cx('wrapper')}>
        <Menu >
            <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />}/>
            <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />}/>
            <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />}/>
        </Menu>
    </aside>
}

export default Sidebar;