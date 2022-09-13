import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ApprovalIcon: React.FC<Props> = ({
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
			d="M1 20.9998V10.9414C1 9.83684 1.89543 8.94141 3 8.94141H13.2235C14.3281 8.94141 15.2235 9.83684 15.2235 10.9414V16.6446L11.0143 22.9998H3C1.89543 22.9998 1 22.1043 1 20.9998Z"
			fill="#F7E691"
		/>
		<path
			d="M4.75 6C4.75 5.30964 5.30964 4.75 6 4.75H18C18.6904 4.75 19.25 5.30964 19.25 6V12.3591C19.25 12.6196 19.1686 12.8736 19.0172 13.0856L14.9879 18.7265C14.7533 19.055 14.3745 19.25 13.9708 19.25H6C5.30964 19.25 4.75 18.6904 4.75 18V6Z"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M8.51238 11.6113L10.5399 14.5913C10.7357 14.8791 11.1582 14.8838 11.3603 14.6005L15.4878 8.81543"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M21.0116 16.0483L17.5535 21.001"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
