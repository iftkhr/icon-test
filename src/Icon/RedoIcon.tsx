import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const RedoIcon: React.FC<Props> = ({
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
		<g opacity="0.5">
			<path
				d="M14 7.33334L13.06 8.27334L14 9.22001L15.4467 10.6667H9.33333C7.49333 10.6667 6 12.16 6 14V16.6667H7.33333V14C7.33333 12.9 8.23333 12 9.33333 12H15.4467L14 13.4467L13.06 14.3867L14 15.3333L18 11.3333L14 7.33334Z"
				fill="black"
			/>
		</g>
	</svg>
);
