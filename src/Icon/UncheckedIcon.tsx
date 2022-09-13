import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const UncheckedIcon: React.FC<Props> = ({
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
	</svg>
);
