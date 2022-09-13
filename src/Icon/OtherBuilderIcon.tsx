import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const OtherBuilderIcon: React.FC<Props> = ({
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
			d="M7.75997 20.9322C7.43047 21.0825 7.05198 21.0825 6.72248 20.9322L3.13657 19.2966C2.69111 19.0934 2.40529 18.6488 2.40532 18.1592L2.40558 13.9576C2.40561 13.4789 2.67898 13.0423 3.10956 12.8332L6.69527 11.092C7.04001 10.9246 7.44249 10.9246 7.78724 11.092L11.3735 12.8332C11.8042 13.0423 12.0776 13.479 12.0776 13.9578L12.0773 18.1593C12.0773 18.6489 11.7914 19.0933 11.346 19.2965L7.75997 20.9322Z"
			stroke="#918470"
			stroke-width="1.5"
		/>
		<path
			d="M2.79871 13.6064L7.24153 15.8442L7.24153 20.8911"
			stroke="#918470"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M11.7866 13.606L7.3485 15.8008"
			stroke="#918470"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M17.4625 21.0157C17.133 21.166 16.7545 21.166 16.425 21.0157L12.8391 19.3801C12.3936 19.1769 12.1078 18.7323 12.1078 18.2427L12.1081 14.0411C12.1081 13.5624 12.3815 13.1258 12.8121 12.9167L16.3978 11.1755C16.7425 11.0081 17.145 11.0081 17.4898 11.1755L21.076 12.9167C21.5067 13.1258 21.7801 13.5625 21.7801 14.0413L21.7798 18.2428C21.7798 18.7323 21.494 19.1768 21.0486 19.38L17.4625 21.0157Z"
			stroke="#918470"
			stroke-width="1.5"
		/>
		<path
			d="M12.6227 13.6587L16.944 15.8141L16.944 20.9744"
			stroke="#918470"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M21.4664 13.7308L16.9439 15.8848"
			stroke="#918470"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12.7475 12.8619C12.418 13.0122 12.0395 13.0122 11.71 12.8619L8.12412 11.2263C7.67866 11.0231 7.39284 10.5785 7.39287 10.0889L7.39313 5.88729C7.39316 5.40864 7.66653 4.97202 8.09711 4.76294L11.6828 3.02173C12.0276 2.85432 12.43 2.85431 12.7748 3.0217L16.3611 4.76291C16.7917 4.97201 17.0651 5.40871 17.0651 5.88746L17.0648 10.089C17.0648 10.5785 16.779 11.023 16.3336 11.2262L12.7475 12.8619Z"
			stroke="#918470"
			stroke-width="1.5"
		/>
		<path
			d="M7.82959 5.47314L12.229 7.7703L12.229 12.5893"
			stroke="#918470"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M16.7358 5.58756L12.4105 7.68262"
			stroke="#918470"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
