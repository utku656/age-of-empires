import React from "react";
import { Box, Slider, FormControlLabel, Checkbox } from "@mui/material";
import "./filter.modules.scss";

function CostsFilter({ value, item, handleChangeRange }) {
  return (
    <Box className="costFilterBox">
      <FormControlLabel
        control={
          <Checkbox
            checked={value !== null}
            onChange={(e) =>
              handleChangeRange(e.target.checked ? [0, 10] : null)
            }
          />
        }
        label={item}
      />

      <Slider
        value={value || [0, 10]}
        onChange={(e, newValue) => handleChangeRange(newValue)}
        disabled={value === null}
        valueLabelDisplay="auto"
        max={200}
        min={0}
      />
    </Box>
  );
}
export default React.memo(CostsFilter);
