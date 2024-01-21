"use client";
import { useState } from "react";

// Components
import CardWrapper from "@/components/ui/cardWrapper/CardWrapper";
import ToggleSwitch from "@/components/ui/toggleSwitch/ToggleSwitch";

// Styles
import Style from "./PlatformSettings.module.css";

interface SwitchProps {
  tick: boolean;
  label: string;
}

interface SettingsItem {
  tick: boolean;
  label: string;
}

interface DataItem {
  title: string;
  settings: SettingsItem[];
}

const data: DataItem[] = [
  {
    title: "ACCOUNT",
    settings: [
      {
        tick: true,
        label: "Email me when someone follows me",
      },
      {
        tick: false,
        label: "Email me when someone replies my email",
      },
      {
        tick: true,
        label: "Email me when someone mentions me",
      },
    ],
  },
  {
    title: "APPLICATION",
    settings: [
      {
        tick: false,
        label: "New launches and projects",
      },
      {
        tick: false,
        label: "Monthly product updates",
      },
      {
        tick: true,
        label: "Subscribe to newsletter",
      },
      {
        tick: true,
        label: "Receive mails weekly",
      },
    ],
  },
];

const PlatformSettings: React.FC = () => {
  return (
    <CardWrapper>
      <div className={Style.heading}>
        <h5>Platform Settings</h5>
      </div>
      <div className={Style.swtchGrid}>
        {data.map((item, index) => (
          <SwitchWrapper
            key={index}
            title={item.title}
            settings={item.settings}
          />
        ))}
      </div>
    </CardWrapper>
  );
};

const Switch: React.FC<SwitchProps> = ({ tick, label }) => {
  const [checked, setChecked] = useState(tick);
  return (
    <ToggleSwitch
      checked={checked}
      label={label}
      onChange={() => setChecked((prev) => !prev)}
    />
  );
};

const SwitchWrapper: React.FC<{ title: string; settings: SettingsItem[] }> = ({
  settings,
  title,
}) => {
  return (
    <div className={Style.switchWrapper}>
      <p className={Style.title}>{title}</p>
      <div className={Style.switchesGrid}>
        {settings.map((setting, index) => (
          <Switch key={index} tick={setting.tick} label={setting.label} />
        ))}
      </div>
    </div>
  );
};

export default PlatformSettings;
