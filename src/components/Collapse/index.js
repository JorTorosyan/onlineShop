import React from 'react';
import { Collapse } from 'antd';
import { useSelector } from 'react-redux';
import { CheckboxBlock } from '../Checkbox/index';
import RangeSlider from '../RangeSlider/RangeSlider';
import RadioButton from '../RadioBatton/index';
import "antd/dist/antd.css";
import * as S from './Collapse.styles';
import './style.scss';

const { Panel } = Collapse;

export const CollapseBlock = (props) => {
  const collapseState = useSelector(state => state.collapse);
  const { connections, manufacturer, countries } = collapseState;
  const { type } = props;
  const { subcategory } = props;

  return (
    <Collapse >
      {connections && connections.length > 0 && <Panel header={(!type && !subcategory && `type`) || (type && `subcategory`)} key="1">
        {connections && connections.map(el => (
          <div key={el.name} className='collapse-el'>
            <S.Label onClick={(e) => props.handleSelectToggle(el.name)}>{el.name}</S.Label>
            {el.subcategories &&
              <Collapse style={{ border: '1px solid red' }}>
                <Panel className='inner-block' >
                  {el.subcategories && el.subcategories.map((el, i) => (
                    <CheckboxBlock
                      onChange={(e, value) => props.check(e, el.name)}
                      checked={props.parameters.subcategory.includes(el.name.toLowerCase()) ? true : false}
                      key={i}>
                      {el.name.replace(/_/g, " ")}{' (' + el.count + ')'}
                    </CheckboxBlock>
                  ))}
                </Panel>
              </Collapse>}
          </div>
        ))}
      </Panel>}
      { connections && (props.filterFlag || connections.length > 0) && <Panel header="Price" key="2" style={{ paddingBottom: 0 }}>
        <RangeSlider value={props.value} style={{ marginLeft: 10 }}
          handleChange={(event, newValue) => props.handleChange(event, newValue)}
          handleChangeCommitted={(event, newValue) => props.handleChangeCommitted(event, newValue)}

        />
      </Panel>}
      {(props.filterFlag || manufacturer.length > 0) && <Panel header="MANUFACTURER" key="3">
        {manufacturer && manufacturer.map((el, i) => (
          <S.Label key={i}>
            <RadioButton
              targetManufac={props.targetManufac}
              onChangeManufactur={targetManufac => props.onChangeManufactur(targetManufac)}
              value={el.name}
              checked={props.targetManufac === el.name ? true : false}
            />
            {el.name.toLowerCase()
              .split(' ')
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ')}{' (' + el.products_count + ')'}
          </S.Label>
        ))}
      </Panel>}
      {(props.filterFlag || countries.length > 0) && <Panel header="WINE COUNTRY" key="4">
        {countries && countries.map((el, i) => (
          <S.Label key={i}>
            <CheckboxBlock
              onChange={(e, value) => props.checkforCountry(e, el.country_of_manufacture)}
              checked={props.parameters.countries.includes(el.country_of_manufacture) ? true : false}
              key={i}>
              {el.country_of_manufacture} {' (' + el.total + ')'}
            </CheckboxBlock>
          </S.Label>
        ))}
      </Panel>}
      <Panel header="COMPARE PRODUCTS" key="5" showArrow={false} >
      </Panel>
      <Panel header={<p className="panel_text">you have no items to compare</p>} key="6" showArrow={false}>
      </Panel>
    </Collapse>
  );
};

//categorii tox@ stugel render ani te che.