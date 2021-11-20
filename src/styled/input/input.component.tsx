import React from "react";
import { DatePicker, Input } from "antd";
import { InputProps } from "antd/lib/input";
import { DatePickerProps } from "antd/lib/date-picker";

import styles from "./input.module.css";


const InputText = (props: InputProps) => (
  <Input className={styles.text} {...props} />
);


export { InputText };
