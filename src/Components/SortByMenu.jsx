import { useState } from "react"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


const SortByMenu = ({setSortOption}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const sortOptionsArray = [
        "newest", "oldest", "most votes", "most comments"
    ]


  
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };
  
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setSortOption(sortOptionsArray[index])
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
          button
          aria-expanded={open ? 'true' : 'false'}
          onClick={handleClickListItem}
          style={{maxWidth: 'fit-content'
          }}
          >
            <ListItemText
              primary="Sort by"
              secondary={sortOptionsArray[selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {sortOptionsArray.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }

  export default SortByMenu