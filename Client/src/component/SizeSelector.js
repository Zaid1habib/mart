import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../css/sizeSelector.css" 
export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value)
  };

  return (
    <Box sx={{
      minWidth: 120, mt: 2 , 
}}>
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Size</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Age"
      onChange={handleChange}
    >
      <MenuItem value={32}>32</MenuItem>
      <MenuItem value={34}>34</MenuItem>
      <MenuItem value={36}>36</MenuItem>
      <MenuItem value={38}>38</MenuItem>
      <MenuItem value={40}>40</MenuItem>
    </Select>
  </FormControl>
    </Box >
  );
}
