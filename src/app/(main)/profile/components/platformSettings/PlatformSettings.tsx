"use client";
import { useState } from "react";

// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";
import ToggleSwitch from "@/components/ui/toggleSwitch/ToggleSwitch";

// Styles
import Style from "./PlatformSettings.module.css";

interface SwitchProps {
  tick: boolean;
}

const PlatformSettings: React.FC = () => {
  return (
    <CardWrapper>
      <h1>PlatformSettings</h1>
      <Switch tick={true} />
    </CardWrapper>
  );
};

const Switch: React.FC<SwitchProps> = ({ tick }) => {
  const [checked, setChecked] = useState(tick);
  return (
    <ToggleSwitch
      checked={checked}
      label={"jfskjfds"}
      onChange={() => setChecked((prev) => !prev)}
    />
  );
};

export default PlatformSettings;
