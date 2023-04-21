import { fetchCategories } from "../api";
import { useState, useEffect } from "react";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "@mui/material";

const CategorySelect = () => {
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    fetchCategories().then((categories) => {
      const categoryNames = categories.map((categoryObject) => {
        return categoryObject.slug;
      });
      setCategoriesArray(["view all", ...categoryNames]);
    });
  }, [setCategoriesArray]);

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
      <List sx={{ bgcolor: "clear" }}>
        <ListItem
          button
          aria-expanded={open ? "true" : "false"}
          onClick={handleClickListItem}
          style={{ maxWidth: "fit-content" }}
        >
          <ListItemText
            primary="Category"
            secondary={categoriesArray[selectedIndex]}
            secondaryTypographyProps={{ color: "white" }}
          />
        </ListItem>
      </List>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {categoriesArray.map((option, index) => (
          <Link key={option} href={`/reviews/category/${option}`} color="inherit" underline="none">
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
};

export default CategorySelect;
