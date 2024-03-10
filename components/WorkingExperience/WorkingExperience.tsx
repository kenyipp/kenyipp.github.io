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
import { Link, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";

import { PageSection } from "../PageSection";
import { useWorkingExperience } from "./utils";

export function WorkingExperience() {
	const items = useWorkingExperience();
	return (
		<PageSection title="Working Experience" tag="working-experience">
			<Timeline
				sx={{
					[`& .${timelineOppositeContentClasses.root}`]: {
						flex: 0.3,
					},
				}}
			>
				{items.map((workExperience, index) => {
					const from = moment(workExperience.from, "YYYY-MM").format(
						"MMMM YYYY",
					);
					const to = workExperience.to
						? moment(workExperience.to, "YYYY-MM").format("MMMM YYYY")
						: "Present";
					const duration = moment.duration(
						(workExperience.to
							? moment(workExperience.to, "YYYY-MM")
							: moment()
						).diff(moment(workExperience.from, "YYYY-MM")),
					);
					const durationYears = duration.years();
					const durationMonths = duration.months();
					return (
						<TimelineItem key={workExperience.company}>
							<TimelineOppositeContent>
								<Typography
									component={Link}
									href={workExperience.website}
									target="_blank"
									underline="none"
									color="white"
								>
									{workExperience.company}
								</Typography>
								<Typography color="text.secondary">
									{from} - {to}
								</Typography>
								<Typography color="text.secondary">
									{durationYears > 0 && `${durationYears} years `}
									{durationMonths} months
								</Typography>
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot color={index === 0 ? "success" : "info"} />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Typography variant="h6" component="span">
									{workExperience.title}
								</Typography>
								<List>
									{workExperience.descriptions.map((description) => (
										<ListItem key={description}>
											<ListItemText primary={description} />
										</ListItem>
									))}
									<ListItem>
										<ListItemText
											primary={`Tech stack: ${workExperience.techStacks.join(
												", ",
											)}`}
										/>
									</ListItem>
								</List>
							</TimelineContent>
						</TimelineItem>
					);
				})}
			</Timeline>
		</PageSection>
	);
}
