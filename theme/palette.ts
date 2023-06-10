import { common } from "@mui/material/colors";
import { PaletteOptions, alpha } from "@mui/material/styles";

import { error, indigo, info, neutral, success, warning } from "./colors";

export const palette: PaletteOptions = {
	mode: "dark",
	primary: warning,
	action: {
		active: neutral[500],
		disabled: alpha(neutral[900], 0.38),
		disabledBackground: alpha(neutral[900], 0.12),
		focus: alpha(neutral[900], 0.16),
		hover: alpha(neutral[900], 0.04),
		selected: alpha(neutral[900], 0.12)
	},
	background: {
		default: "#000",
		paper: "rgba(34, 34, 34, 1)"
	},
	divider: "#333",
	error,
	info,
	success,
	text: {
		// primary: neutral[900],
		// secondary: neutral[500],
		// disabled: alpha(neutral[900], 0.38)
	},
	warning
};
