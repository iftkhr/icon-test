import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ExpandIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "10",
	width = "17",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 17 10"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M16.369 0.609112C16.085 0.325136 15.6245 0.325088 15.3405 0.609161L8.5822 7.36761L1.82356 0.609112C1.53958 0.325136 1.07907 0.325088 0.795049 0.609161C0.511025 0.893185 0.511025 1.35365 0.795049 1.63767L8.06797 8.9104C8.20436 9.04678 8.38933 9.12339 8.5822 9.12339C8.77507 9.12339 8.96009 9.04674 9.09643 8.91035L16.369 1.63762C16.653 1.35365 16.653 0.893136 16.369 0.609112Z"
			fill="#01244E"
		/>
	</svg>
);
