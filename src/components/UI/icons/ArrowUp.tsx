export default function ArrowUp({ width, heigth }: iconProps) {
  return (
    <svg
      height={heigth}
      width={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4V20M12 4L18 10M12 4L6 10"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
