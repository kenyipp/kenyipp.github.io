import { type SxProps, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const useStyles = () => {
	const theme = useTheme();

	const container: SxProps = {
		display: "none",
		position: "sticky",
		top: 0,
		backgroundColor: alpha(theme.palette.background.paper, 0.8),
		boxShadow: theme.shadows[1],
		[`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
			display: "block",
		},
	};

	const content: SxProps = {
		minHeight: 64,
		px: 2,
	};

	return {
		container,
		content,
	};
};
