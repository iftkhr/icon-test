import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const WriteFileIcon: React.FC<Props> = ({
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
			d="M13.4985 8.53165L10.6652 9.299C9.92365 9.49984 9.242 8.82416 9.43631 8.08086L10.1808 5.23276L13.6859 1.67144C14.3887 0.968551 16.0287 1.01543 16.8723 1.85888C17.8189 2.80534 17.6597 4.38936 17.0224 5.02657L13.4985 8.53165Z"
			fill="#DAC6E1"
		/>
		<path
			d="M15.978 3.48407C16.2879 3.17418 16.7082 3.00009 17.1464 3.00009C17.5847 3.00009 18.005 3.17418 18.3149 3.48407C18.6248 3.79396 18.7989 4.21427 18.7989 4.65252C18.7989 5.09077 18.6248 5.51107 18.3149 5.82096L15.1159 9.01889L12.3234 9.71701C12.1769 9.75363 12.0442 9.62095 12.0808 9.47447L12.779 6.682L15.978 3.48407Z"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M16 13V18C16 19.1046 15.1046 20 14 20H7C5.89543 20 5 19.1046 5 18V8C5 6.89543 5.89543 6 7 6H9"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="square"
		/>
		<path
			d="M9 6.5V11C9 12.1046 9.89543 13 11 13H16"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="square"
		/>
	</svg>
);
