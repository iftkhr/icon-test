import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const NormalModeIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "32",
	width = "32",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 32 32"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<g opacity="0.5">
			<path d="M11.5 12V14" stroke="#272932" />
			<path d="M11.5 18V20" stroke="#272932" />
			<rect
				x="10"
				y="8.5"
				width="12"
				height="3"
				rx="0.5"
				stroke="#272932"
			/>
			<rect
				x="10"
				y="14.5"
				width="12"
				height="3"
				rx="0.5"
				stroke="#272932"
			/>
			<rect
				x="10"
				y="20.5"
				width="12"
				height="3"
				rx="0.5"
				stroke="#272932"
			/>
		</g>
	</svg>
);
