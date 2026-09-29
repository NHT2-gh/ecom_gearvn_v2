import { Typography } from "@/components/v2/ui/typography";

export interface Policy {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export default function Policy({ policies }: { policies: Policy[] }) {
  return (
    <div className="space-y-5">
      <header className="flex items-center justify-between">
        <Typography level="h6-18" className="text-[1rem]" fontWeight="semibold">
          Chính sách sản phẩm
        </Typography>
      </header>

      <div className="grid grid-cols-2 gap-2.5">
        {policies.map((policy) => (
          <div
            className="px-5 py-4 border border-stroke-primary"
            key={policy.title}
          >
            {policy.icon}
            <Typography
              fontWeight="semibold"
              className="text-txt-primary mt-3 mb-2"
            >
              {policy.title}
            </Typography>
            <Typography className="text-txt-secondary">
              {policy.content}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
