import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const NumberboxIcon: React.FC<Props> = ({
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
		<rect x="8" y="10" width="10" height="12" rx="2" fill="#ADE2FF" />
		<rect
			x="3.75"
			y="5.75"
			width="16.5"
			height="12.5"
			rx="1.25"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<path
			d="M10.5 11L12.5 9"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M12.5 15L12.5 9"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
