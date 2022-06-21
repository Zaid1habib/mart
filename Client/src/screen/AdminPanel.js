import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import 'antd/dist/antd.css';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import "../css/Admin.css"
import AddCate from '../component/AddCate';
import AdminAccordion from '../component/AdminAccordion';
import { Link } from 'react-router-dom';
import EditCate from '../component/EditCate';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { MainCategory } from "../state/actions/MainCateAction"
import { UserNavinfo } from '../state/actions/userNavInfoAction'
import { products } from "../state/actions/productAction"

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [Addcate, setAddcate] = React.useState(false)
    const [Addpro, setAddpro] = React.useState(true)
    const [Inputfor, setInputfor] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const EmailBox = (e) => {
        console.log(e.target.innerHTML)
        let select = e.target.innerHTML
        if (select === "Add/Edite Product") {
            setAddpro(true)
            setAddcate(false)
        } else if (select === "Add/Edite Category") {
            setAddpro(false)
            setAddcate(true)
        }

    }
    const dispatch = useDispatch()
    console.log("DISPATCH=>", dispatch)
    React.useEffect(async () => {
        console.log(localStorage.getItem("token"))
        const Avatar = localStorage.getItem("Avatar")
        const firstname = localStorage.getItem("firstName")
        const lastName = localStorage.getItem("lastName")
        const role = localStorage.getItem("role")
        dispatch(UserNavinfo(Avatar, firstname, lastName, role))

        // get catefory
        const res = await fetch("http://localhost:5000/AddCate-EditeCate/Category", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        })
        const result = await res.json()
        // if(!result.error){
        console.log(result, "cate")
        dispatch(MainCategory(result))

        //get Product
        const productRes = await fetch("http://localhost:5000/Add-Product-Collection/Products", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`

            },
        })
        const productResult = await productRes.json()
        // console.log(productResult, "productResult")
        dispatch(products(productResult))
    }, [])
    const mainCate = useSelector(state => state)
    console.log(mainCate, "this is main review")



    //    const myState = useSelector(state=>state)
    //    console.log(myState)
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Add/Edite Product', 'Add/Edite Category'].map((text, index) => (
                        <ListItem key={text} disablePadding id={text} onClick={(e) => (e.target.id === "Add/Edite Product" || Addpro === true) ? setInputfor(false) : setInputfor(true)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} onClick={EmailBox} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>

            {/* // main Content box */}
            <Main open={open}>

                <DrawerHeader />

                {Addpro && <>
                    <Typography variant="h1" component="h1" style={{ fontWeight: "lighter", textAlign: "center", fontSize: "42px", }}>
                        Add/Edit Product
                    </Typography>
                    <br />
                    <Divider />
                    <AdminAccordion showIconPara={Inputfor} />
                </>}

                {Addcate && <>
                    {/* AddCate */}
                    <Typography paragraph>
                        <Typography variant="h4" component="h4" style={{ textAlign: "center", }}>Add/Edit Category</Typography>
                        <br />
                        <Typography variant="h4" component="h4">Add Category</Typography>
                        <br />
                        <AddCate />
                    </Typography>
                    <Divider />
                    <br />
                    <h1>Edit Product</h1>
                    <EditCate paraicon={true} />
                    {/* AddCate  */}
                </>}

            </Main>
        </Box>
    );
}
