import { useState, useContext, useEffect } from "react";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { UserContext } from "../Context/User";
import { fetchUsers } from "../api";

const SelectUser = () => {
  const {setUser} = useContext(UserContext);
  const [usersArray, setUsersArray] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
      fetchUsers()
        .then((response) => {
        const usernameArray = response.map((userObj) => {
            return userObj.username
        })
          setUsersArray(usernameArray);
        })
  }, [setUsersArray])

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setUser(usersArray[index]);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div>
        <List sx={{ bgcolor: "clear" }}>
          <ListItem
            button
            aria-expanded={open ? "true" : "false"}
            onClick={handleClickListItem}
            style={{ maxWidth: "fit-content" }}
          >
            <ListItemText
              primary="Sign in as"
              secondary={usersArray[selectedIndex]}
              secondaryTypographyProps={{color: "white"}}
            />
          </ListItem>
        </List>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {usersArray.map((option, index) => (
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
};

export default SelectUser;
