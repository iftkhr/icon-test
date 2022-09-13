import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const EditStackIcon: React.FC<Props> = ({
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
			d="M7.16732 3H2.63028C2.28648 3 1.95676 3.13657 1.71366 3.37968C1.47056 3.62278 1.33398 3.9525 1.33398 4.2963V13.3704C1.33398 13.7142 1.47056 14.0439 1.71366 14.287C1.95676 14.5301 2.28648 14.6667 2.63028 14.6667H11.7044C12.0482 14.6667 12.3779 14.5301 12.621 14.287C12.8641 14.0439 13.0007 13.7142 13.0007 13.3704V8.83333"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
		/>
		<path
			d="M12.3159 1.73682C12.5742 1.47858 12.9244 1.3335 13.2896 1.3335C13.6548 1.3335 14.0051 1.47858 14.2633 1.73682C14.5216 1.99506 14.6667 2.34531 14.6667 2.71052C14.6667 3.07573 14.5216 3.42598 14.2633 3.68423L8.09655 9.85103L5.82338 10.4193C5.6769 10.4559 5.54423 10.3233 5.58085 10.1768L6.14914 7.90362L12.3159 1.73682Z"
			stroke="#272932"
			stroke-width="1.2"
			stroke-linecap="round"
		/>
	</svg>
);
