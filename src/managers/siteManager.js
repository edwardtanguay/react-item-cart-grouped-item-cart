import { InfoBox } from '../components/InfoBox';
import { config } from '../config';

const getImagePathAndFileName = (pathAndFileName) => {
	return pathAndFileName.substring(1);
}

export const siteManager = Component => {
	return (props) => {
		return <Component {...props} InfoBox={InfoBox} config={config} getImagePathAndFileName={getImagePathAndFileName} />
	}
}