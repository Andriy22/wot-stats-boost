import compose from 'compose-function';

import { withRouter } from './withRouter';
import { withUI } from './withUI';

export const withProviders = compose(withUI, withRouter);
