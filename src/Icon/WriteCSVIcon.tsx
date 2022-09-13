import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const WriteCSVIcon: React.FC<Props> = ({
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
			d="M13.2279 9.46476L10.3946 10.2321C9.65308 10.4329 8.97143 9.75727 9.16574 9.01396L9.91027 6.16587L13.4153 2.60455C14.1182 1.90166 15.7581 1.94853 16.6017 2.79198C17.5483 3.73844 17.3892 5.32247 16.7518 5.95967L13.2279 9.46476Z"
			fill="#87DDB4"
		/>
		<path
			d="M9.11404 18.2173C9.00751 17.1733 8.22981 16.5767 7.17512 16.5767C6.01177 16.5767 5.10623 17.3757 5.10623 18.8182C5.10623 20.2543 5.99047 21.0597 7.17512 21.0597C8.37257 21.0597 9.03521 20.2457 9.11404 19.4723L8.0487 19.4659C7.97413 19.8857 7.65879 20.1349 7.19643 20.1349C6.57427 20.1349 6.18223 19.6854 6.18223 18.8182C6.18223 17.9851 6.56575 17.5014 7.20282 17.5014C7.68223 17.5014 7.99544 17.7805 8.0487 18.2173H9.11404ZM12.6762 17.9446H13.6862C13.6776 17.1286 13.0278 16.5767 12.0136 16.5767C11.0164 16.5767 10.2984 17.12 10.3048 17.9318C10.3026 18.5945 10.7671 18.9673 11.5214 19.1399L11.9774 19.2464C12.4568 19.3572 12.672 19.4872 12.6762 19.7322C12.672 19.9986 12.4227 20.1839 11.9987 20.1839C11.532 20.1839 11.2252 19.9666 11.2018 19.5469H10.1919C10.2046 20.5675 10.9142 21.0554 12.0115 21.0554C13.0981 21.0554 13.7416 20.5632 13.7458 19.7344C13.7416 19.0376 13.2707 18.6115 12.4099 18.4219L12.0349 18.3366C11.6386 18.2514 11.3872 18.1193 11.3957 17.8594C11.3978 17.6207 11.6024 17.4482 12.0115 17.4482C12.4227 17.4482 12.6485 17.6335 12.6762 17.9446ZM15.8693 16.6364H14.6889L16.1612 21H17.5653L19.0376 16.6364H17.8572L16.8813 19.8324H16.8451L15.8693 16.6364Z"
			fill="#272932"
		/>
		<path
			d="M16.978 3.48407C17.2879 3.17418 17.7082 3.00009 18.1464 3.00009C18.5847 3.00009 19.005 3.17418 19.3149 3.48407C19.6248 3.79396 19.7989 4.21427 19.7989 4.65252C19.7989 5.09077 19.6248 5.51107 19.3149 5.82096L16.1159 9.01889L13.3234 9.71701C13.1769 9.75363 13.0442 9.62095 13.0808 9.47447L13.779 6.682L16.978 3.48407Z"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<line
			x1="3.75"
			y1="13.25"
			x2="20.25"
			y2="13.25"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<line
			x1="3.75"
			y1="9.25"
			x2="9.25"
			y2="9.25"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
	</svg>
);
