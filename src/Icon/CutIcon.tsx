import React from "react";
interface Props {
	tooltip?: string;
	stroke?: string;
	fill?: string;
	height?: string;
	width?: string;
}

export const CutIcon: React.FC<Props> = ({
	tooltip = "",
	stroke = "",
	fill = "none",
	height = "18",
	width = "19",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 19 18"
		fill={fill}
		stroke={stroke}
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{tooltip}</title>
		<path
			d="M12.2945 0.0111821C10.6837 0.340771 9.39608 1.55229 8.97009 3.142C8.96954 3.14448 8.96885 3.14695 8.96831 3.14928L7.57689 8.6526L7.0615 8.79075C6.98954 8.52186 6.88187 8.26066 6.73932 8.00921C5.50226 5.82719 2.28616 5.95889 1.17105 8.20257C0.618304 9.31493 0.760577 10.6255 1.57411 11.662C2.30388 12.5919 3.57403 13.0008 4.82386 12.6659L6.66063 12.1737L6.16845 14.0105C5.83735 15.2462 6.23134 16.5217 7.17232 17.2602C8.20558 18.0712 9.51584 18.2178 10.6318 17.6633C12.8774 16.5474 13.0048 13.3307 10.825 12.095C10.5737 11.9525 10.3123 11.8448 10.0436 11.7728L10.1812 11.2594L15.6911 9.86603C15.6934 9.86548 15.6959 9.8648 15.6982 9.86425C17.2864 9.43867 18.4992 8.15217 18.8291 6.53979C18.8656 6.36168 18.8076 6.17724 18.6759 6.052C18.5441 5.92662 18.3571 5.87801 18.181 5.92346L11.0845 7.75158L12.911 0.659374C12.9563 0.483318 12.9077 0.296277 12.7825 0.164441C12.6571 0.0326054 12.4727 -0.02521 12.2945 0.0111821ZM4.55085 11.647C3.73663 11.8653 2.87379 11.6096 2.40385 11.0108C1.84767 10.3022 1.73987 9.42782 2.1156 8.67182C2.84537 7.20309 4.9903 7.0626 5.82197 8.52941C5.99335 8.83181 6.09072 9.15247 6.11104 9.48275C6.13151 9.81522 6.45203 10.0459 6.77379 9.95969L7.28081 9.82374C7.24964 9.94376 7.39383 9.38909 6.9758 10.9973L4.55085 11.647ZM10.3049 13.0124C11.7687 13.8422 11.6339 15.9875 10.1624 16.7187C9.40639 17.0945 8.53201 16.9867 7.82353 16.4305C7.22464 15.9605 6.96894 15.0977 7.18715 14.2833L8.41542 9.69918C8.49068 9.41875 8.78003 9.25094 9.06128 9.32633C9.30627 9.39197 9.46461 9.62063 9.45129 9.86438C9.08009 11.3055 9.21838 10.7776 8.87465 12.0605C8.78868 12.3813 9.01788 12.7028 9.35159 12.7233C9.68173 12.7436 10.0025 12.8408 10.3049 13.0124ZM17.4919 7.18991C17.0746 7.99562 16.337 8.6 15.4288 8.84444L10.4857 10.0944C10.4878 10.0812 10.4895 10.068 10.4914 10.0549L10.7842 8.91792L17.4919 7.18991ZM9.79846 8.51637C9.65783 8.42339 9.50183 8.35253 9.33429 8.30763C9.14271 8.25626 8.9499 8.24294 8.76341 8.26231L9.98989 3.41158C10.2342 2.50342 10.8387 1.76569 11.6444 1.34835C11.589 1.56423 9.86149 8.27206 9.79846 8.51637Z"
			fill="#677C95"
		/>
	</svg>
);