import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const MinusGrayIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "12",
	width = "12",
}) => (
	<svg
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid meet"
		viewBox="0 0 12 12"
		width={width}
		height={height}
		fill={fill}
		stroke={stroke}
	>
		<title>{tooltip}</title>
		<defs>
			<path d="M12 6L0 6" id="a5cd1n3qB"></path>
		</defs>
		<g>
			<g>
				<g>
					<use
						xlinkHref="#a5cd1n3qB"
						opacity="1"
						fill="#000000"
						fill-opacity="0"
					></use>
					<g>
						<use
							xlinkHref="#a5cd1n3qB"
							opacity="1"
							fill-opacity="0"
							stroke="#272932"
							stroke-width="1.5"
							stroke-opacity="1"
						></use>
					</g>
				</g>
			</g>
		</g>
	</svg>
);
