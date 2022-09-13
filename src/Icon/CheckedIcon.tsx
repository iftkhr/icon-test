import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CheckedIcon: React.FC<Props> = ({
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
			opacity="0.3"
			d="M16.6667 6H7.33333C6.59695 6 6 6.59695 6 7.33333V16.6667C6 17.403 6.59695 18 7.33333 18H16.6667C17.403 18 18 17.403 18 16.6667V7.33333C18 6.59695 17.403 6 16.6667 6Z"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<rect
			x="7.72925"
			y="11.5576"
			width="2"
			height="4.96874"
			rx="1"
			transform="rotate(-45 7.72925 11.5576)"
			fill="#4050A6"
		/>
		<rect
			x="14.8289"
			y="8.65552"
			width="2"
			height="7.07309"
			rx="1"
			transform="rotate(45 14.8289 8.65552)"
			fill="#4050A6"
		/>
	</svg>
);
