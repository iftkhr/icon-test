import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const TabletVerticalIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "19",
	width = "15",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 15 19"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M14.8701 16.7207L14.8701 2.93945C14.8701 1.77634 13.9239 0.830078 12.7607 0.830078L2.91699 0.830078C1.75388 0.830078 0.807617 1.77634 0.807617 2.93945L0.807616 16.7207C0.807616 17.8838 1.75388 18.8301 2.91699 18.8301L12.7607 18.8301C13.9239 18.8301 14.8701 17.8838 14.8701 16.7207ZM2.91699 17.4238C2.52929 17.4238 2.21387 17.1084 2.21387 16.7207L2.21387 2.93945C2.21387 2.55175 2.52929 2.23633 2.91699 2.23633L12.7607 2.23633C13.1484 2.23633 13.4639 2.55175 13.4639 2.93945L13.4639 16.7207C13.4639 17.1084 13.1484 17.4238 12.7607 17.4238L2.91699 17.4238Z"
			fill="#677C95"
		/>
	</svg>
);
