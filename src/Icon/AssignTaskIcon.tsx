import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const AssignTaskIcon: React.FC<Props> = ({
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
			d="M7.05756 2C7.05756 0.895432 7.95299 0 9.05756 0H22C23.1046 0 24 0.89543 24 2V3.9897C24 5.09427 23.1046 5.9897 22 5.9897H7.05756V2Z"
			fill="#ADE2FF"
		/>
		<rect
			x="4.75"
			y="3.75"
			width="14.5"
			height="16.5"
			rx="1.25"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M5 8H19"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<line
			x1="12"
			y1="16.75"
			x2="12"
			y2="11.75"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<line
			x1="14.5"
			y1="14.25"
			x2="9.5"
			y2="14.25"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
