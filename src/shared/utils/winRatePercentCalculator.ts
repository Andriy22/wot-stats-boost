export const getPercentageIncreaseBasedOnWinRate = (winRate: number) => {
	switch (winRate) {
		case 50:
			return 0;
		case 55:
			return 0;
		case 60:
			return 10;
		case 65:
			return 35;

		default:
			return 0;
	}
};
