import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const NotContainsIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "20",
	width = "24",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 20"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<rect
			x="0.5"
			y="0.5"
			width="23"
			height="19"
			rx="2.5"
			stroke="#1D6295"
		/>
		<path
			d="M17 6H11C8.79086 6 7 7.79086 7 10V10C7 12.2091 8.79086 14 11 14H17"
			stroke="#1D6295"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M7 10H17"
			stroke="#1D6295"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<line
			x1="17.1162"
			y1="2.69749"
			x2="7.69749"
			y2="15.8838"
			stroke="#1D6295"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
