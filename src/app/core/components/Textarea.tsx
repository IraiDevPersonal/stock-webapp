import { tw } from "@utils/functions/tailwind";
import { ForwardedRef, forwardRef, useId } from "react";
import Field from "./Field";

type Props = JSX.IntrinsicElements["textarea"] &
	Partial<{
		message: string;
		isInvalid: boolean;
		fullwidth: boolean;
		label: React.ReactNode;
	}>;

const Textarea = forwardRef(
	(
		{ id, label, message, isInvalid, className, fullwidth, ...props }: Props,
		ref: ForwardedRef<HTMLTextAreaElement>
	) => {
		const textareaId = useId();
		const currentId = id ?? textareaId;

		return (
			<Field id={currentId} isInvalid={isInvalid} fullwidth={fullwidth}>
				<Field.Label>{label}</Field.Label>

				<Field.Wrapper>
					{({ className: wrapperClassName }) => (
						<textarea
							ref={ref}
							rows={4}
							autoComplete="off"
							{...props}
							id={currentId}
							className={tw(
								"flex items-center gap-2 border-2",
								wrapperClassName,
								className,
								fullwidth && "w-full",
								"h-auto py-2 resize-none"
							)}
						></textarea>
					)}
				</Field.Wrapper>

				<Field.HelperText>{message}</Field.HelperText>
			</Field>
		);
	}
);

export default Textarea;
