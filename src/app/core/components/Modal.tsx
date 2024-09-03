import { ButtonType, HtmlElements } from "@utils/types";
import { tw } from "@utils/functions/tailwind";
import * as Dialog from "@radix-ui/react-dialog";
import { PropsWithChildren } from "react";
import Button from "./Button";
import CreateElement from "./CreateElement";
import IconClose from "../design-system/icons/IconClose";

type Props<T extends HTMLElement = HTMLElement> = PropsWithChildren<{
	isOpen: boolean;
	as?: HtmlElements;
	hideCloseButton?: boolean;
	shouldEscCloseModal?: boolean;
	shouldBackdropCloseModal?: boolean;
	onClose?(): void;
	classNames?: Partial<{
		wrapper: string;
		overlay: string;
		closeButton: string;
	}>;
}> &
	React.HTMLAttributes<T>;

export default function Modal<T extends HTMLElement>({
	as,
	isOpen,
	onClose,
	children,
	classNames,
	hideCloseButton,
	shouldEscCloseModal,
	shouldBackdropCloseModal,
	...props
}: Props<T>) {
	return (
		<Dialog.Root
			modal
			open={isOpen}
		>
			<Dialog.Portal>
				<Dialog.Overlay
					onClick={() => {
						if (!shouldBackdropCloseModal) return;
						onClose?.();
					}}
					className={tw(
						"bg-default-900/15 backdrop-blur-sm data-[state=open]:animate-overlayShow fixed inset-0",
						classNames?.overlay
					)}
				/>
				<Dialog.Content
					aria-describedby="dialog"
					onEscapeKeyDown={() => {
						if (!shouldEscCloseModal) return;
						onClose?.();
					}}
					className={tw(
						"border border-default-200",
						"fixed top-1/2 left-1/2 w-[90vw] max-w-[450px] rounded-2xl bg-white !outline-none",
						"data-[state=open]:animate-contentShow translate-x-[-50%] translate-y-[-50%]",
						classNames?.wrapper
					)}
				>
					<Dialog.Description />
					<CreateElement
						as={as}
						{...props}
						className={tw("divide-y divide-default-200 z-50", props?.className)}
					>
						{children}
					</CreateElement>

					{!hideCloseButton && (
						<Dialog.Close
							onClick={onClose}
							className={tw(
								"absolute top-2 right-2 h-8 w-8 min-w-8 rounded-lg flex justify-center items-center",
								"hover:bg-default-100 transition-colors duration-300",
								classNames?.closeButton
							)}
						>
							<IconClose />
						</Dialog.Close>
					)}
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

Modal.Title = function ModalTitle({
	classNames,
	children
}: PropsWithChildren<{
	classNames?: Partial<{ title: string; header: string }>;
}>) {
	return (
		<header className={tw("p-4", classNames?.header)}>
			<Dialog.Title
				className={tw("font-bold text-xl leading-none", classNames?.title)}
			>
				{children}
			</Dialog.Title>
		</header>
	);
};

Modal.Body = function ModalBody({
	children,
	className
}: PropsWithChildren<{ className?: string }>) {
	return (
		<div
			className={tw(
				"p-4 max-h-[calc(95vh-107px)] overflow-auto flex flex-col gap-2",
				className
			)}
		>
			{children}
		</div>
	);
};

Modal.Footer = function ModalFooter({
	children,
	className
}: PropsWithChildren<{ className?: string }>) {
	return (
		<footer className={tw("p-2 flex justify-end gap-2", className)}>
			{children}
		</footer>
	);
};

Modal.Actions = function ModalActions({
	className,
	isLoading,
	cancel,
	action
}: {
	className?: string;
	isLoading?: boolean;
	cancel: {
		label?: string;
		handler(): void;
		className?: string;
	};
	action?: Partial<{
		label: string;
		type: ButtonType;
		handler(): void;
		className?: string;
	}>;
}) {
	return (
		<Modal.Footer className={className}>
			<Button
				className={cancel.className}
				onClick={cancel.handler}
				disabled={isLoading}
				variant="light"
				color="default"
			>
				{cancel.label ?? "Cancelar"}
			</Button>

			<Button
				type={action?.type || "submit"}
				className={action?.className}
				onClick={action?.handler}
				isLoading={isLoading}
				color="primary"
			>
				{action?.label ?? "Confirmar"}
			</Button>
		</Modal.Footer>
	);
};
