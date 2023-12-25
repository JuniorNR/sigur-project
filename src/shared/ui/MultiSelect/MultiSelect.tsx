import { forwardRef, memo } from "react";

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Props } from "./MultiSelect.interface";
import { FilledInput } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultiselectComponent = memo(forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 300, background: '#999' }}>
        <InputLabel id="demo-multiple-checkbox-label">{props.label}</InputLabel>
        <Select
          ref={ref}
          sx={{ height: '100%' }}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<FilledInput />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {props.values.map((value) => (
            <MenuItem key={value} value={value}>
              <Checkbox checked={personName.indexOf(value) > -1} />
              <ListItemText primary={value} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}));

MultiselectComponent.displayName = 'MultiSelect';

export const MultiSelect = MultiselectComponent;