import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeBtn() {
	// * Estado para saber se o tema escuro está aplicado ou não
	// ? Usa-se useState pois assim pois caso a variável "isDark" fosse uma const, ela seria lida apenas uma vez, o que não ia permitir que a lógica de adição/remoção da classe ".dark" acontecesse
	// ! Não podemos usar let ao invés de const na variável pois o ESLint diz que a variável não sofre alterações
	const [isDark, setIsDark] = useState(
		document.documentElement.classList.contains("dark"),
	);

	const toggleTheme = () => {
		if (isDark) {
			document.documentElement.classList.remove("dark");
            // setIsDark(false)
		} else {
			document.documentElement.classList.add("dark");
            // setIsDark(true)
		}
        setIsDark(!isDark)
	};

	return (
		<>
			<div id="themeButtons">
				<Button variant="ghost" onClick={toggleTheme}>
                    {isDark ? <Sun/> : <Moon/>}
                </Button>
			</div>
		</>
	);
}
