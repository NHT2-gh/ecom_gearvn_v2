import { cn } from "@/lib/utils";
import { SVGProps } from "@/utils/icon-map";

export default function SVGScreen(props: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={cn(props.className, {
        "[&>path]:fill-[var(--color-neutral-300)]": props.colorstyle === "dark",
        "[&>path]:fill-[var(--color-neutral-800)]":
          props.colorstyle === "light",
      })}
      {...props}
    >
      <path
        d="M9.84835 1.53078H2.15015C1.51652 1.53078 1 2.04729 1 2.68093V7.59234C1 8.22597 1.51652 8.74249 2.15015 8.74249H5.6997V9.86861H3.96847V10.4692H8.03003V9.86861H6.3003V8.74249H9.84985C10.485 8.74249 11 8.22597 11 7.59234V2.68093C10.9985 2.04729 10.4835 1.53078 9.84835 1.53078ZM10.3979 7.59234C10.3979 7.89564 10.1517 8.14189 9.84835 8.14189H2.15015C1.84685 8.14189 1.6006 7.89564 1.6006 7.59234V2.68093C1.6006 2.37762 1.84685 2.13138 2.15015 2.13138H9.84835C10.1517 2.13138 10.3979 2.37762 10.3979 2.68093V7.59234Z"
        style={{
          fillOpacity: 1,
        }}
      />
    </svg>
  );
}
