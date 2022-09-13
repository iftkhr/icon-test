import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const UndoIcon: React.FC<Props> = ({
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
			opacity="0.5"
			d="M10 7.33334L10.94 8.27334L10 9.22001L8.55333 10.6667H14.6667C16.5067 10.6667 18 12.16 18 14V16.6667H16.6667V14C16.6667 12.9 15.7667 12 14.6667 12H8.55333L10 13.4467L10.94 14.3867L10 15.3333L6 11.3333L10 7.33334Z"
			fill="black"
		/>
	</svg>
);
