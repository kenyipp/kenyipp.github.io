import { useAppContext } from "@ken/hooks/useAppContext";
import { Facebook, GitHub, LinkedIn, Mail, Twitter } from "@mui/icons-material";
import {
	Avatar,
	Box,
	ButtonBase,
	Divider,
	Drawer,
	IconButton,
	Typography,
	useMediaQuery
} from "@mui/material";
import { Stack, useTheme } from "@mui/system";
import { useRouter } from "next/router";
import { Fragment } from "react";

import { useStyles } from "./styles";
import { SidebarProps } from "./types";
import { useSidebarContent } from "./utils";

export const Sidebar = ({ onSidebarItemClick }: SidebarProps) => {
	const theme = useTheme();
	const router = useRouter();
	const styles = useStyles();
	const items = useSidebarContent();
	const { isSidebarOpen, closeSidebar } = useAppContext();

	const isLargeScreenOrAbove = useMediaQuery(theme.breakpoints.up("md"), {
		defaultMatches: true
	});

	const onButtonClick = async ({ tag }: { tag: string }) => {
		router.push({ pathname: router.pathname, query: { tag } }, undefined, {
			shallow: true
		});
		onSidebarItemClick({ tag });
	};

	return (
		<Drawer
			anchor="left"
			open={isSidebarOpen}
			sx={{
				display: "block",
				[`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
					display:
						typeof window === "undefined"
							? "none !important"
							: "block"
				}
			}}
			variant={isLargeScreenOrAbove ? "permanent" : "temporary"}
			PaperProps={{ sx: styles.paper }}
			onClose={() => closeSidebar()}
		>
			<Box sx={styles.siteTitleBlock}>
				<Avatar alt="Ken Yip" src="/icon.jpg" sx={styles.avatar} />
				<Typography sx={styles.siteTitle} variant="h1">
					Ken Yip
				</Typography>
				<Typography sx={styles.siteSubtitle} variant="subtitle1">
					Full Stack Developer
				</Typography>
			</Box>
			<Stack component="ul" spacing={0.5} sx={styles.list}>
				<li>
					<Divider />
				</li>
				{items.map((item, index) => (
					<Fragment key={index}>
						<li>
							<ButtonBase
								sx={
									router.query?.tag === item.tag
										? styles.listItemActive
										: styles.listItem
								}
								onClick={() => onButtonClick({ tag: item.tag })}
							>
								<Typography
									component="span"
									sx={styles.listItemText}
								>
									{item.title}
								</Typography>
							</ButtonBase>
						</li>
						<li>
							<Divider />
						</li>
					</Fragment>
				))}
			</Stack>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="center"
				spacing={1}
				mt={3}
			>
				<IconButton href="https://github.com/kenyipp" target="_blank">
					<GitHub fontSize="small" />
				</IconButton>
				<IconButton
					href="https://www.linkedin.com/in/yip-ken-70723413b"
					target="_blank"
				>
					<LinkedIn fontSize="small" />
				</IconButton>
				<IconButton href="https://twitter.com/kenyipcc" target="_blank">
					<Twitter fontSize="small" />
				</IconButton>
				<IconButton
					href="https://www.facebook.com/ken2026"
					target="_blank"
				>
					<Facebook fontSize="small" />
				</IconButton>
				<IconButton href="mailto:ken20206@gmail.com" target="_blank">
					<Mail fontSize="small" />
				</IconButton>
			</Stack>
		</Drawer>
	);
};
