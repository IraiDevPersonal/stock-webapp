import { useCallback, useState } from "react";

export function useDisclosure(initalState?: boolean) {
	const [isOpen, setIsOpen] = useState(initalState ?? false);

	const onOpenChange = useCallback(() => {
		setIsOpen((prevState) => !prevState);
	}, []);
	const onOpen = useCallback(() => {
		setIsOpen(true);
	}, []);
	const onClose = useCallback(() => {
		setIsOpen(true);
	}, []);

	return {
		isOpen,
		onOpen,
		onClose,
		onOpenChange
	};
}
