import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const UploadIcon: React.FC<Props> = ({
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
			d="M15 9L12 6L9 9"
			stroke="white"
			stroke-width="1.3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12 14L12 6"
			stroke="white"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
		<path
			d="M5 16V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V16"
			stroke="white"
			stroke-width="1.3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
