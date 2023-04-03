import React from 'react'
import { AiOutlineClose} from 'react-icons/ai'
import styles from './Cart.module.css'

const Cart = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles["sub-wrapper"]}>
                <h2>Your Cart</h2>
            <h3>No items found.</h3>
            <button>Go to shop</button>
            </div>
            <button className={styles.icon} onClick={()=>{props.setCart(false)}}>
           
        <AiOutlineClose />
       
        </button>
        </div>
    )
}
export default Cart