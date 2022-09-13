import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const RuleTableIcon: React.FC<Props> = ({
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
			d="M20.625 4.1875H3.50048C2.75248 4.1875 2.00048 4.5 2.00048 5.5V18.3633C1.98047 19.2773 2.55328 19.8125 3.50048 19.8125H20.5345C21.4278 19.8125 22.0005 19.3371 22.0005 18.4645V5.48438C22.0005 4.75391 21.5391 4.1875 20.625 4.1875ZM7.70361 18.25H3.56298V9.26562H7.70361V18.25ZM20.438 18.25H9.26611V9.26562H20.438V18.25ZM20.438 7.70312H3.56298V5.75H20.438V7.70312Z"
			fill="white"
		/>
	</svg>
);
