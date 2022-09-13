import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const TextMergeDarkIcon: React.FC<Props> = ({
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
			x="3.75"
			y="4.75"
			width="4.5"
			height="4.5"
			rx="1.25"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<rect
			x="15.75"
			y="4.75"
			width="4.5"
			height="4.5"
			rx="1.25"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<rect
			x="15.75"
			y="14.75"
			width="4.5"
			height="4.5"
			rx="1.25"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<rect
			x="3.75"
			y="14.75"
			width="4.5"
			height="4.5"
			rx="1.25"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<path
			d="M9 7C10.5 7 11.25 8 12 12C12.75 16 13.5 17 15 17"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M15 7C13.5 7 12.375 9.5 12 12C11.5446 15.0358 10.5 17 9 17"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
