import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CellphoneVerticalIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "19",
	width = "12",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 12 19"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M9.80029 0.830078H2.76904C1.60593 0.830078 0.659668 1.77634 0.659668 2.93945C0.659668 3.52322 0.659668 16.2011 0.659668 16.7207C0.659668 17.8838 1.60593 18.8301 2.76904 18.8301H9.80029C10.9634 18.8301 11.9097 17.8838 11.9097 16.7207C11.9097 16.3736 11.9097 3.31011 11.9097 2.93945C11.9097 1.77634 10.9634 0.830078 9.80029 0.830078ZM10.5034 16.7207C10.5034 17.1084 10.188 17.4238 9.80029 17.4238H2.76904C2.38134 17.4238 2.06592 17.1084 2.06592 16.7207V14.1543H10.5034V16.7207ZM10.5034 12.748H2.06592V4.9082H10.5034V12.748ZM10.5034 3.50195H2.06592V2.93945C2.06592 2.55175 2.38134 2.23633 2.76904 2.23633H9.80029C10.188 2.23633 10.5034 2.55175 10.5034 2.93945V3.50195Z"
			fill="#677C95"
		/>
	</svg>
);
