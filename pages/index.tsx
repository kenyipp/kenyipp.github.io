import { AboutMe } from "@ken/components/AboutMe";
import { EducationsAndAwards } from "@ken/components/EducationsAndAwards";
import { Projects } from "@ken/components/Projects";
import { Sidebar } from "@ken/components/Sidebar";
import { TopNavbar } from "@ken/components/TopNavbar";
import { WorkingExperience } from "@ken/components/WorkingExperience";
import { useScrollHandler } from "@ken/hooks";
import { useStyles } from "@ken/styles";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Page: NextPage = () => {
	const styles = useStyles();
	const { onMainContentScroll } = useScrollHandler();
	const router = useRouter();

	useEffect(() => {
		const tag = router.query.tag;
		if (!tag) {
			router.push(
				{ pathname: router.pathname, query: { tag: "about-me" } },
				undefined,
				{
					shallow: true,
				},
			);
		}
	}, [router]);

	return (
		<Box sx={styles.container}>
			<TopNavbar />
			<Sidebar
				onSidebarItemClick={({ tag }) => {
					document.getElementById(tag)?.scrollIntoView({ behavior: "smooth" });
				}}
			/>
			<Box
				id="main-content"
				sx={styles.main}
				onScroll={() => onMainContentScroll()}
			>
				<AboutMe />
				<Projects />
				<WorkingExperience />
				<EducationsAndAwards />
			</Box>
		</Box>
	);
};

export default Page;
