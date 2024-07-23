import React, { useEffect, useState } from "react";
import { Box, Drawer, Button } from "@mui/material";
import AgesFilter from "../../components/filter/ages-filter";
import CostsFilter from "../../components/filter/costs.filter";
import { COSTS_FILTER_CHOICES } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUnitsRequest,
  setAgesFilter,
  setCostsFilter,
} from "../../redux/actions";
import UnitsTable from "../../components/table/table";
import FilterListIcon from "@mui/icons-material/FilterList";
import "./units.modules.scss";

export default function Units() {
  const dispatch = useDispatch();
  const agesFilter = useSelector((state) => state.agesFilter);
  const costsFilter = useSelector((state) => state.costsFilter);
  const units = useSelector((state) => state.units);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUnitsRequest());
  }, [dispatch]);

  const handleChangeRange = (value, resource) => {
    dispatch(setCostsFilter({ resource, value }));
  };

  const handlechangeAges = (newValue) => {
    dispatch(setAgesFilter(newValue));
  };
  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };
  const handleSaveFilter = () => {
    setIsDrawerOpen(false);

    dispatch(fetchUnitsRequest());
  };
  return (
    <Box component="main">
      <Button onClick={() => toggleDrawer(true)}>
        <FilterListIcon /> Filters
      </Button>
      <Drawer
        PaperProps={{ className: "drawerPaper" }}
        anchor="left"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
        hideBackdrop
      >
        <Box onKeyDown={() => toggleDrawer(false)} className="unitsDrawerBox">
          <AgesFilter
            agesFilter={agesFilter}
            handlechangeAges={handlechangeAges}
          ></AgesFilter>
          {COSTS_FILTER_CHOICES.map((item) => (
            <React.Fragment key={item}>
              <CostsFilter
                item={item}
                handleChangeRange={(value) => handleChangeRange(value, item)}
                value={costsFilter[item]}
              ></CostsFilter>
            </React.Fragment>
          ))}
          <Box className="actionsBox">
            <Button variant="contained" onClick={() => toggleDrawer(false)}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSaveFilter}>
              Save
            </Button>
          </Box>
        </Box>
      </Drawer>

      <UnitsTable data={units} />
    </Box>
  );
}
