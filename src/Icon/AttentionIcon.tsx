import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const AttentionIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "16",
	width = "8",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 8 16"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<g>
			<rect
				y="-0.00390625"
				width="8"
				height="16.0011"
				rx="3"
				fill="white"
			/>
			<circle cx="3.99991" cy="12.5527" r="1.38578" fill="#EE3E54" />
			<path
				d="M2.67745 3.08232C2.6424 2.50718 3.09939 2.02148 3.6756 2.02148H4.32276C4.89897 2.02148 5.35596 2.50718 5.32091 3.08232L4.97967 8.68097C4.94807 9.19931 4.51848 9.60351 3.99918 9.60351C3.47987 9.60351 3.05029 9.19931 3.01869 8.68097L2.67745 3.08232Z"
				fill="#EE3E54"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="8"
					height="16"
					fill="white"
					transform="translate(8 16) rotate(-180)"
				/>
			</clipPath>
		</defs>
	</svg>
);
