import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useState} from 'react'

const valuetext = (value) =>{
  return `${value}°C`;
}

export const RangeSlider = (props) => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.setRange(value)
  };

  return (
    <Box sx={{width: 300}}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        min={1930}
        max={2022}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
