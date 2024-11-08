import { Box, Typography } from "@mui/material";
import moment from "moment";

import { PageSection } from "../PageSection";

export function AboutMe() {
	return (
		<PageSection tag="about-me" title="About Me">
			<Box>
				<Typography component="h2" variant="h4">
					I am a Full Stack Developer @ Mogo Finance Technology Inc.
				</Typography>
				<br />
				I'm a Full Stack Developer with{" "}
				{moment().diff(moment().year(2017), "year")} years of experience
				building high-performance, scalable applications, especially in
				e-commerce and fintech. I'm passionate about AWS CDK and love using it
				to design event-driven architectures with serverless and managed
				services like Lambda, SQS, and DynamoDB.
				<br />
				<br />
				I’m passionate about writing clean, efficient code with strong test
				coverage to ensure top-notch performance and scalability while keeping
				costs down.
				<br />
				<br />I thrive in fast-paced environments and love tackling challenges
				with a focus on innovation and user-centric solutions.
			</Box>
		</PageSection>
	);
}
