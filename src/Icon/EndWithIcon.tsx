import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const EndWithIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "20",
	width = "24",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 20"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<rect
			x="0.5"
			y="0.5"
			width="23"
			height="19"
			rx="2.5"
			stroke="#1D6295"
		/>
		<path
			d="M19 4L19.5 4L19.5 3.5L19 3.5L19 4ZM19 16L19 16.5L19.5 16.5L19.5 16L19 16ZM18.5 4L18.5 16L19.5 16L19.5 4L18.5 4ZM19 15.5L14 15.5L14 16.5L19 16.5L19 15.5ZM19 3.5L14 3.5L14 4.5L19 4.5L19 3.5Z"
			fill="#1D6295"
		/>
		<path
			d="M8.21316 6.728H5.42916V5.456H12.5692V6.728H9.77316V14H8.21316V6.728Z"
			fill="#1D6295"
		/>
	</svg>
);
