import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const OutlineIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "18",
	width = "19",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 19 18"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M18.1675 15.891L18.1675 2.1098C18.1675 0.946689 17.2212 0.00042339 16.0581 0.000423339L2.35721 0.000422909C1.1941 0.000422858 0.247837 0.946688 0.247837 2.1098L0.247836 15.891C0.247836 17.0542 1.1941 18.0004 2.35721 18.0004L16.0581 18.0004C17.2212 18.0004 18.1675 17.0542 18.1675 15.891ZM2.35721 16.5942C1.96951 16.5942 1.65409 16.2787 1.65409 15.891L1.65409 2.1098C1.65409 1.72209 1.96951 1.40667 2.35721 1.40667L16.0581 1.40667C16.4458 1.40667 16.7612 1.7221 16.7612 2.1098L16.7612 15.891C16.7612 16.2787 16.4458 16.5942 16.0581 16.5942L2.35721 16.5942Z"
			fill="#677C95"
		/>
	</svg>
);
