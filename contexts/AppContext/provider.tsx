import { PropsWithChildren, createContext, useState } from "react";

import { AppContextProps } from "./types";

export const AppContext = createContext<AppContextProps>({
	isSidebarOpen: false,
	closeSidebar() {
		throw new Error("No AppContextProvider was detected");
	},
	toggleSidebar() {
		throw new Error("No AppContextProvider was detected");
	}
});

export const AppContextProvider = ({ children }: PropsWithChildren<{}>) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
	const closeSidebar = () => setIsSidebarOpen(false);
	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				toggleSidebar,
				closeSidebar
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
