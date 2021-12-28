import React from 'react';
import styles from './Menu.module.scss'
import MenuSearch from './MenuSearch'
import MenuControl from './MenuControl'

function Menu() {
    return (
        <div className={`${styles.menu}`}>
            <div className={`${styles.mainMenu}`}>
                <MenuSearch></MenuSearch>
                <MenuControl></MenuControl>
            </div>
            {/* <div className={`${styles.mainContents}`}>content</div> */}
        </div>
    );
}

export default Menu;