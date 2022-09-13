import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const HorizontalModeIcon: React.FC<Props> = ({
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
		<g opacity="0.5">
			<rect
				x="5.5"
				y="4.5"
				width="9"
				height="3"
				rx="0.5"
				stroke="#272932"
			/>
			<rect
				x="5.5"
				y="16.5"
				width="9"
				height="3"
				rx="0.5"
				stroke="#272932"
			/>
			<rect
				x="10.5"
				y="10.5"
				width="9"
				height="3"
				rx="0.5"
				stroke="#272932"
			/>
			<path
				d="M7.00029 16C7.00029 15.4627 7.00024 14.7088 7.00019 14.0001C7.0001 12.8955 7.89562 12 9.00027 12C9.36775 12 9.72236 12 10 12"
				stroke="#272932"
				stroke-linejoin="round"
			/>
			<path
				d="M18 10C17.9999 9.73705 17.9999 8.86908 17.9999 8.0086C17.9999 6.90068 17.0988 6.008 15.9909 6.00393C15.6527 6.00268 15.5106 6.00002 15 6.00002"
				stroke="#272932"
				stroke-linejoin="round"
			/>
		</g>
	</svg>
);
