import { FaSpinner } from 'react-icons/fa';
import FadeIn from 'react-fade-in';

export const PageLoader = ({ message }) => {
	return (
		<FadeIn transitionDuration="10">
			<FaSpinner className="spinner" />
		</FadeIn>
	)
};

