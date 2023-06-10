import { SxProps, useTheme } from "@mui/material";

export const useStyles = () => {
	const theme = useTheme();

	const container: SxProps = {
		display: "flex",
		height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.palette.background.paper
	};

	return {
		container
	};
};
