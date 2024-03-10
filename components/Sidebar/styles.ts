import { type SxProps, useTheme } from "@mui/material";

const IconSize = 100;

export const useStyles = () => {
	const theme = useTheme();

	const paper: SxProps = {
		width: "280px",
		backgroundColor: theme.palette.background.paper,
		border: 0,
		boxShadow: theme.shadows[1],
	};

	const siteTitleBlock: SxProps = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		mt: 4,
		mb: 4,
	};

	const siteTitle: SxProps = {
		fontSize: "2rem",
		mb: 1,
	};

	const siteSubtitle: SxProps = {
		fontSize: "0.9rem",
	};

	const list: SxProps = {
		padding: 0,
		margin: 0,
		listStyle: "none",
		textAlign: "center",
		transition: "all 0.3s",
		"& > li": {
			marginTop: "0 !important",
		},
	};

	const listItem: SxProps = {
		width: "100%",
		display: "block",
		padding: 1,
		transition: "background-color 0.3s ease-in-out",
		"&:hover": {
			backgroundColor: "#333",
		},
	};

	const listItemActive: SxProps = {
		display: "block",
		width: "100%",
		padding: 1,
		backgroundColor: "#333",
		borderRight: "2px solid #ffcd38",
	};

	const listItemText: SxProps = {
		fontSize: "0.9rem",
		fontWeight: 500,
	};

	const avatar: SxProps = {
		width: IconSize,
		height: IconSize,
		marginBottom: 2,
	};

	return {
		paper,
		siteTitleBlock,
		siteTitle,
		siteSubtitle,
		list,
		listItem,
		listItemActive,
		listItemText,
		avatar,
	};
};
