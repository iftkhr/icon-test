import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const HStackIcon: React.FC<Props> = ({
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
		<rect x="8" y="2" width="15" height="10" rx="2" fill="#87DDB4" />
		<path
			d="M18.8906 8H5.10938C3.94627 8 3 8.94814 3 10.1135L3 13.8865C3 15.0519 3.94627 16 5.10938 16H18.8906C20.0537 16 21 15.0519 21 13.8865V10.1135C21 8.94814 20.0537 8 18.8906 8ZM19.5938 13.8865C19.5938 14.2749 19.2783 14.591 18.8906 14.591H5.10938C4.72167 14.591 4.40625 14.2749 4.40625 13.8865L4.40625 10.1135C4.40625 9.72508 4.72168 9.40903 5.10938 9.40903H18.8906C19.2783 9.40903 19.5938 9.72508 19.5938 10.1135V13.8865Z"
			fill="#272932"
		/>
	</svg>
);
