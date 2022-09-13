import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const SettingIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "17",
	width = "16",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 16 17"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<rect
			x="3"
			y="4.87646"
			width="10"
			height="1.3"
			rx="0.65"
			fill="#4050A6"
		/>
		<rect
			x="3"
			y="10.8765"
			width="10"
			height="1.3"
			rx="0.65"
			fill="#4050A6"
		/>
		<circle cx="5.5" cy="5.5" r="1.5" fill="#4050A6" />
		<circle cx="10.5" cy="11.5" r="1.5" fill="#4050A6" />
	</svg>
);
