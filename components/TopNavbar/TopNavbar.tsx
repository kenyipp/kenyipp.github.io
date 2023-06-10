import { Bars3Icon } from "@heroicons/react/24/solid";
import { useAppContext } from "@ken/hooks/useAppContext";
import { Box, IconButton, Stack, SvgIcon } from "@mui/material";

import { useStyles } from "./styles";

export function TopNavbar() {
	const styles = useStyles();
	const { toggleSidebar } = useAppContext();

	return (
		<Box component="header" sx={styles.container}>
			<Stack
				alignItems="center"
				direction="row"
				justifyContent="space-between"
				spacing={2}
				sx={styles.content}
			>
				<IconButton onClick={() => toggleSidebar()}>
					<SvgIcon fontSize="small">
						<Bars3Icon color="white" />
					</SvgIcon>
				</IconButton>
			</Stack>
		</Box>
	);
}
