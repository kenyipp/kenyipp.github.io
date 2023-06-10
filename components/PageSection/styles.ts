import { SxProps, useTheme } from "@mui/material";

export const useStyles = () => {
	const theme = useTheme();

	const pageContainer: SxProps = {
		mb: 2,
		backgroundColor: theme.palette.background.paper
	};

	const pageTitle: SxProps = {
		display: "inline-flex",
		fontSize: "1.5rem",
		pt: 4,
		pb: 1,
		pl: 4,
		borderBottom: "3px solid #ffcd38"
	};

	const contentContainer: SxProps = {
		pt: 4,
		pb: 7
	};

	return {
		pageContainer,
		pageTitle,
		contentContainer
	};
};
