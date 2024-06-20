import { last, throttle } from "lodash";
import { useRouter } from "next/router";

export const useScrollHandler = () => {
	const tags = [
		"about-me",
		"working-experience",
		"projects",
		"education-award",
	];

	const router = useRouter();

	const onMainContentScroll = throttle(() => {
		const container = document.getElementById("main-content");
		const scrollTop = container?.scrollTop ?? 0;
		let scrollTag = last(tags);
		for (let index = 0; index < tags.length - 1; index++) {
			const tag = tags[index];
			if (tag) {
				const element = document.getElementById(tag);
				if (element) {
					const elementBottom = element.offsetTop + element.offsetHeight / 2;
					if (scrollTop < elementBottom) {
						scrollTag = tag;
						break;
					}
				}
			}
		}
		if (router.query.tag !== scrollTag) {
			router.push(
				{ pathname: router.pathname, query: { tag: scrollTag } },
				undefined,
				{
					shallow: true,
				},
			);
		}
	}, 300);

	return {
		onMainContentScroll,
	};
};
