export interface SidebarProps {
	onSidebarItemClick: (props: { tag: string }) => Promise<unknown> | unknown;
}
