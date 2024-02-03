import { create } from 'zustand';

import { IPersonalMission } from '../../shared/types/personal-missions';

interface IPersonalMissionsState {
	selectedMissions: IPersonalMission[];
}

interface Actions {
	setMission: (mission: IPersonalMission) => void;
	reset: () => void;
}

const initialState: IPersonalMissionsState = {
	selectedMissions: [],
};

export const usePersonalMissionsStore = create<
	IPersonalMissionsState & Actions
>((set, getState) => ({
	...initialState,
	reset: () => {
		set(() => ({ selectedMissions: [] }));
	},
	setMission: (mission: IPersonalMission) => {
		const currentMission = getState().selectedMissions.find(
			x => x.id === mission.id,
		);

		if (!currentMission && !mission.isSelected) {
			return;
		}

		if (!currentMission && mission.isSelected) {
			set((state: IPersonalMissionsState) => ({
				...state,
				selectedMissions: [...state.selectedMissions, mission],
			}));

			return;
		}

		if (currentMission && !mission.isSelected) {
			set((state: IPersonalMissionsState) => ({
				...state,
				selectedMissions: [
					...state.selectedMissions.filter(x => x.id !== mission.id),
				],
			}));

			return;
		}

		if (currentMission && mission.isSelected) {
			set((state: IPersonalMissionsState) => ({
				...state,
				selectedMissions: [
					...state.selectedMissions.filter(x => x.id !== mission.id),
					mission,
				],
			}));

			return;
		}
	},
}));
