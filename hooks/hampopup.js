import React, { useState } from 'react'
import styles from '../components/HamburgerPopup/HamburgerPopup.module.css'

export default function Popup(props) {

return (props.trigger) ? (
    <div>
        <div className={styles.popupLinks}>
            { props.children }
        </div>
    </div>
    ) : "";
}
