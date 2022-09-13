import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const RunRuleIcon: React.FC<Props> = ({
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
			d="M10.6926 19.7701V10.2006C10.6926 9.41997 11.5471 8.94036 12.2135 9.34698L19.9348 14.0586C20.5685 14.4453 20.5748 15.3633 19.9465 15.7586L12.2252 20.6165C11.5592 21.0355 10.6926 20.5569 10.6926 19.7701Z"
			fill="#DAC6E1"
		/>
		<path
			d="M7 8L8 9L10 7"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M13 8L14 9L16 7"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M7 14L8 15L10 13"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M21.0298 17.0015C21.3365 17.1983 21.3365 17.6465 21.0298 17.8432L15.7058 21.2586C15.373 21.472 14.9358 21.2331 14.9358 20.8377L14.9358 14.007C14.9358 13.6117 15.373 13.3727 15.7058 13.5862L21.0298 17.0015Z"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M11 18H6C4.89543 18 4 17.1046 4 16V6C4 4.89543 4.89543 4 6 4H17C18.1046 4 19 4.89543 19 6V11"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
