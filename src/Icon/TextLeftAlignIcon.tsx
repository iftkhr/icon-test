import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const TextLeftAlignIcon: React.FC<Props> = ({
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
				d="M14.3333 14.3333H5V15.8889H14.3333V14.3333ZM14.3333 8.11111H5V9.66667H14.3333V8.11111ZM5 12.7778H19V11.2222H5V12.7778ZM5 19H19V17.4444H5V19ZM5 5V6.55556H19V5H5Z"
				fill="#272932"
			/>
		</g>
	</svg>
);
