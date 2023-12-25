import { MenuItem } from "@mui/material";

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'RUB',
    label: '₽',
  },
];

export const currenciesData = currencies.map((option) => (
  <MenuItem key={option.value} value={option.value}>
    {option.label}
  </MenuItem>
));