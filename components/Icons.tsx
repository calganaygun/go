import {
  AlertCircle,
  CheckCircle,
  LucideIcon,
  XCircle,
  MoveUpRight,
  MoveDownRight,
  MoveDownLeft,
  Camera,
  Menu,
  ZapIcon,
  WalletIcon,
  Copy,
  Currency,
  Settings2,
} from "lucide-react-native";
import { cssInterop } from "nativewind";

function interopIcon(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}

interopIcon(AlertCircle);
interopIcon(CheckCircle);
interopIcon(XCircle);
interopIcon(MoveDownRight);
interopIcon(MoveUpRight);
interopIcon(MoveDownLeft);
interopIcon(Camera);
interopIcon(Menu);
interopIcon(ZapIcon);
interopIcon(WalletIcon);
interopIcon(Copy);
interopIcon(Currency);
interopIcon(Settings2);

export {
  AlertCircle,
  Camera,
  CheckCircle,
  XCircle,
  MoveDownRight,
  MoveUpRight,
  MoveDownLeft,
  Menu,
  ZapIcon,
  WalletIcon,
  Copy,
  Currency,
  Settings2
};
