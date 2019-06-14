import React from "react";

export const DarkModeContext = React.createContext({
	darkMode: true,
	toggleDarkMode: () => {},
});
