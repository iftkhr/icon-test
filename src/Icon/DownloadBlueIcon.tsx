import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DownloadBlueIcon: React.FC<Props> = ({
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
		<path
			d="M5 6L8 9L11 6"
			stroke="#4050A6"
			stroke-width="1.3"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M8 3L8 8M4 10L4 11.5C4 11.7761 4.22386 12 4.5 12L8 12L11.5 12C11.7761 12 12 11.7761 12 11.5L12 10"
			stroke="#4050A6"
			stroke-width="1.3"
			stroke-linecap="round"
		/>
	</svg>
);
