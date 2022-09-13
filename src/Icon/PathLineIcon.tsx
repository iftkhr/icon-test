import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const PathLineIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "6",
	width = "8",
}) => (
	<svg
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid meet"
		viewBox="0 0 8 6"
		width={width}
		height={height}
		fill={fill}
		stroke={stroke}
	>
		<title>{tooltip}</title>
		<defs>
			<path d="M4.15 8L4.15 0" id="aayd8EG2mm"></path>
		</defs>
		<g>
			<g>
				<g>
					<use opacity="1" fill="#000000" fill-opacity="0"></use>
					<g>
						<use
							opacity="1"
							fill-opacity="0"
							stroke="#4050a6"
							stroke-width="1.3"
							stroke-opacity="1"
						></use>
					</g>
				</g>
			</g>
		</g>
	</svg>
);
