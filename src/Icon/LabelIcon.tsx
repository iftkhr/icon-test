import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const LabelIcon: React.FC<Props> = ({
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
		<rect x="1" y="12" width="15" height="10" rx="2" fill="#F7E691" />
		<path
			d="M18.8906 9H5.10938C3.94627 9 3 9.94814 3 11.1135L3 14.8865C3 16.0519 3.94627 17 5.10938 17H18.8906C20.0537 17 21 16.0519 21 14.8865V11.1135C21 9.94814 20.0537 9 18.8906 9ZM19.5938 14.8865C19.5938 15.2749 19.2783 15.591 18.8906 15.591H5.10938C4.72167 15.591 4.40625 15.2749 4.40625 14.8865L4.40625 11.1135C4.40625 10.7251 4.72168 10.409 5.10938 10.409H18.8906C19.2783 10.409 19.5938 10.7251 19.5938 11.1135V14.8865Z"
			fill="#272932"
		/>
		<path
			d="M4 7H7M10.5 7H12H13.5M17 7H20"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
