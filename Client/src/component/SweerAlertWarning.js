import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function TransitionAlerts(props) {
    const {open , setOpen} = props
  return (
    <Box sx={{ width: '100%' }}>
    <Collapse in={open} 
    
    >
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
            
          >
            <CloseIcon fontSize="inherit"  
            
            />
          </IconButton >
        }
        sx={{backgroundColor:"red", color:"white" , mb: 2}}

      >
        pls fill all field
      </Alert>
    </Collapse>

  </Box>
  );
}
