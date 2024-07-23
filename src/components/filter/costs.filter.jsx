import React from "react";
import { Box, Slider, FormControlLabel, Checkbox } from "@mui/material";

function CostsFilter({ value, item, handleChangeRange }) {
  return (
    <Box sx={{ width: 300, display: "flex", alignItems: "center" }}>
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
