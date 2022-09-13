import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const SaveFlowIcon: React.FC<Props> = ({
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
			d="M1.29047 16.7567V10.8919C1.29047 10.4684 1.80326 10.2101 2.16317 10.4334C3.32808 11.156 5.57152 12.2665 8.35724 12.2665C11.1535 12.2665 13.2171 11.2462 14.3263 10.5252C14.6945 10.2859 15.2535 10.551 15.2535 10.9901V16.7814C15.2535 16.958 15.2078 17.1305 15.0985 17.2692C14.5905 17.9137 12.7495 19.7644 8.35724 19.7644C3.99382 19.7644 2.03342 17.9379 1.47011 17.282C1.34494 17.1363 1.29047 16.9488 1.29047 16.7567Z"
			fill="#87DDB4"
		/>
		<path
			d="M14.3931 8.06299L12 10.4561L9.60688 8.06299"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12.0001 2.99996L12 10.456"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M6.62961 8.8833C5.75266 9.35882 5.23132 9.95413 5.23132 10.6002C5.23132 12.1578 8.26177 13.4205 12 13.4205C15.7383 13.4205 18.7687 12.1578 18.7687 10.6002C18.7687 9.95413 18.2474 9.35882 17.3704 8.8833"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M18.7687 14.4253C18.7687 15.9829 15.7383 17.2456 12 17.2456C8.26177 17.2456 5.23132 15.9829 5.23132 14.4253"
			stroke="#272932"
			stroke-width="1.5"
		/>
		<path
			d="M5.23132 10.5093L5.23132 18.3258C5.23132 19.8834 8.26177 21.1461 12 21.1461C15.7383 21.1461 18.7687 19.8834 18.7687 18.3258V10.5093"
			stroke="#272932"
			stroke-width="1.5"
		/>
	</svg>
);
