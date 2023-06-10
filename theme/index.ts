import { createTheme as createMuiTheme } from "@mui/material";

import { breakpoints } from "./breakpoints";
import { components } from "./components";
import { palette } from "./palette";
import { shadows } from "./shadows";
import { shape } from "./shape";
import { typography } from "./typography";

export const theme = createMuiTheme({
	components,
	breakpoints,
	palette,
	shadows,
	shape,
	typography
});
