import { AppContextProvider } from "@ken/contexts";
import { ThemeProvider } from "@mui/material/styles";
import { FC } from "react";

import { theme } from "../../theme";
import { ProviderProps } from "./types";

export const Provider: FC<ProviderProps> = ({ children }) => (
	<ThemeProvider theme={theme}>
		<AppContextProvider>{children}</AppContextProvider>
	</ThemeProvider>
);
