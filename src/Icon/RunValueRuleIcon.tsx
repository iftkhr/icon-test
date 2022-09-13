import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const RunValueRuleIcon: React.FC<Props> = ({
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
			d="M13.4158 18.7039V8.31119C13.4158 7.5154 14.3002 7.03843 14.9651 7.47559L22.7483 12.5925C23.3441 12.9842 23.3503 13.8558 22.7601 14.2558L14.9769 19.5316C14.3128 19.9817 13.4158 19.5061 13.4158 18.7039Z"
			fill="#DAC6E1"
		/>
		<path
			d="M21.0298 17.0015C21.3365 17.1983 21.3365 17.6465 21.0298 17.8432L15.7058 21.2586C15.373 21.472 14.9358 21.2331 14.9358 20.8377L14.9358 14.007C14.9358 13.6117 15.373 13.3727 15.7058 13.5862L21.0298 17.0015Z"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M11.5 18H6C4.89543 18 4 17.1046 4 16V6C4 4.89543 4.89543 4 6 4H17C18.1046 4 19 4.89543 19 6V11"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M4 11H19M11.5 4V18"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
