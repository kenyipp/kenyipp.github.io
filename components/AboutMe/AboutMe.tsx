import { Box, Typography } from "@mui/material";

import { PageSection } from "../PageSection";

export function AboutMe() {
	return (
		<PageSection tag="about-me" title="About Me">
			<Box>
				<Typography component="h2" variant="h4">
					I am a Full Stack Developer @ Mogo Finance Technology Inc.
				</Typography>
				<br />
				With nearly 7 years of experience as a seasoned full-stack developer, I
				have consistently crafted resilient, scalable, and optimized systems by
				employing clean, maintainable, and testable code. have consistently
				developed robust, scalable, and efficient systems using clean,
				maintainable, and testable code.
				<br />
				<br />
				My greatest strength lies in delivering high-quality code along with
				well-written test cases in a timely manner.
				<br />
				<br />I am highly motivated to continue learning and exploring new
				technologies to enhance my skills and knowledge, ensuring that I stay
				up-to-date with the latest industry trends and best practices.
			</Box>
		</PageSection>
	);
}
