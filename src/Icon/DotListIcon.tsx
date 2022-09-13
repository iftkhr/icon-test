import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DotListIcon: React.FC<Props> = ({
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
				d="M5.33334 10.75C4.64168 10.75 4.08334 11.3083 4.08334 12C4.08334 12.6917 4.64168 13.25 5.33334 13.25C6.02501 13.25 6.58334 12.6917 6.58334 12C6.58334 11.3083 6.02501 10.75 5.33334 10.75ZM5.33334 5.75C4.64168 5.75 4.08334 6.30833 4.08334 7C4.08334 7.69167 4.64168 8.25 5.33334 8.25C6.02501 8.25 6.58334 7.69167 6.58334 7C6.58334 6.30833 6.02501 5.75 5.33334 5.75ZM5.33334 15.75C4.64168 15.75 4.08334 16.3167 4.08334 17C4.08334 17.6833 4.65001 18.25 5.33334 18.25C6.01668 18.25 6.58334 17.6833 6.58334 17C6.58334 16.3167 6.02501 15.75 5.33334 15.75ZM7.83334 17.8333H19.5V16.1667H7.83334V17.8333ZM7.83334 12.8333H19.5V11.1667H7.83334V12.8333ZM7.83334 6.16667V7.83333H19.5V6.16667H7.83334Z"
				fill="#272932"
			/>
		</g>
	</svg>
);