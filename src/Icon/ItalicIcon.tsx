import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ItalicIcon: React.FC<Props> = ({
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
				d="M10.3333 6.33334V8.01757H12.5934L9.11052 16.0126H7V18H13.3373V16.0126H11.1082L14.544 8.01757H16.6706V6.33334H10.3333Z"
				fill="#272932"
			/>
		</g>
	</svg>
);
