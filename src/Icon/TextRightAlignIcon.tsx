import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const TextRightAlignIcon: React.FC<Props> = ({
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
			<path
				d="M5 19H19V17.4444H5V19ZM9.66667 15.8889H19V14.3333H9.66667V15.8889ZM5 12.7778H19V11.2222H5V12.7778ZM9.66667 9.66667H19V8.11111H9.66667V9.66667ZM5 5V6.55556H19V5H5Z"
				fill="#272932"
			/>
		</g>
	</svg>
);
