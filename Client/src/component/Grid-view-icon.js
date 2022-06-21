import React from 'react'
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import GridViewIcon from '@mui/icons-material/GridView';
import { useDispatch } from 'react-redux'
import { sort } from '../state/actions/GridviewActions'
import RangeSlider from './RangSlider';

const Gridviewicon = () => {
    const dispatch = useDispatch()
    return (
        <div style={{ display: "inline-flex", justifyContent: "flex-end", alignItem: "center" ,margin:"11px"}}>
            <p onClick={() => {
                dispatch(sort(1))
            }} >
                <ViewComfyIcon width="100px" className='comfort' />
            </p>
            <p onClick={() => {
                dispatch(sort(2))
            }} >
                <ViewModuleIcon width="100px" className='comfort' />
            </p>
            <p onClick={() => {
                dispatch(sort(3))
            }} >
                <GridViewIcon width="100px" className='comfort' />
            </p>
        </div>
    )
}

export default Gridviewicon