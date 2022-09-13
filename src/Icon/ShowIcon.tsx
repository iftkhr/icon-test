import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ShowIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "16",
	width = "16",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 16 16"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<g opacity="0.2">
			<path
				d="M1.00709 8.45444C0.853093 8.27612 0.726456 8.12154 0.629774 8C0.726456 7.87847 0.853093 7.72388 1.00709 7.54556C1.40036 7.09018 1.96897 6.48367 2.66991 5.87845C4.08732 4.65462 5.97193 3.5 8 3.5C10.0281 3.5 11.9127 4.65462 13.3301 5.87845C14.031 6.48367 14.5996 7.09018 14.9929 7.54556C15.1469 7.72388 15.2735 7.87847 15.3702 8C15.2735 8.12154 15.1469 8.27612 14.9929 8.45444C14.5996 8.90982 14.031 9.51633 13.3301 10.1215C11.9127 11.3454 10.0281 12.5 8 12.5C5.97193 12.5 4.08732 11.3454 2.66991 10.1215C1.96897 9.51633 1.40036 8.90982 1.00709 8.45444Z"
				stroke="#272932"
			/>
			<circle cx="8" cy="8" r="2" fill="#272932" />
		</g>
	</svg>
);
