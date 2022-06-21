import React from 'react'
import { Link } from 'react-router-dom'
import "../css/HomeCollection.css"
import arr from "../data"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

const HomeCollection = () => {
    const Item = styled(Paper)(({ theme }) => ({

        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const Products = useSelector(state => state.Products)

    return (

        // <div className='center-grid'>
        <div className='grid-container'>
            {Products && Products.map((data, index) => {
                let no = index + 1
                return (
                    <>
                        {/* < img src={data.link} className='item-image' />
                        <div className='view-coll-box'>
                        </div> */}
                        <Card
                            sx={{
                                maxWidth: 320,
                                height: "auto",
                                margin: "12px",
                                boxShadow: "none !important",
                                border: "1px solid #d7d7d7c7",
                                cursor: "pointer", '&:hover': {
                                    boxShadow: "0px 0px 11px gray !important",
                                }
                            }}
                            key={no}

                        >
                            <Item padding="10px" >
                                <CardMedia
                                    component="img"
                                    height="300px"
                                    image={data.images[0]}
                                    alt="green iguana"
                                    sx={{
                                        objectFit: "contain",
                                        backgroundColor: "#e8e8e882",
                                    }}
                                />
                            </Item>

                            <CardContent height="100px"
                            >
                                <Typography gutterBottom variant="h5" component="div" textAlign="center" fontSize="22px">
                                    {data.productName}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Link className='view-coll' to={`/Collections/${data.Collection}`}>
                                    <Button size="large" sx={{ width: "100% !important" }}>View Collection</Button>
                                </Link>

                            </CardActions>
                        </Card >
                    </>

                )
            })}
        </div>
        /* </div > */
    )
}

export default HomeCollection