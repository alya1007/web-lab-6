import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useLocalStorage } from "usehooks-ts";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

function ThemeSwitch() {
	const [theme, setTheme] = useLocalStorage("theme", "light");

	useEffect(() => {
		const htmlSelector = document.querySelector("html");
		if (htmlSelector) {
			htmlSelector.classList.remove("light", "dark");
			htmlSelector.classList.add(theme);
		}
	}, [theme]);

	const [enabled, setEnabled] = useState(theme == "light");

	const handleThemeChange = (enabled: boolean) => {
		setTheme(enabled ? "light" : "dark");
		setEnabled(enabled);
	};

	return (
		<Switch
			checked={enabled}
			onChange={handleThemeChange}
			className={classNames(
				enabled ? "bg-ternary" : "bg-primary",
				"relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
			)}
		>
			<span className="sr-only">Use setting</span>
			<span
				className={classNames(
					enabled ? "translate-x-5" : "translate-x-0",
					"pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
				)}
			>
				<span
					className={classNames(
						enabled
							? "opacity-0 duration-100 ease-out"
							: "opacity-100 duration-200 ease-in",
						"absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
					)}
					aria-hidden="true"
				>
					{enabled ? (
						<SunIcon className="h-3 w-3 text-primary" />
					) : (
						<MoonIcon className="h-3 w-3 text-ternary" />
					)}
				</span>
				<span
					className={classNames(
						enabled
							? "opacity-100 duration-200 ease-in"
							: "opacity-0 duration-100 ease-out",
						"absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
					)}
					aria-hidden="true"
				>
					{enabled ? (
						<SunIcon className="h-3 w-3 text-primary" />
					) : (
						<MoonIcon className="h-3 w-3 text-ternary" />
					)}
				</span>
			</span>
		</Switch>
	);
}

export default ThemeSwitch;
