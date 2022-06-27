import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useSelector, useDispatch} from 'react-redux';
import {filters} from '../redux/redux-reducers/filters';

const valuetext = (value) => {
  return `${value}°C`;
};

export const RangeSlider = () => {
  const {filters: filtersStore} = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    dispatch(filters.actions.addStartYear(newValue[0]));
    dispatch(filters.actions.addEndYear(newValue[1]));
  };

  return (
    <Box sx={{width: 300}}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={[filtersStore.startYear, filtersStore.endYear]}
        onChange={handleChange}
        min={1930}
        max={new Date().getFullYear()}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
};
