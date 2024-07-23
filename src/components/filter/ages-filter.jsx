import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { AGES_FILTER_CHOICES } from "../../utils/constants";

export default function AgesFilter({ agesFilter, handlechangeAges }) {
  return (
    <ToggleButtonGroup
      color="primary"
      value={agesFilter}
      exclusive
      onChange={(_event, newValue) => handlechangeAges(newValue)}
      aria-label="Platform"
    >
      {AGES_FILTER_CHOICES.map((item) => (
        <ToggleButton key={item} value={item}>
          {item}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
