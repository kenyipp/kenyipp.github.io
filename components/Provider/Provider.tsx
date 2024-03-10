import { AppContextProvider } from "@ken/contexts";
import { ThemeProvider } from "@mui/material/styles";
import type { FC } from "react";

import { theme } from "../../theme";
import type { ProviderProps } from "./types";

export const Provider: FC<ProviderProps> = ({ children }) => (
	<ThemeProvider theme={theme}>
		<AppContextProvider>{children}</AppContextProvider>
	</ThemeProvider>
);
