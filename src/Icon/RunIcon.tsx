import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const RunIcon: React.FC<Props> = ({
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
		<path
			d="M12.735 7.16533C13.334 7.56057 13.334 8.43943 12.735 8.83467L5.05074 13.905C4.38589 14.3437 3.5 13.8668 3.5 13.0703L3.5 2.92969C3.5 2.13315 4.38589 1.65633 5.05074 2.09502L12.735 7.16533Z"
			fill="#35B687"
		/>
	</svg>
);
