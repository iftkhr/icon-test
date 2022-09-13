import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DateGreaterThanIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "23",
	width = "24",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 23"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M14.9543 12.956V14.108L9.05034 16.616V15.464L13.6343 13.532L9.05034 11.612V10.46L14.9543 12.956Z"
			fill="#1D6295"
		/>
		<rect
			x="0.5"
			y="3.5"
			width="23"
			height="19"
			rx="2.5"
			stroke="#1D6295"
		/>
		<path
			d="M6 1L6 6"
			stroke="#1D6295"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M18 1L18 6"
			stroke="#1D6295"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
