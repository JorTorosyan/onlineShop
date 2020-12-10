import React from 'react'
import { Radio } from 'antd';
import './style.scss'

const RadioButton = ({ value, onChangeManufactur, targetManufac }) => {
    return (
        <Radio.Group value={targetManufac} >
            <Radio
                onChange={(e) => onChangeManufactur(e.target.value)}
                value={value}
            >
            </Radio>
        </Radio.Group>
    )
}
export default RadioButton
