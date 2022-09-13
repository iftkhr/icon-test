import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const EditStackLightIcon: React.FC<Props> = ({
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
		<g opacity="0.5">
			<path
				d="M7.16683 3H2.62979C2.28599 3 1.95628 3.13657 1.71317 3.37968C1.47007 3.62278 1.3335 3.9525 1.3335 4.2963V13.3704C1.3335 13.7142 1.47007 14.0439 1.71317 14.287C1.95628 14.5301 2.28599 14.6667 2.62979 14.6667H11.7039C12.0477 14.6667 12.3774 14.5301 12.6205 14.287C12.8636 14.0439 13.0002 13.7142 13.0002 13.3704V8.83333"
				stroke="#272932"
				stroke-width="1.2"
				stroke-linecap="round"
			/>
			<path
				d="M12.3159 1.73633C12.5742 1.47809 12.9244 1.33301 13.2896 1.33301C13.6548 1.33301 14.0051 1.47809 14.2633 1.73633C14.5216 1.99457 14.6667 2.34482 14.6667 2.71003C14.6667 3.07524 14.5216 3.4255 14.2633 3.68374L8.09655 9.85054L5.82338 10.4188C5.6769 10.4554 5.54423 10.3228 5.58085 10.1763L6.14914 7.90313L12.3159 1.73633Z"
				stroke="#272932"
				stroke-width="1.2"
				stroke-linecap="round"
			/>
			<path
				d="M7 8L8 9"
				stroke="#272932"
				stroke-width="1.2"
				stroke-linecap="round"
			/>
		</g>
	</svg>
);
