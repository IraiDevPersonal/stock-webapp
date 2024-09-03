import { Option } from "@utils/types";
import { tw } from "@utils/functions/tailwind";
import { ForwardedRef, forwardRef, useId, useRef } from "react";
import Field from "./Field";

type Props = JSX.IntrinsicElements["select"] &
	Partial<{
		message: string;
		isInvalid: boolean;
		fullwidth: boolean;
		options?: Option[];
		emptyOption?: Partial<{
			label: string;
			value: string;
			isHidden: boolean;
		}>;
		label: React.ReactNode;
	}>;

const Select = forwardRef(
	(
		{
			id,
			label,
			message,
			isInvalid,
			fullwidth,
			className,
			emptyOption,
			options = [],
			...props
		}: Props,
		ref: ForwardedRef<HTMLSelectElement>
	) => {
		const inputId = useId();
		const currentId = id ?? inputId;
		const seletorRef = useRef<HTMLDivElement>(null);

		const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
			e.preventDefault();
			const seletorEl = seletorRef.current;

			if (!seletorEl) return;

			const selectEl = seletorEl.parentElement
				?.firstChild as HTMLSelectElement & { showPicker(): void };
			selectEl.showPicker();
			selectEl.focus();
		};

		return (
			<Field id={currentId} isInvalid={isInvalid} fullwidth={fullwidth}>
				<Field.Label>{label}</Field.Label>

				<Field.Wrapper>
					{({ className: wrapperClassName }) => (
						<>
							<select
								ref={ref}
								autoComplete="off"
								{...props}
								id={currentId}
								className={tw(
									wrapperClassName,
									className,
									fullwidth && "w-full",
									"appearance-none"
								)}
							>
								{!emptyOption?.isHidden && (
									<option value={emptyOption?.value ?? ""}>
										{emptyOption?.label ?? "Sin selección"}
									</option>
								)}

								{options.map(({ label, value }) => (
									<option key={value} value={value}>
										{label}
									</option>
								))}
							</select>

							<figure
								ref={seletorRef}
								onClick={handleClick}
								className="absolute right-2 top-[35px] text-default-600"
							>
								{/* <IconSelector size={20} /> */}
								<span>▼</span>
							</figure>
						</>
					)}
				</Field.Wrapper>

				<Field.HelperText>{message}</Field.HelperText>
			</Field>
		);
	}
);

export default Select;
