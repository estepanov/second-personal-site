/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import { CustomColorModes } from "../styles/colors";

const options = Object.keys(CustomColorModes);

const MODE_TEXT: { [TKey in CustomColorModes]: string } = {
  [CustomColorModes.dark]: "Dark Mode",
  [CustomColorModes.light]: "Light Mode",
};

const MODE_TEXT_REVERSE: { [TKey in CustomColorModes]: string } = {
  [CustomColorModes.dark]: MODE_TEXT.light,
  [CustomColorModes.light]: MODE_TEXT.dark,
};

const ColorModeToggleText = () => {
  const [mode, setMode] = useColorMode();
  return (
    <button
      type="button"
      key={mode}
      sx={{
        position: "relative",
        cursor: "pointer",
        transition: "ease-in-out 0.3s",
        display: "flex",
        height: "max-content",
        alignItems: "center",
        border: "none",
        background: "none",
        color: "text",
        paddingX: 2,
        paddingY: 2,
        overflow: "hidden",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
      onClick={() => {
        const index = options.indexOf(mode);
        const next = options[(index + 1) % options.length];
        setMode(next);
      }}
    >
      <span sx={{ marginLeft: 2, fontSize: 0 }}>{MODE_TEXT_REVERSE[mode as CustomColorModes]}</span>
    </button>
  );
};

export default ColorModeToggleText;
