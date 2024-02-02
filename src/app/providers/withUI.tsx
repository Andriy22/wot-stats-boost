import { NextUIProvider } from '@nextui-org/react';

export const withUI = (component: () => React.ReactNode) => () => {

	return <NextUIProvider>{component()}</NextUIProvider>;
};
