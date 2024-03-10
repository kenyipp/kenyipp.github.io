import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

import { useStyles } from "./styles";
import type { PageSectionProps } from "./types";

export function PageSection({ tag, title, children }: PageSectionProps) {
	const styles = useStyles();
	return (
		<Box id={tag} sx={styles.pageContainer}>
			<Box>
				<Typography component="h1" variant="h1" sx={styles.pageTitle}>
					{title}
				</Typography>
			</Box>
			<Container sx={styles.contentContainer}>{children}</Container>
		</Box>
	);
}
