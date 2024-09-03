import React, { useId } from "react";
import { tw } from "@utils/functions/tailwind";
import Field from "./Field";
import { InputAtributtes } from "@utils/types";
import IconCheck from "../design-system/icons/IconCheck";

type Props = Omit<InputAtributtes, "type"> &
	Partial<{
		message: string;
		isInvalid: boolean;
		label: React.ReactNode;
		classNames: Partial<{
			wrapper: string;
			checkbox: string;
		}>;
	}>;

const Checkbox = React.forwardRef(
	(
		{ id, message, label, classNames, ...props }: Props,
		ref: React.ForwardedRef<HTMLInputElement>
	) => {
		const checkboxId = useId();
		const currentId = id ?? checkboxId;

		return (
			<Field id={currentId}>
				<div className={tw("flex items-center gap-2", classNames?.wrapper)}>
					<input
						{...props}
						hidden
						ref={ref}
						id={currentId}
						type="checkbox"
						className="peer"
					/>

					<label
						htmlFor={currentId}
						className={tw(
							"h-6 w-6 min-w-5 rounded-lg bg-default-200 flex justify-center items-center cursor-pointer border border-transparent",
							"peer-disabled:bg-transparent border-default-200 peer-disabled:text-default-300 peer-disabled:cursor-default",
							"peer-hover:bg-default-300 peer-checked:bg-primary peer-checked:peer-hover:bg-primary-500 text-white",
							"peer-disabled:peer-checked:bg-default-300 peer-disabled:peer-checked:text-white",
							"transition-colors duration-300",
							classNames?.checkbox
						)}
					>
						<IconCheck />
					</label>

					<Field.Label className="cursor-pointer peer-disabled:cursor-default peer-disabled:text-default-400">
						{label}
					</Field.Label>
				</div>

				{message && <span>{message}</span>}
			</Field>
		);
	}
);

export default Checkbox;
