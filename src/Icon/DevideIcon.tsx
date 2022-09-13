import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DevideIcon: React.FC<Props> = ({
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
		<circle
			cx="12"
			cy="6"
			r="2"
			stroke="#1D6295"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<circle
			cx="12"
			cy="14"
			r="2"
			stroke="#1D6295"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M17.0028 10.0014L7.00012 10.0013"
			stroke="#1D6295"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
