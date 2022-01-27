import { InfoBox } from '../components/InfoBox';
import { config } from '../config';

export const siteManager = Component => {
	return (props) => {
		return <Component {...props} InfoBox={InfoBox} config={config} />
	}
}