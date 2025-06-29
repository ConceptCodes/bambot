import { RiGamepadFill } from "@remixicon/react";

import { ControlButtonProps } from "@/types";
import GlassButton from "./GlassButton";

export default function GamepadControlButton({
  showControlPanel,
  onToggleControlPanel,
}: ControlButtonProps) {
  return (
    <GlassButton
      onClick={onToggleControlPanel}
      icon={<RiGamepadFill size={24} />}
      tooltip="Gamepad Control"
      pressed={showControlPanel}
    />
  );
}
