import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const TabIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "24",
	width = "24",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 24"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<rect
			x="3"
			y="8"
			width="18"
			height="12"
			rx="2"
			stroke="#677C95"
			stroke-opacity="0.6"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M3 4L7 4"
			stroke="#677C95"
			stroke-opacity="0.6"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M10 4L14 4"
			stroke="#677C95"
			stroke-opacity="0.6"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M17 4L21 4"
			stroke="#677C95"
			stroke-opacity="0.6"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
