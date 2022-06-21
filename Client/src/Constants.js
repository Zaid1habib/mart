let scrollbarStyle =
{
    mt: 0, overflowY: "scroll",
    '&::WebkitScrollbar': {
        width: '0.2em'
    },
    '&::WebkitScrollbarTrack': {
        'webkitBoxShadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::WebkitScrollbarThumb': {
        backgroundColor: 'rgb(222 222 222 / 88%)',
        outline: '0px solid slategrey',
        borderRadius: "4px",

    }
}

let hover = {

    

}
export { scrollbarStyle , hover}