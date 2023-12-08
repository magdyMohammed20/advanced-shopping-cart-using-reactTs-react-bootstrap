import React from "react";
import { priceFormatTypes } from "../types/currencyTypes";

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "EGP",
  style: "currency",
});

const FormatCurrency: React.FC<priceFormatTypes> = ({ price }) => {
  return <div>{CURRENCY_FORMATTER.format(price)}</div>;
};

export default FormatCurrency;
