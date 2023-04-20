import { fetchCategories } from "../api"
import { useState, useEffect } from "react"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from "react-router-dom";


const CategorySelect = () => {

    const [categoriesArray, setCategoriesArray] = useState([])
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {fetchCategories().then((categories) => {
        const categoryNames = categories.map((categoryObject) => {
            return categoryObject.slug
        })
        setCategoriesArray(["view all", ...categoryNames])
    })}, [setCategoriesArray])

  
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };
  
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <List

          sx={{ bgcolor: 'background.paper'}}
        >
          <ListItem
            aria-expanded={open ? 'true' : 'false'}
            onClick={handleClickListItem}
          >
            <ListItemText
              primary="Category"
              secondary={categoriesArray[selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {categoriesArray.map((option, index) => (
            <Link key={option} to= {`/reviews/category/${option}`}>
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
            </Link>
          ))}
        </Menu>
      </div>
    );
  }
  

export default CategorySelect