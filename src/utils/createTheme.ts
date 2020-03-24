import deepmerge from 'deepmerge';
import Theme from '../typings/Theme.d';

const createTheme = ({ tokens, settings }: { tokens: any; settings: Theme }) => deepmerge(tokens, settings);

export default createTheme;
