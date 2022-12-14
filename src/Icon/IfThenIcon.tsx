import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const IfThenIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "20",
	width = "24",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 24 20"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<rect
			x="0.5"
			y="0.5"
			width="23"
			height="19"
			rx="2.5"
			stroke="#1D6295"
		/>
		<mask
			maskUnits="userSpaceOnUse"
			x="0"
			y="0"
			width="0"
			height="0"
			fill="black"
		>
			<rect fill="white" width="0" height="0" />
		</mask>
		<path
			d="M5.14645 9.14645C4.95118 9.34171 4.95118 9.65829 5.14645 9.85355L8.32843 13.0355C8.52369 13.2308 8.84027 13.2308 9.03553 13.0355C9.2308 12.8403 9.2308 12.5237 9.03553 12.3284L6.20711 9.5L9.03553 6.67157C9.2308 6.47631 9.2308 6.15973 9.03553 5.96447C8.84027 5.7692 8.52369 5.7692 8.32843 5.96447L5.14645 9.14645ZM18.8536 9.85355C19.0488 9.65829 19.0488 9.34171 18.8536 9.14645L15.6716 5.96447C15.4763 5.7692 15.1597 5.7692 14.9645 5.96447C14.7692 6.15973 14.7692 6.47631 14.9645 6.67157L17.7929 9.5L14.9645 12.3284C14.7692 12.5237 14.7692 12.8403 14.9645 13.0355C15.1597 13.2308 15.4763 13.2308 15.6716 13.0355L18.8536 9.85355ZM5.5 10H18.5V9H5.5V10Z"
			fill="#1D6295"
			mask="url(#)"
		/>
	</svg>
);
