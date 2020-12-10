import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import './style.scss';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider(props) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Slider
        value={props.value}
        onChangeCommitted={(event, newValue) => props.handleChangeCommitted(event, newValue)}
        onChange={(event, newValue) => props.handleChange(event, newValue)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={0}
        max={17000}
      />
      <p className='labelValues'>{props.value[0]}- {props.value[1]}</p>
    </div>
  );
}



