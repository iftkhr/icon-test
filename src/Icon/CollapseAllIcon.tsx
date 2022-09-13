import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CollapseAllIcon: React.FC<Props> = ({
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
		<path
			d="M16 9L16 14H21"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M14 21L14 16L9 16"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<rect
			x="3"
			y="3"
			width="3"
			height="3"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<rect
			x="3"
			y="9"
			width="3"
			height="3"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<rect
			x="9"
			y="3"
			width="3"
			height="3"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<rect
			x="9"
			y="9"
			width="3"
			height="3"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
