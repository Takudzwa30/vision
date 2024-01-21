import React, { ChangeEvent } from "react";
import Style from "./ToggleSwitch.module.css";
import classNames from "@/utils/classNames";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  disabled?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
}) => {
  return (
    <div className={Style.mainContainer}>
      <div className={Style.container}>
        <div className={Style.toggleSwitch}>
          <input
            type="checkbox"
            checked={checked}
            className={Style.checkbox}
            onChange={onChange}
            name={label}
            id={label}
            disabled={disabled}
          />
          <label
            className={classNames(
              Style.wrapper,
              disabled ? Style.disabled : ""
            )}
            htmlFor={label}
          >
            <span className={Style.inner} />
            <span className={Style.switch} />
          </label>
        </div>
      </div>
      <p>{label}</p>
    </div>
  );
};

export default ToggleSwitch;
