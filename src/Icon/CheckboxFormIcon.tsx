import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CheckboxFormIcon: React.FC<Props> = ({
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
			x="23"
			y="12"
			width="11"
			height="14"
			rx="5.5"
			transform="rotate(90 23 12)"
			fill="#F7E691"
		/>
		<rect
			x="5.75"
			y="5.75"
			width="12.5"
			height="12.5"
			rx="3.75"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<path
			d="M11.4062 13.6367L14.0431 10.9999"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M11.4062 13.6367L10.0005 12.231"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
