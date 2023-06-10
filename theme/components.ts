import { ThemeOptions, inputLabelClasses, paperClasses } from "@mui/material";

import { neutral } from "./colors";
import { palette } from "./palette";

export const components: ThemeOptions["components"] = {
	MuiAvatar: {
		styleOverrides: {
			root: {
				fontSize: 14,
				fontWeight: 600,
				letterSpacing: 0
			}
		}
	},
	MuiButton: {
		styleOverrides: {
			root: {
				borderRadius: "3px",
				textTransform: "none"
			}
		}
	},
	MuiCard: {
		styleOverrides: {
			root: {
				borderRadius: 2,
				[`&.${paperClasses.elevation1}`]: {
					boxShadow:
						"0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)"
				}
			}
		}
	},
	MuiCardContent: {
		styleOverrides: {
			root: {
				padding: "12px 24px",
				"&:last-child": {
					paddingBottom: "32px"
				}
			}
		}
	},
	MuiCardHeader: {
		defaultProps: {
			titleTypographyProps: {
				variant: "h6"
			},
			subheaderTypographyProps: {
				variant: "body2",
				marginTop: 1
			}
		},
		styleOverrides: {
			root: {
				padding: "24px"
			}
		}
	},
	MuiInputBase: {
		styleOverrides: {
			input: {
				"&::placeholder": {
					opacity: 1
				}
			}
		}
	},
	MuiFormLabel: {
		styleOverrides: {
			root: {
				fontSize: 14,
				fontWeight: 500,
				[`&.${inputLabelClasses.filled}`]: {
					transform: "translate(12px, 18px) scale(1)"
				},
				[`&.${inputLabelClasses.shrink}`]: {
					[`&.${inputLabelClasses.standard}`]: {
						transform: "translate(0, -1.5px) scale(0.85)"
					},
					[`&.${inputLabelClasses.filled}`]: {
						transform: "translate(12px, 6px) scale(0.85)"
					},
					[`&.${inputLabelClasses.outlined}`]: {
						transform: "translate(14px, -9px) scale(0.85)"
					}
				}
			}
		}
	},
	MuiTab: {
		styleOverrides: {
			root: {
				fontSize: 14,
				fontWeight: 500,
				lineHeight: 1.71,
				minWidth: "auto",
				paddingLeft: 0,
				paddingRight: 0,
				textTransform: "none",
				"& + &": {
					marginLeft: 24
				}
			}
		}
	},
	MuiTableCell: {
		styleOverrides: {
			root: {
				wordBreak: "break-all",
				borderBottomColor: palette.divider
			}
		}
	},
	MuiTextField: {
		defaultProps: {
			variant: "filled"
		}
	},
	MuiFilledInput: {
		styleOverrides: {
			root: {
				backgroundColor: "transparent",
				borderStyle: "solid",
				borderWidth: 1,
				borderColor: neutral[200],
				"&:hover": {
					backgroundColor: palette.action?.hover
				},
				"&:before": {
					display: "none"
				},
				"&:after": {
					display: "none"
				}
			}
		}
	},
	MuiLink: {
		styleOverrides: {
			root: {
				textDecoration: "none"
			}
		}
	},
	MuiCssBaseline: {
		styleOverrides: {
			"*": {
				boxSizing: "border-box"
			},
			html: {
				MozOsxFontSmoothing: "grayscale",
				WebkitFontSmoothing: "antialiased",
				display: "flex",
				flexDirection: "column",
				height: "100%",
				minHeight: "100%",
				width: "100%"
			},
			body: {
				display: "flex",
				flex: "1 1 auto",
				flexDirection: "column",
				height: "100%",
				minHeight: "100%",
				width: "100%"
			},
			"#__next": {
				display: "flex",
				flex: "1 1 auto",
				flexDirection: "column",
				height: "100%",
				width: "100%"
			}
		}
	}
};
