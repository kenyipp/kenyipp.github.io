import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
	timelineOppositeContentClasses,
} from "@mui/lab";
import {
	Avatar,
	Box,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

import { PageSection } from "../PageSection";
import { PageSubtitle } from "../PageSubtitle";

export function EducationsAndAwards() {
	const theme = useTheme();
	const isLargeScreenOrAbove = useMediaQuery(theme.breakpoints.up("md"), {
		defaultMatches: true,
	});
	return (
		<PageSection title="Educations And Awards" tag="education-award">
			<Stack spacing={5} mt={5}>
				<Box>
					<PageSubtitle title="Education" />
					<Timeline
						sx={{
							[`& .${timelineOppositeContentClasses.root}`]: {
								flex: 0.3,
							},
						}}
					>
						<TimelineItem>
							<TimelineOppositeContent>
								<Typography
									component={Link}
									href="https://www.cityu.edu.hk"
									target="_blank"
									underline="none"
									color="white"
								>
									City University of Hong Kong
								</Typography>
								<Typography color="text.secondary">
									September 2014 - October 2018
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot color="info" />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Typography variant="h6" component="h6" sx={{ mb: 1 }}>
									Bachelor of Engineering in Information Engineering
								</Typography>
								<Typography variant="body2" component="p">
									Second Class Honours, Upper Division
								</Typography>
							</TimelineContent>
						</TimelineItem>
					</Timeline>
				</Box>
				<Box>
					<PageSubtitle title="Awards" />
					<List component="div">
						<Stack direction="column" spacing={2} width="100%">
							<Stack
								spacing={2}
								width="100%"
								direction={isLargeScreenOrAbove ? "row" : "column"}
							>
								<ListItem>
									<ListItemIcon>
										<Avatar alt="Amazon Web Services" src="/amazon.jpg" />
									</ListItemIcon>
									<ListItemText
										primary="AWS Certified Solutions Architect - Associate"
										secondary="Amazon Web Services"
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<Avatar alt="Oracle" src="/oracle.png" />
									</ListItemIcon>
									<ListItemText
										primary="Oracle Cloud Infrastructure 2024 Certified Foundations Associate"
										secondary="Oracle"
									/>
								</ListItem>
							</Stack>
							<Stack direction="row" spacing={2} width="100%">
								<ListItem>
									<ListItemIcon>
										<Avatar
											alt="Stanford University of Business"
											src="/stanford.jpg"
										/>
									</ListItemIcon>
									<ListItemText
										primary="Go-to-market Boot Camp certificate, Entrepreneur"
										secondary="Stanford University of Business"
									/>
								</ListItem>
							</Stack>
						</Stack>
					</List>
				</Box>
			</Stack>
		</PageSection>
	);
}
