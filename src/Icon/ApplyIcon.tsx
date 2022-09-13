import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ApplyIcon: React.FC<Props> = ({
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
		<g opacity="0.7">
			<rect
				x="6.06372"
				y="10.1221"
				width="7.33455"
				height="1.33333"
				rx="0.666667"
				transform="rotate(-45 6.06372 10.1221)"
				fill="#35B687"
			/>
			<rect
				x="4.85352"
				y="7.06055"
				width="4.32913"
				height="1.33333"
				rx="0.666667"
				transform="rotate(45 4.85352 7.06055)"
				fill="#35B687"
			/>
		</g>
	</svg>
);
