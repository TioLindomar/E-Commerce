import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div onClick={toggleTheme} style={{ cursor: "pointer", display: 'inline' }}>
      <span className="material-symbols-outlined">
        {theme === "light" ? "light_mode" : "dark_mode"}
      </span>
    </div>
  );
}
