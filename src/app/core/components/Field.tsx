import { tw } from "@utils/functions/tailwind";
import { createContext, memo, useContext } from "react";

type Field = {
	fullwidth?: boolean;
	isInvalid?: boolean;
	id: string;
};

type ContextProps = Omit<Field, "autoFocus">;

type WrapperRenderProps = {
	className: string;
};

type Props = { children: React.ReactNode } & Field;

const FieldContext = createContext<ContextProps>({
	fullwidth: false,
	isInvalid: false,
	id: ""
});

const useFieldContext = () => {
	const context = useContext(FieldContext);

	if (!context) {
		throw new Error("Solo se puede usar dentro de Field");
	}

	return context;
};

export default function Field({ children, fullwidth, ...props }: Props) {
	return (
		<FieldContext.Provider value={{ ...props, fullwidth }}>
			<div
				className={tw(
					"relative flex flex-col gap-0.5 w-max",
					fullwidth && "w-full"
				)}
			>
				{children}
			</div>
		</FieldContext.Provider>
	);
}

Field.HelperText = memo(function FieldHelperText({
	children
}: {
	children: React.ReactNode;
}) {
	const { isInvalid } = useFieldContext();

	return (
		<span
			className={tw(
				"text-default-500 text-xs pl-2 transition-colors duration-300",
				isInvalid && "text-danger"
			)}
		>
			{children}
		</span>
	);
});

Field.Label = memo(function FieldLabel({
	children,
	className
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const { id, isInvalid } = useFieldContext();

	return (
		<label
			htmlFor={id}
			className={tw(
				"text-default transition-colors duration-300 w-max max-w-full truncate",
				isInvalid && "text-danger",
				className
			)}
		>
			{children}
		</label>
	);
});

Field.Wrapper = memo(function FieldWrapper({
	children
}: {
	children(props: WrapperRenderProps): React.ReactNode;
}) {
	const { fullwidth } = useFieldContext();

	return (
		<div className={tw("flex items-center gap-2", fullwidth && "w-full")}>
			{children({
				className: tw(
					"px-2 h-9 !outline-none border-2 rounded-lg align-middle leading-none bg-default-100 border-transparent",
					"focus:bg-default-100 focus:border-primary hover:bg-default-200 hover:border-primary placeholder:text-default-400",
					"disabled:border-transparent disabled:bg-default-200 disabled:text-default-400",
					"transition-colors duration-300",
					fullwidth && "w-full"
				)
			})}
		</div>
	);
});
