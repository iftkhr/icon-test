import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const RunIntersectionRuleIcon: React.FC<Props> = ({
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
			d="M0 12.6227V4.34537C0 3.54958 0.884383 3.07261 1.54934 3.50977L7.74833 7.58515C8.34414 7.97685 8.35029 8.84842 7.76008 9.2485L1.56109 13.4504C0.897075 13.9005 0 13.4249 0 12.6227Z"
			fill="#ADE2FF"
		/>
		<path
			d="M8.36751 11.5827C8.66701 11.7803 8.66701 12.2197 8.36751 12.4173L4.52537 14.9525C4.19294 15.1718 3.75 14.9334 3.75 14.5352L3.75 9.46485C3.75 9.06657 4.19294 8.82816 4.52537 9.04751L8.36751 11.5827Z"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M15 17L12 14L9 17"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12 14L12 21"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
		<path
			d="M9 7L12 10L15 7"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12 10L12 3"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
		<path
			d="M17 9L14 12L17 15"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M14 12H21"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
	</svg>
);
