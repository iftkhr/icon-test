import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const NumberboxIcon2: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "17",
	width = "19",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 19 17"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M16.0012 0.210449H2.21997C1.05686 0.210449 0.110596 1.15671 0.110596 2.31982V14.5698C0.110596 15.7329 1.05686 16.6792 2.21997 16.6792H16.0012C17.1643 16.6792 18.1106 15.7329 18.1106 14.5698V2.31982C18.1106 1.15671 17.1643 0.210449 16.0012 0.210449ZM16.7043 14.5698C16.7043 14.9575 16.3889 15.2729 16.0012 15.2729H2.21997C1.83227 15.2729 1.51685 14.9575 1.51685 14.5698V2.31982C1.51685 1.93212 1.83227 1.6167 2.21997 1.6167H16.0012C16.3889 1.6167 16.7043 1.93212 16.7043 2.31982V14.5698Z"
			fill="#677C95"
		/>
		<path
			d="M8.62492 4.98395C8.62492 4.64292 8.90138 4.36646 9.24242 4.36646C9.58345 4.36646 9.85992 4.64292 9.85992 4.98395V11.9055C9.85992 12.2465 9.58345 12.523 9.24242 12.523C8.90138 12.523 8.62492 12.2465 8.62492 11.9055V4.98395Z"
			fill="#677C95"
		/>
		<path
			d="M8.87374 4.4857C9.09894 4.30494 9.42804 4.34096 9.6088 4.56616C9.78956 4.79136 9.75354 5.12046 9.52834 5.30122L7.21127 7.16106C6.98607 7.34183 6.65697 7.3058 6.47621 7.0806C6.29545 6.8554 6.33147 6.52631 6.55667 6.34554L8.87374 4.4857Z"
			fill="#677C95"
		/>
	</svg>
);
