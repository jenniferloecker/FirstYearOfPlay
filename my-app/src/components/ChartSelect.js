import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  formControl: {
    margin: 20,
  },
  select: {
    height: 50,
  },
}));

function ChartSelect({ chartChange, chartType }) {
  const classes = useStyles();
  const handleChange = (event) => {
    chartChange(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Chart Type</InputLabel>
      <Select
        className={classes.select}
        value={chartType}
        onChange={handleChange}
      >
        <MenuItem value={"line"}>line</MenuItem>
        <MenuItem value={"bar"}>Bar</MenuItem>
      </Select>
    </FormControl>
  );
}

ChartSelect.propTypes = {
  chartChange: PropTypes.func.isRequired,
  chartType: PropTypes.number.isRequired,
};

export default ChartSelect;
