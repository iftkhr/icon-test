import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const RunTreeRuleIcon: React.FC<Props> = ({
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
			d="M16.2712 11.2739V4.694C16.2712 3.89822 17.1556 3.42125 17.8206 3.85841L22.7483 7.09804C23.3442 7.48974 23.3503 8.36132 22.7601 8.7614L17.8323 12.1017C17.1683 12.5518 16.2712 12.0761 16.2712 11.2739Z"
			fill="#ADE2FF"
		/>
		<path
			d="M4 7L5 8L7 6"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M4 17L5 18L7 16"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M19.3675 11.5827C19.667 11.7803 19.667 12.2197 19.3675 12.4173L15.5254 14.9525C15.1929 15.1718 14.75 14.9334 14.75 14.5352L14.75 9.46485C14.75 9.06657 15.1929 8.82816 15.5254 9.04751L19.3675 11.5827Z"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M5 12H11"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
		<path
			d="M11 19L11 5"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
		<path
			d="M11 5L17 5"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
		<path
			d="M11 19H17"
			stroke="#272932"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
	</svg>
);
