import { Typography } from "@mui/material";

import { useStyles } from "./styles";
import type { PageSubtitleProps } from "./types";

export function PageSubtitle({ title }: PageSubtitleProps) {
	const styles = useStyles();
	return (
		<Typography component="h4" variant="h6" sx={styles.title}>
			{title}
		</Typography>
	);
}
