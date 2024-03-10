import { type SxProps, useTheme } from "@mui/material";

export const useStyles = () => {
	const theme = useTheme();

	const container: SxProps = {
		position: "relative",
		minHeight: "100%",
		height: "100%",
	};

	const main: SxProps = {
		pl: "15px",
		height: "100%",
		overflow: "scroll",
		marginLeft: "280px",
		[`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
			marginLeft: 0,
			pl: 0,
		},
	};

	return {
		container,
		main,
	};
};
