import React, { useEffect } from "react";
import {
  TableContainer,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Table,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchUnitDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";
import "./unit-detail.modules.scss";

export default function UnitDetail() {
  const unit = useSelector((state) => state.selectedUnit);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUnitDetail(id));
  }, [dispatch]);
  return (
    <TableContainer component={Paper} className="unitDetailTableContainer">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>ID :</TableCell>
            <TableCell>{unit.id}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Name :</TableCell>
            <TableCell>{unit.name}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Description :</TableCell>
            <TableCell>{unit.description}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Min. Required Age :</TableCell>
            <TableCell>{unit.age}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Wood Cost :</TableCell>
            <TableCell>{unit.cost?.wood}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Food Cost :</TableCell>
            <TableCell>{unit.cost?.food}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Gold Cost :</TableCell>
            <TableCell>{unit.cost?.gold}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Build Time :</TableCell>
            <TableCell>{unit.build_time}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Reload Time :</TableCell>
            <TableCell>{unit.reload_time}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Hit Point :</TableCell>
            <TableCell>{unit.hit_points}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Attack :</TableCell>
            <TableCell>{unit.attack}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Accurancy :</TableCell>
            <TableCell>{unit?.accuracy}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
