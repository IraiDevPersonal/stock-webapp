import { Color } from "@utils/types";
import { create } from "zustand";

type Store = {
	state: State;
	isLoading: boolean;
	onCancel(): void;
	onConfirm(): void;
	createAlert(props: State): void;
};

type State = {
	title: string;
	isOpen: boolean;
	confirm?: ButtonAction;
	shouldSetIsLoading?: boolean;
	children: React.ReactNode;
	cancel?: Omit<ButtonAction, "isLoading">;
};

type ButtonAction = Partial<{
	color: Color;
	label: string;
	handler(): void | Promise<void>;
}>;

const INIT: State = {
	children: null,
	isOpen: false,
	cancel: undefined,
	title: "Atención",
	confirm: undefined
};

export const AlertStore = create<Store>((set, get) => ({
	isLoading: false,
	state: {
		isOpen: false,
		children: null,
		title: "Atención",
		cancel: undefined,
		confirm: undefined
	},
	createAlert: (alert) => {
		set({ state: alert });
	},
	onCancel: () => {
		get().state.cancel?.handler?.();
		set({ state: INIT, isLoading: false });
	},
	onConfirm: async () => {
		const { state } = get();

		if (state.shouldSetIsLoading) {
			set({ isLoading: true });
		}

		await state.confirm?.handler?.();
		set({ state: INIT, isLoading: false });
	}
}));
