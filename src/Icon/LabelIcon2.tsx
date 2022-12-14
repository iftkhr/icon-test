import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const LabelIcon2: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "19",
	width = "19",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 19 19"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<g opacity="0.6">
			<path
				d="M15.9177 6.4519H2.13647C0.973365 6.4519 0.0270996 7.39817 0.0270996 8.56128V13.8113C0.0270996 14.9744 0.973365 15.9207 2.13647 15.9207H15.9177C17.0808 15.9207 18.0271 14.9744 18.0271 13.8113V8.56128C18.0271 7.39817 17.0808 6.4519 15.9177 6.4519ZM16.6208 13.8113C16.6208 14.199 16.3054 14.5144 15.9177 14.5144H2.13647C1.74877 14.5144 1.43335 14.199 1.43335 13.8113V8.56128C1.43335 8.17358 1.74877 7.85815 2.13647 7.85815H15.9177C16.3054 7.85815 16.6208 8.17358 16.6208 8.56128V13.8113Z"
				fill="#677C95"
			/>
			<path
				d="M0.730225 3.15918H7.24822C7.63655 3.15918 7.95135 3.47398 7.95135 3.8623C7.95135 4.25063 7.63654 4.56543 7.24822 4.56543H0.730225C0.341899 4.56543 0.0270996 4.25063 0.0270996 3.8623C0.0270996 3.47398 0.3419 3.15918 0.730225 3.15918Z"
				fill="#677C95"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="18"
					height="18"
					fill="white"
					transform="translate(0.0270996 0.540039)"
				/>
			</clipPath>
		</defs>
	</svg>
);
