import { SxProps } from "@mui/material";

export const useStyles = () => {
	const title: SxProps = {
		display: "inline-flex",
		pb: 1,
		pr: 2,
		borderBottom: "2px solid #ffcd38"
	};
	return {
		title
	};
};
