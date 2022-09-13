import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const TextFileIcon: React.FC<Props> = ({
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
			d="M4.75 5C4.75 3.75736 5.75736 2.75 7 2.75H11.7574C12.3541 2.75 12.9264 2.98705 13.3483 3.40901L13.8787 2.87868L13.3483 3.40901L18.591 8.65165C19.0129 9.07361 19.25 9.6459 19.25 10.2426V19C19.25 20.2426 18.2426 21.25 17 21.25H7C5.75736 21.25 4.75 20.2426 4.75 19V5Z"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<path
			d="M12 3V8C12 9.10457 12.8954 10 14 10H19"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<path
			d="M9.5 13.5142V12.5H14.2784V13.5142H12.4972V18.3182H11.2813V13.5142H9.5Z"
			fill="#272932"
		/>
	</svg>
);
