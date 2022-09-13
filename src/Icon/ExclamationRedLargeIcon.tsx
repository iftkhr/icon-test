import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ExclamationRedLargeIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "60",
	width = "60",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 60 60"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<circle opacity="0.05" cx="30" cy="30" r="30" fill="#EE3E54" />
		<rect opacity="0.1" x="26" y="32" width="8" height="8" fill="#EE3E54" />
		<rect x="26" y="40" width="8" height="8" fill="#EE3E54" />
		<rect
			opacity="0.8"
			x="26"
			y="10"
			width="8"
			height="22"
			fill="#EE3E54"
		/>
	</svg>
);
