import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const GetRatingIcon: React.FC<Props> = ({
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
			x="1.04242"
			y="7.85645"
			width="3.91512"
			height="5.31835"
			rx="1"
			fill="#ADE2FF"
		/>
		<rect
			x="6.87378"
			y="2.60791"
			width="4.15436"
			height="11.1386"
			rx="1"
			fill="#ADE2FF"
		/>
		<line
			x1="20.25"
			y1="18.75"
			x2="3.75"
			y2="18.75"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<rect
			x="4.5"
			y="11"
			width="3"
			height="4"
			rx="1"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<rect
			x="10.5"
			y="5"
			width="3"
			height="10"
			rx="1"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<rect
			x="16.5"
			y="9"
			width="3"
			height="6"
			rx="1"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
