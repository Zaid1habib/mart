import { DeleteFilled } from '@ant-design/icons'
import React from 'react'

const ItemsInCart = () => {
    return (
        <div className='items-' >
            <div className='it'>
            <img src="https://i0.wp.com/www.shahzebsaeed.com/wp-content/uploads/2022/04/5-2-scaled.jpg?resize=1000%2C1300&ssl=1" className='item-images' />
            <p className='item-name-size'>
                Blue Self Contrast Collar Designer Shalwar Kameez {'(SK-341) -'} Medium {"( 15 - 15.5 inches ) "}
            </p>
            <p>220$</p>
            </div>
            <DeleteFilled className='delete' title='delete' />
        </div>
    )
}

export default ItemsInCart