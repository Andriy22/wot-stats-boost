import { create } from 'zustand';

interface IOrderState {
	details: string;
	total: number;
	isUrgent: boolean;
	comment: string;
	name: string;
	email: string;
	contactType: string;
	contactDetails: string;
}

export interface IOrderDetails {
	details: string;
	total: number;
}

const initialState: IOrderState = {
	details: '',
	total: 0,
	isUrgent: false,
	comment: '',
	email: '',
	contactType: 'Telegram',
	contactDetails: '',
	name: '',
};

export interface Actions {
	setOrderDetails: (details: IOrderDetails) => void;
	setName: (name: string) => void;
	setEmail: (email: string) => void;
	setIsUrgent: (isUrgent: boolean) => void;
	setContactType: (contactType: string) => void;
	setContactDetails: (details: string) => void;
	setComment: (comment: string) => void;
}

export const useOrderStore = create<IOrderState & Actions>(set => ({
	...initialState,
	setOrderDetails: (details: IOrderDetails) =>
		set((state: IOrderState) => ({
			...state,
			details: details.details,
			total: details.total,
		})),
	setName: (name: string) =>
		set((state: IOrderState) => ({ ...state, name: name })),
	setEmail: (email: string) =>
		set((state: IOrderState) => ({ ...state, email: email })),
	setContactType: (contactType: string) =>
		set((state: IOrderState) => ({
			...state,
			contactType: !contactType ? 'Telegram' : contactType,
			contactDetails: '',
		})),
	setContactDetails: (details: string) =>
		set((state: IOrderState) => ({
			...state,
			contactDetails: details,
		})),
	setComment: (comment: string) =>
		set((state: IOrderState) => ({
			...state,
			comment: comment,
		})),
	setIsUrgent: (isUrgent: boolean) =>
		set((state: IOrderState) => ({
			...state,
			isUrgent: isUrgent,
		})),
}));
