import React from 'react';
import { Checkbox } from 'antd';


export const CheckboxBlock = ({onChange, children, checked}) => {

  return (
    <Checkbox
      onChange={onChange}
      checked={checked}
    >{children}</Checkbox>
  )
}


// return (
//   <Checkbox
//     onChange={(e) => props.check(e, props.children)}
//     checked={props.checked}
//   >{props.children}</Checkbox>
// )
// }