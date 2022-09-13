import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const DropdownIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "5",
	width = "6",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 6 5"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M3.4361 3.98318C3.06211 4.36104 2.45165 4.36104 2.07766 3.98318L0.405033 2.29321C-0.192208 1.68978 0.235234 0.665321 1.08425 0.665321L4.42951 0.665321C5.27853 0.665321 5.70597 1.68978 5.10873 2.29321L3.4361 3.98318Z"
			fill="#01244E"
		/>
	</svg>
);
