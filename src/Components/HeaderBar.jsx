import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SelectUser from "./SelectUser";
import CategorySelect from "./CategorySelect";
import SortByMenu from "./SortByMenu";
import { Link } from "@mui/material";

export default function HeaderBar({
  renderSortCategoryOptions,
  setSortOption,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ px: 3 }}>
          {renderSortCategoryOptions ? <CategorySelect /> : null}
          {renderSortCategoryOptions ? (
            <SortByMenu setSortOption={setSortOption} />
          ) : null}
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" color="inherit" underline="none">
              Board Game Reviews
            </Link>
          </Typography>
          <SelectUser />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
