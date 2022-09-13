import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ExpandGrayIcon: React.FC<Props> = ({
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
		<g clip-path="url(#clip0)">
			<path
				d="M13 8L13 3L8 3"
				stroke="#272932"
				stroke-width="1.2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M3 8L3 13L8 13"
				stroke="#272932"
				stroke-width="1.2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect width="16" height="16" fill="white" />
			</clipPath>
		</defs>
	</svg>
);
