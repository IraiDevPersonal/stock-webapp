import { tw } from "@utils/functions/tailwind";
import { ForwardedRef, forwardRef, useId } from "react";
import Field from "./Field";
import { InputAtributtes } from "@utils/types";

type Props = InputAtributtes &
	Partial<{
		message: string;
		isInvalid: boolean;
		fullwidth: boolean;
		label: React.ReactNode;
		endContent: React.ReactNode;
		startContent: React.ReactNode;
	}>;

const Input = forwardRef(
	(
		{
			id,
			label,
			message,
			fullwidth,
			className,
			isInvalid,
			endContent,
			startContent,
			...props
		}: Props,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		const inputId = useId();
		const currentId = id ?? inputId;

		return (
			<Field id={currentId} isInvalid={isInvalid} fullwidth={fullwidth}>
				<Field.Label>{label}</Field.Label>

				<Field.Wrapper>
					{({ className: wrapperClassName }) => (
						<>
							{startContent}

							<input
								ref={ref}
								autoComplete="off"
								{...props}
								id={currentId}
								className={tw(wrapperClassName, className)}
							/>

							{endContent}
						</>
					)}
				</Field.Wrapper>

				<Field.HelperText>{message}</Field.HelperText>
			</Field>
		);
	}
);

export default Input;
