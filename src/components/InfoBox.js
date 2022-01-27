import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	background: #aaa;
	border-radius: 5px;
	font-family:'Courier New', Courier, monospace;
	padding: 10px;
	margin: 20px 0 10px 0;
	width: ${props => props.width};
	box-shadow: 0 4px 8px 0 black;
`;

const Header = styled.div`
	background-color: ${props => props.status === 'warning' ? '#510505 !important' : '#888 !important'};
	color: ${props => props.status === 'warning' ? '#d29700 !important' : '#333 !important'};
	font-size: 1.2rem;
	padding: 5px;
	border-radius: 5px;
	font-weight: bold;
	margin: 10 0 5px 0;
`;

const Body = styled.div`
	font-size: 1rem;
	margin: 10px 0 0 0;
`;

const Button = styled.button`
	float: right;
	background: #bbb;
	border-radius: 5px;
`;

const Clear = styled.div`
	clear: both;
`;

export const InfoBox = ({ children, status = "normal", width = '300px', title = "Info", message = "", allowClosing = false }) => {
	const [isVisible, setIsVisible] = useState(true);

	const handleClose = () => {
		setIsVisible(false);
	}

	return (
		<>
			{isVisible && (
				<Container className="infoBox" width={width}>
					<Header status={status}>{title}</Header>
					<Body>{children === undefined && message === '' ? '(currenly no information)' : children}
						{message !== "" && (
							<p>{message}</p>
						)}
					</Body>
					{allowClosing && (
						<>
							<Button onClick={handleClose}>Close</Button>
							<Clear />
						</>
					)}
				</Container >
			)}
		</>
	)
}
