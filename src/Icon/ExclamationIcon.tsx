import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ExclamationIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "18",
	width = "18",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 18 18"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M9 0C4.02528 0 0 4.02564 0 9C0 13.9747 4.02564 18 9 18C13.9747 18 18 13.9744 18 9C18 4.02528 13.9744 0 9 0ZM9 16.5938C4.80259 16.5938 1.40625 13.1971 1.40625 9C1.40625 4.80259 4.80287 1.40625 9 1.40625C13.1974 1.40625 16.5938 4.80287 16.5938 9C16.5938 13.1974 13.1971 16.5938 9 16.5938Z"
			fill="white"
		/>
		<path
			d="M9 4.53125C8.61166 4.53125 8.29688 4.84604 8.29688 5.23437V9.76224C8.29688 10.1506 8.61166 10.4654 9 10.4654C9.38834 10.4654 9.70312 10.1506 9.70312 9.76224V5.23437C9.70312 4.84604 9.38834 4.53125 9 4.53125Z"
			fill="white"
		/>
		<path
			d="M9 13.2246C9.52424 13.2246 9.94922 12.7996 9.94922 12.2754C9.94922 11.7512 9.52424 11.3262 9 11.3262C8.47576 11.3262 8.05078 11.7512 8.05078 12.2754C8.05078 12.7996 8.47576 13.2246 9 13.2246Z"
			fill="white"
		/>
	</svg>
);
