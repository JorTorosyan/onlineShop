import React, { useState, useEffect } from 'react'
import { Modal } from 'antd';

import './style.scss'

export function CheckModal() {
    const [visible, setVisible] = useState(false)

//     useEffect(() => {
//         setTimeout(() => {
//             setVisible(true)
//         },0)
//  }, [])
 const handleOk = (e) => {
        setVisible(false)

    }
    const handleClick = ()=>{
        setVisible(true) 
    }
    const handleCancel = () => {
    
        setVisible(false)
    }
    return (
        <div>
            <Modal
                wrapClassName='checkModal-container'
                closable={false}
                title={<img src={'https://remedy-varnishcdn-ebizon.netdna-ssl.com/pub/media/belvg/verpage/default/remedy-verify.jpg'} style={{ width: 200 }} alt="logo" />}
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                width='600px'
                background='black'
                maskStyle={{  background: 'rgba(15, 15, 15, 0.953)' }}
                footer={null}
            > <p>Are You 21 Years Old or Older?</p>
                <div className="btn-wrapper">
                    <button onClick={handleClick} className="button exit" title="Exit" type="submit">NO - Leave</button>
                    <button  onClick={handleOk} className="button enter" title="Enter" type="submit">YES - Enter</button>
                </div>
                <div className="footer">
                <p>You must be 21 years old or over to purchase alcohol. Please enjoy responsibly.</p>
                </div>
             </Modal>
        </div>
    )
}

