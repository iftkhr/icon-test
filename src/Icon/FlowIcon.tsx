import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const FlowIcon: React.FC<Props> = ({
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
		<path
			d="M20.6245 4.1875H3.5C2.752 4.1875 2 4.5 2 5.5V18.3633C1.97998 19.2773 2.5528 19.8125 3.5 19.8125H20.534C21.4273 19.8125 22 19.3371 22 18.4645V5.48438C22 4.75391 21.5386 4.1875 20.6245 4.1875ZM7.70312 18.25H3.5625V9.26562H7.70312V18.25ZM20.4375 18.25H9.26562V9.26562H20.4375V18.25ZM20.4375 7.70312H3.5625V5.75H20.4375V7.70312Z"
			fill="white"
		/>
	</svg>
);
