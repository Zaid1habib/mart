import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TransitionsModal from "./ViewItemModal"
import { hover } from "../Constants"
import EditeProductModal from './ModalForProductEdit'

const Item = styled(Paper)(({ theme }) => ({

    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MediaCard(props) {
    var { links, data, index } = props
    const Sort = useSelector(state => state.Grid)
    return (
        <Card
            sx={{
                maxWidth: (Sort[0] === 1) ? 320 : (Sort[0] === 2) ? 375 : 445,
                height: "auto",
                margin: "10px",
                boxShadow: "none !important",
                border: "1px solid #d7d7d7c7",
                cursor: "pointer", '&:hover': {
                    boxShadow: "0px 0px 11px gray !important",
                },

            }}
            key={index}>
            <Item padding="10px" height="408px" style={{ position: "relative" }}>
                <CardMedia
                    component="img"
                    height={(window.location.pathname === "/Admin") ? "300px" : (Sort[0] === 1) ? "450px" : (Sort[0] === 2) ? "500px" : "520px"}
                    image={links[0]}
                    alt="green iguana"
                    objectFit="contain"
                />
                {(window.location.pathname === "/Admin") ? <EditeProductModal id={data._id} links={links}/> : ""}
            </Item>

            <CardContent height="100px"

            >
                <Typography gutterBottom variant="h5" component="div" textAlign="center" fontSize="22px">
                    {data.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center" fontSize="20px">
                    <span style={{ fontWeight: "bold" }}> Rs </span> {data.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{ width: "100% !important" }}><FavoriteBorderIcon /></Button>
                <Button size="small" sx={{ width: "100% !important" }}><TransitionsModal /></Button>
            </CardActions>
        </Card >
    );
}
