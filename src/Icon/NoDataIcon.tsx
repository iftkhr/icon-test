import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const NoDataIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "16",
	width = "16",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 16 16"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<line
			x1="5.5"
			y1="8.5"
			x2="5.5"
			y2="11.5"
			stroke="#EE3E54"
			stroke-linecap="round"
		/>
		<line
			x1="10.5"
			y1="8.5"
			x2="10.5"
			y2="11.5"
			stroke="#EE3E54"
			stroke-linecap="round"
		/>
		<line
			x1="4.5"
			y1="11.5"
			x2="11.5"
			y2="11.5"
			stroke="#EE3E54"
			stroke-linecap="round"
		/>
		<mask id="path-4-inside-1" fill="white">
			<rect x="4" y="5" width="8" height="4" rx="0.5" />
		</mask>
		<rect
			x="4"
			y="5"
			width="8"
			height="4"
			rx="0.5"
			stroke="#EE3E54"
			stroke-width="2"
			mask="url(#path-4-inside-1)"
		/>
	</svg>
);
