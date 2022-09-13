import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const ArrowDownIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "16",
	width = "16",
}) => (
	<svg
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid meet"
		viewBox="0 0 16 16"
		width={width}
		height={height}
		fill={fill}
		stroke={stroke}
	>
		<title>{tooltip}</title>
		<defs>
			<path d="M8.32 11.5L8.32 4.5" id="f6pl2RLxTG"></path>
			<path d="M8.32 11.5L5.32 8.5" id="i2XHB1iEV"></path>
			<path d="M11.32 8.5L8.32 11.5" id="eiMlFIEuN"></path>
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
