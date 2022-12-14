import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const StackIcon2: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "19",
	width = "9",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 9 19"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M0.0223382 2.61362L0.0223388 16.3949C0.0223388 17.558 0.968605 18.5042 2.13171 18.5042L5.89716 18.5042C7.06027 18.5042 8.00654 17.558 8.00654 16.3949L8.00654 2.61362C8.00654 1.45051 7.06027 0.504242 5.89716 0.504242L2.13171 0.504242C0.968604 0.504242 0.0223381 1.45051 0.0223382 2.61362ZM5.89716 1.91049C6.28486 1.91049 6.60029 2.22591 6.60029 2.61362L6.60029 16.3949C6.60029 16.7826 6.28487 17.098 5.89716 17.098L2.13171 17.098C1.74401 17.098 1.42859 16.7826 1.42859 16.3949L1.42859 2.61362C1.42859 2.22591 1.74401 1.91049 2.13171 1.91049L5.89716 1.91049Z"
			fill="#677C95"
		/>
	</svg>
);
