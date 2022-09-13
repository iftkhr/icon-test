import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CloseGrayIcon: React.FC<Props> = ({
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
		<g opacity="0.2">
			<rect
				x="7.40332"
				y="15.1826"
				width="11.0018"
				height="2"
				rx="1"
				transform="rotate(-45 7.40332 15.1826)"
				fill="#272932"
			/>
			<rect
				x="8.81689"
				y="7.40234"
				width="11.0033"
				height="2"
				rx="1"
				transform="rotate(45 8.81689 7.40234)"
				fill="#272932"
			/>
		</g>
	</svg>
);
