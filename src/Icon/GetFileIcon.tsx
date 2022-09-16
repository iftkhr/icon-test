import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const GetFileIcon: React.FC<Props> = ({
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
			d="M15.9758 6.48198V1.83499C15.9758 0.958022 17.0242 0.505807 17.662 1.10764L23.647 6.75463C24.3053 7.37569 23.8657 8.48198 22.9608 8.48198H17.9758C16.8712 8.48198 15.9758 7.58655 15.9758 6.48198Z"
			fill="#F7E691"
		/>
		<path
			d="M20 9.82899V18C20 19.1046 19.1046 20 18 20H14.9735M14.9735 4H9.5C8.39543 4 7.5 4.89543 7.5 6V7.42857"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M14.397 4.5V7.75243C14.397 8.857 15.2924 9.75243 16.397 9.75243H20"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="square"
		/>
		<path
			d="M15.0399 4.05371L19.9999 9.0643"
			stroke="#272932"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M6.75 14.2631C6.75 14.6774 7.08579 15.0131 7.5 15.0131C7.91421 15.0131 8.25 14.6774 8.25 14.2631L6.75 14.2631ZM8.25 17.3947C8.25 16.9805 7.91421 16.6447 7.5 16.6447C7.08579 16.6447 6.75 16.9805 6.75 17.3947L8.25 17.3947ZM12.5404 15.5673L7.84456 19.2952L8.7772 20.47L13.473 16.7422L12.5404 15.5673ZM7.84456 12.2311L12.5404 15.9589L13.473 14.7841L8.7772 11.0563L7.84456 12.2311ZM8.25 14.2631L8.25 12.0353L6.75 12.0353L6.75 14.2631L8.25 14.2631ZM8.25 19.491L8.25 17.3947L6.75 17.3947L6.75 19.491L8.25 19.491ZM8.7772 11.0563C7.958 10.406 6.75 10.9894 6.75 12.0353L8.25 12.0353C8.25 12.2445 8.0084 12.3612 7.84456 12.2311L8.7772 11.0563ZM7.84456 19.2952C8.0084 19.1651 8.25 19.2818 8.25 19.491L6.75 19.491C6.75 20.5369 7.95799 21.1203 8.7772 20.47L7.84456 19.2952ZM13.473 16.7422C14.1034 16.2417 14.1034 15.2846 13.473 14.7841L12.5404 15.9589C12.4143 15.8589 12.4143 15.6674 12.5404 15.5673L13.473 16.7422Z"
			fill="#272932"
		/>
		<path
			d="M7.50004 15.0132C7.91426 15.0132 8.25004 14.6774 8.25004 14.2632C8.25004 13.849 7.91426 13.5132 7.50004 13.5132V15.0132ZM7.50004 18.0132C7.91426 18.0132 8.25004 17.6774 8.25004 17.2632C8.25004 16.849 7.91426 16.5132 7.50004 16.5132V18.0132ZM4.5 15.0132H7.50004V13.5132H4.5V15.0132ZM7.50004 16.5132H4.5V18.0132H7.50004V16.5132ZM4.75 16.7632V14.7632H3.25V16.7632H4.75ZM4.5 16.5132C4.63807 16.5132 4.75 16.6251 4.75 16.7632H3.25C3.25 17.4535 3.80964 18.0132 4.5 18.0132V16.5132ZM4.5 13.5132C3.80964 13.5132 3.25 14.0728 3.25 14.7632H4.75C4.75 14.9013 4.63807 15.0132 4.5 15.0132V13.5132Z"
			fill="#272932"
		/>
	</svg>
);