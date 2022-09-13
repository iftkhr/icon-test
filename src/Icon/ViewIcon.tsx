import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ViewIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "28",
	width = "28",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 28 28"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M1.1665 14C1.1665 14 5.83317 4.66666 13.9998 4.66666C22.1665 4.66666 26.8332 14 26.8332 14C26.8332 14 22.1665 23.3333 13.9998 23.3333C5.83317 23.3333 1.1665 14 1.1665 14Z"
			stroke="white"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 14C10.5 15.933 12.067 17.5 14 17.5Z"
			stroke="white"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
