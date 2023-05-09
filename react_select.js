import React, { useState } from "react";
import { Select as MuiSelect, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  select: {
    minWidth: 120,
  },
}));

const Select = ({ options, label, value, onChange }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiSelect
      className={classes.select}
      label={label}
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </MuiSelect>
  );
};

export default Select;
