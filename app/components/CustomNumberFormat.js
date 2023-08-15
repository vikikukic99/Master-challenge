'use client'
import {NumericFormat} from "react-number-format";

const CustomNumberFormat = ({value, suffix = ''}) => {

    return  <NumericFormat value={value}  thousandSeparator={','} decimalSeparator={'.'} displayType="text" suffix={suffix}/>;
}

export default CustomNumberFormat