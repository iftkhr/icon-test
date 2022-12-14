import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const TextLabelIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "20",
	width = "20",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 20 20"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<g opacity="0.8">
			<path
				d="M17.2858 7.04465H2.55035C1.30671 7.04465 0.294922 8.05643 0.294922 9.30007V14.9136C0.294922 16.1572 1.30671 17.169 2.55035 17.169H17.2858C18.5294 17.169 19.5412 16.1572 19.5412 14.9136V9.30007C19.5412 8.05643 18.5294 7.04465 17.2858 7.04465ZM18.0376 14.9136C18.0376 15.3281 17.7003 15.6654 17.2858 15.6654H2.55035C2.1358 15.6654 1.79854 15.3281 1.79854 14.9136V9.30007C1.79854 8.88553 2.1358 8.54826 2.55035 8.54826H17.2858C17.7003 8.54826 18.0376 8.88553 18.0376 9.30007V14.9136Z"
				fill="#15466B"
			/>
			<path
				d="M1.04673 3.52367H8.01603C8.43124 3.52367 8.76784 3.86026 8.76784 4.27548C8.76784 4.69069 8.43124 5.02728 8.01603 5.02728H1.04673C0.631518 5.02728 0.294922 4.69069 0.294922 4.27548C0.294922 3.86026 0.631519 3.52367 1.04673 3.52367Z"
				fill="#15466B"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="19.2463"
					height="19.2463"
					fill="white"
					transform="translate(0.294922 0.723495)"
				/>
			</clipPath>
		</defs>
	</svg>
);
