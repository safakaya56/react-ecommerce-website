import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import { handleClick } from '../redux/features/clickSlice';

function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => {
                setCategories(json)
            })
    }, [])


    const { click } = useSelector((state) => state.click)
    const dispatchClick = useDispatch()


    const handleCloseDrawer = () => {
        dispatchClick(handleClick()) 
    }

    return (
        <div>
            <Drawer
                anchor="left"
                open={click} 
                onClose={handleCloseDrawer} 
                variant="temporary" 
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Box sx={{ width: 250 }}>
                    <List>
                        <ListItem>
                            <ListItemButton>{categories[0]} </ListItemButton>
                        </ListItem>
                        <Divider />

                        <ListItem>
                            <ListItemButton>{categories[1]}</ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemButton>{categories[2]}</ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemButton>{categories[3]}</ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

        </div>
    )
}

export default Categories
