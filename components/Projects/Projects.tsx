import { Box, Divider, Link, Typography } from "@mui/material";

import { PageSection } from "../PageSection";

export function Projects() {
	return (
		<PageSection title="Side Projects" tag="projects">
			<ProjectRealWorld />
			<Divider />
			<ProjectDiscuz />
		</PageSection>
	);
}

function ProjectDiscuz() {
	return (
		<Box py={3}>
			<Typography component="h3" variant="h5" mb={1}>
				Discuz
			</Typography>
			<Typography variant="subtitle2">
				Repository Url:{" "}
				<Link
					href="https://github.com/kenyipp/discuz"
					underline="none"
					target="_blank"
				>
					https://github.com/kenyipp/discuz
				</Link>
			</Typography>
			<br />
			This repository represents a Rust-based backend implementation for a forum
			program, drawing inspiration from platforms such as Reddit. Its
			development took place during my Rust programming language studies. The
			primary motivation behind creating this repository was the observation
			that existing Rust repositories on GitHub either lacked certain
			functionalities or were not kept up-to-date.
			<br />
			<br />
			Similar to my other repository, I have implemented{" "}
			<Link
				href="https://github.com/kenyipp/discuz/tree/master/libs/core/tests"
				target="_blank"
			>
				Unit Tests
			</Link>
			,{" "}
			<Link
				href="https://github.com/kenyipp/discuz/blob/master/libs/core/tests/unit/migration.rs"
				target="_blank"
			>
				Database Migration Tests
			</Link>
			, and{" "}
			<Link
				href="https://github.com/kenyipp/discuz/tree/master/tests"
				target="_blank"
			>
				Integration Tests
			</Link>
			. I have set up a{" "}
			<Link
				href="https://github.com/kenyipp/discuz/blob/master/.github/workflows/ci.yml"
				target="_blank"
			>
				GitHub pipeline
			</Link>{" "}
			for linting and testing purposes. Within this pipeline, a real MySQL
			server is established to execute the database migration test.
			Additionally, the server is launched and tested using Newsman.
			<br />
			<br />
			To maintain a clean and well-organized codebase, the repository strictly
			adheres to the repository design pattern. It follows a monorepo structure,
			enabling efficient management and collaborative efforts across various
			components of the forum program.
			<br />
			<br />
			Actix-web has been employed as the server framework, error-stack for
			handling errors, and sea-orm as the chosen database ORM solution.
		</Box>
	);
}

function ProjectRealWorld() {
	return (
		<Box py={3}>
			<Typography component="h3" variant="h5" mb={1}>
				RealWorld Node.js Example App
			</Typography>
			<Typography variant="subtitle2">
				Repository Url:{" "}
				<Link
					href="https://github.com/kenyipp/realworld-nodejs-example-app"
					underline="none"
					target="_blank"
				>
					https://github.com/kenyipp/realworld-nodejs-example-app
				</Link>
			</Typography>
			<br />
			This repository serves as a demonstration of my programming skills and
			showcases my expertise in software development. Developed in adherence to
			the{" "}
			<Link href="https://github.com/gothinkster/realworld" target="_blank">
				RealWorld
			</Link>{" "}
			API spec, it has earned recognition from the{" "}
			<Link href="https://codebase.show" target="_blank">
				Codebase.show
			</Link>{" "}
			team and is included on the{" "}
			<Link
				href="https://codebase.show/projects/realworld?category=backend&language=typescript"
				target="_blank"
			>
				project page
			</Link>
			.
			<br />
			<br />
			The project is developed with TypeScript, Express.js, and Knex, creating a
			robust and reliable foundation. To maintain codebase stability, I
			implemented a comprehensive suite of
			<Link
				href="https://github.com/kenyipp/realworld-nodejs-example-app/tree/develop/packages/core/tests"
				target="_blank"
			>
				unit tests
			</Link>{" "}
			and{" "}
			<Link
				href="https://github.com/kenyipp/realworld-nodejs-example-app/tree/develop/apps/article/tests"
				target="_blank"
			>
				integration tests
			</Link>{" "}
			that validate feature functionality and help prevent regressions when
			introducing new features. The application is deployed using AWS Lambda and
			API Gateway, leveraging
			<Link
				href="https://github.com/kenyipp/realworld-nodejs-example-app-infra"
				target="_blank"
			>
				CDK for infrastructure as code
			</Link>
			, providing scalability and resilience.
			<br />
			<br />
			In my pursuit of continuous improvement, I actively explore new
			technologies and incorporate them into this project. Consequently, the
			repository is regularly updated with the latest features, optimizations,
			and industry best practices.
			<br />
			<br />
			To uphold high code quality standards, I have established a{" "}
			<Link
				href="https://github.com/kenyipp/realworld-nodejs-example-app/blob/master/.github/workflows/ci.yaml"
				target="_blank"
			>
				GitHub Actions pipeline
			</Link>
			. This pipeline automates code quality checks and enforces a stringent
			code coverage policy. It encompasses various types of tests, including{" "}
			<Link
				href="https://github.com/kenyipp/realworld-nodejs-example-app/tree/develop/packages/core/tests"
				target="_blank"
			>
				unit tests
			</Link>
			,{" "}
			<Link
				href="https://github.com/kenyipp/realworld-nodejs-example-app/tree/develop/apps/article/tests"
				target="_blank"
			>
				integration tests
			</Link>
			,{" "}
			<Link
				href="https://github.com/kenyipp/realworld-nodejs-example-app/tree/develop/tests/integration"
				target="_blank"
			>
				end-to-end tests
			</Link>
			, linting, and database migration tests. Every pull request or commit must
			attain a minimum code coverage of 90%, ensuring thorough testing of the
			application. The resulting code coverage report is then uploaded to{" "}
			<Link
				href="https://app.codecov.io/gh/kenyipp/realworld-nodejs-example-app"
				target="_blank"
			>
				Codecov
			</Link>
			, providing valuable insights and highlighting areas for further
			improvement.
			<br />
			<br />
			By leveraging industry-standard tools, adhering to best practices, and
			maintaining an unwavering commitment to continuous improvement, this
			repository not only demonstrates my programming skills but also reflects
			my dedication to delivering high-quality and maintainable code.
		</Box>
	);
}
