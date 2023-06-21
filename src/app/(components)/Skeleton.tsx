import classNames from "classnames";

function Skeleton({ times, className }: { times: number; className: string }) {
  //the goal of className is to allow us to set the height and width of the boxes
  const outerClassNames = classNames(
    "border-b",
    "border-gray-200",
    "px-4",
    "py-1",
    "flex",
    "items-center",
    "justify-between",
    "animate-pulse",
    className
  );

  const innerClassNames = classNames(
    "w-full", // Adjust the width as needed
    "h-full", // Adjust the height as needed
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200",
    "animate-shimmer"
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });

  return <div>{boxes}</div>;
}

export default Skeleton;
