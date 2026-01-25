const CircularProgress = ({
  value = 0,
  size = 96,
  strokeWidth = 10,
  color = "text-primary/70",
}) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center mr-4"
      style={{ width: size, height: size }}
    >
      <svg
        className="-rotate-90"
        width={size}
        height={size}
        viewBox="0 0 100 100"
      >
        {/* Background */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={strokeWidth}
          className="text-accent/50"
          stroke="currentColor"
          fill="none"
        />

        {/* Progress */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={strokeWidth}
          className={`${color} transition-all duration-700 ease-out`}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      {/* Center text */}
      <span className="absolute text-lg font-semibold">
        {value}%
      </span>
    </div>
  );
};

export default CircularProgress;
