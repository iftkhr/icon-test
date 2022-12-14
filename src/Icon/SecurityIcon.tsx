import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const SecurityIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "19",
	width = "14",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 14 19"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M12.7324 7.68701H11.6777V5.01514C11.6777 2.49503 9.62753 0.444824 7.10742 0.444824C4.58732 0.444824 2.53711 2.49503 2.53711 5.01514V7.68701H1.48242C1.09409 7.68701 0.779297 8.0018 0.779297 8.39014V17.7417C0.779297 18.13 1.09409 18.4448 1.48242 18.4448H12.7324C13.1208 18.4448 13.4355 18.13 13.4355 17.7417V8.39014C13.4355 8.0018 13.1208 7.68701 12.7324 7.68701ZM3.94336 5.01514C3.94336 3.27047 5.36276 1.85107 7.10742 1.85107C8.85209 1.85107 10.2715 3.27047 10.2715 5.01514V7.68701H3.94336V5.01514ZM12.0293 17.0386H2.18555V9.09326C2.83654 9.09326 11.5734 9.09326 12.0293 9.09326V17.0386Z"
			fill="#677C95"
		/>
	</svg>
);
