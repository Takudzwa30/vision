"use client";

// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";

// Styles
import Style from "./PlatformSettings.module.css";
import ToggleSwitch from "@/components/ui/toggleSwitch/ToggleSwitch";
import { useState } from "react";

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
    <div>
      <ToggleSwitch
        checked={checked}
        label={"jfskjfds"}
        onChange={() => setChecked((prev) => !prev)}
      />
      <p>switch</p>
    </div>
  );
};

export default PlatformSettings;
