import { useRef } from "react";
import IconSearch from "./icons/IconSearch";
import Button from "../components/Button";
import IconSetting from "./icons/IconSetting";

type SearchProps = {
	name: string;
};

const Search = ({ name }: SearchProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const handleInputFocus = () => {
		inputRef.current?.focus();
	};
	return (
		<>
			<div
				onClick={handleInputFocus}
				className="flex items-center gap-1.5 bg-white p-1.5 rounded-lg shadow-md max-w-2xl"
			>
				<figure className="w-9 min-w-9 flex items-center justify-center">
					<IconSearch />
				</figure>
				<input
					type="text"
					name={name}
					ref={inputRef}
					className="p-1 w-full"
					placeholder="Buscar..."
				/>
				<Button
					isIconOnly
					variant="light"
					color="default"
				>
					<IconSetting />
				</Button>
			</div>
		</>
	);
};

export default Search;
