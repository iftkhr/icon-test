import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const Flow1Icon: React.FC<Props> = ({
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
		<mask id="path-1-inside-1_13763_618769" fill="white">
			<rect x="3" y="3" width="12" height="5" rx="1" />
		</mask>
		<rect
			x="3"
			y="3"
			width="12"
			height="5"
			rx="1"
			stroke="#F4955F"
			stroke-width="3"
			mask="url(#path-1-inside-1_13763_618769)"
		/>
		<mask id="path-2-inside-2_13763_618769" fill="white">
			<rect x="2" y="16" width="13" height="5" rx="1" />
		</mask>
		<rect
			x="2"
			y="16"
			width="13"
			height="5"
			rx="1"
			stroke="#F4955F"
			stroke-width="3"
			mask="url(#path-2-inside-2_13763_618769)"
		/>
		<mask id="path-3-inside-3_13763_618769" fill="white">
			<rect x="10" y="9" width="12" height="5" rx="1" />
		</mask>
		<rect
			x="10"
			y="9"
			width="12"
			height="5"
			rx="1"
			stroke="#F4955F"
			stroke-width="3"
			mask="url(#path-3-inside-3_13763_618769)"
		/>
		<path
			d="M7.00029 16C7.00029 15.3905 7.00023 14.3979 7.00016 13.4998C7.00008 12.3952 7.89558 11.5 9.0002 11.5C9.36771 11.5 9.72235 11.5 10 11.5"
			stroke="#F4955F"
			stroke-width="1.5"
			stroke-linejoin="round"
		/>
		<path
			d="M18 10C17.9999 9.71182 17.9999 8.56981 17.9999 7.50846C18 6.40054 17.0988 5.50801 15.9909 5.50392C15.6528 5.50267 15.5107 5.5 15 5.5"
			stroke="#F4955F"
			stroke-width="1.5"
			stroke-linejoin="round"
		/>
	</svg>
);
