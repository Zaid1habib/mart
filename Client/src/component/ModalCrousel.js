import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://i0.wp.com/www.shahzebsaeed.com/wp-content/uploads/2022/04/5-2-scaled.jpg?resize=1000%2C1300&ssl=1',

    },
    {
        label: 'Bird',
        imgPath:
            'https://i0.wp.com/www.shahzebsaeed.com/wp-content/uploads/2022/03/zz-1.jpg?resize=1000%2C1286&ssl=1',


    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://i0.wp.com/www.shahzebsaeed.com/wp-content/uploads/2021/12/s133674565102400262_p233_i33_w640.jpeg?w=640&ssl=1',


    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://i0.wp.com/www.shahzebsaeed.com/wp-content/uploads/2021/12/polos.jpg?resize=1000%2C1286&ssl=1',

    },
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ width: "100%", margin: "0px", flexGrow: 1, height: "100% !important",objectFit:"contain" }}>
            {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
     <Typography>{images[activeStep].label}</Typography> 
      </Paper> */}
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                style={{
                    overflow: "hidden",
                    width: "100%",
                    minWidth: "200px",
                    objectFit: "contain",
                    height: "98%"
                }}>
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: "620px",
                                    display: 'block',
                                    maxWidth: "800",
                                    overflow: 'hidden',
                                    width: '100%',
                                    objectFit:"contain",
                                    backgroundColor:"#cfcece73",
                                    backdropFilter:"blur(10px)",

                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default SwipeableTextMobileStepper;
