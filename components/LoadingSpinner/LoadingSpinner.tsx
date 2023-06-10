import { Box } from "@mui/material";
import { FallingLines } from "react-loader-spinner";

import { useStyles } from "./styles";

export const LoadingSpinner = () => {
	const styles = useStyles();
	return (
		<Box sx={styles.container}>
			<FallingLines color="#FFCD38" width="100" visible={true} />
		</Box>
	);
};
