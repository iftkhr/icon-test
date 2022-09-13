import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DateRangeIcon: React.FC<Props> = ({
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
		<rect x="1" y="4" width="16" height="16" rx="8" fill="#DAC6E1" />
		<rect
			x="2.75"
			y="10.75"
			width="2.5"
			height="2.5"
			rx="1.25"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<rect
			x="10.75"
			y="10.75"
			width="2.5"
			height="2.5"
			rx="1.25"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<rect
			x="18.75"
			y="10.75"
			width="2.5"
			height="2.5"
			rx="1.25"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<path
			d="M10 12L6 12"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M18 12L14 12"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
