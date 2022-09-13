import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ButtonIcon: React.FC<Props> = ({
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
		<rect x="11" y="4" width="11" height="16" rx="2" fill="#ADE2FF" />
		<rect
			x="5.75"
			y="9.75"
			width="12.5"
			height="5.5"
			rx="1.25"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<path
			d="M9.5 12.5H14.5"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
