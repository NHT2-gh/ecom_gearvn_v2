import React from "react";
import { _footerContent } from "@/_mocks";
import Link from "next/link";
import { Typography } from "@/components/v2/ui/typography";
import Image from "next/image";
import { getIcon } from "@/utils/icon-map";

export default function Footer() {
  return (
    <footer className="bg-white w-screen max-w-[100vw] relative mt-[2rem] bottom-0 left-0 right-0">
      <div className="container mx-auto">
        <nav className="space-y-4 xl:flex xl:gap-2">
          <ul className="flex flex-wrap gap-6 md:gap-2 w-full xl:grow">
            {_footerContent.navContent.map((navContent) => (
              <li key={navContent.title} className="flex-1 min-w-[150px]">
                <Typography level="h4-24" className="!text-sm mb-2.5">
                  {navContent.title}
                </Typography>

                <ul className="space-y-2">
                  {navContent.items.map((item) => {
                    let href: string | undefined = item.link;
                    if (item.type === "call" && item.link) {
                      href = `tel:${item.link}`;
                    } else if (item.type === "email" && item.link) {
                      href = `mailto:${item.link}`;
                    }

                    return (
                      <li key={item.title} className="group">
                        {href ? (
                          <Link
                            className="group-hover:text-accent-primary group-hover:underline"
                            href={href}
                          >
                            {item.title}
                          </Link>
                        ) : (
                          <Typography level="body-12" className="min-w-[5rem]">
                            {item.title}
                          </Typography>
                        )}

                        {item.showLink && href && (
                          <Link
                            className="text-state-info font-semibold"
                            href={href}
                          >
                            {item.link}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>

          <div className="w-full space-y-2.5 xl:w-fit text-left xl:shrink-0">
            <div className="space-y-2.5 w-full">
              <Typography level="h4-24" className="!text-sm mb-2.5 uppercase">
                Đơn vị vận chuyển
              </Typography>
              <div className="flex gap-3 items-center justify-start">
                {_footerContent.transports.map((transport) => (
                  <Image
                    width={69}
                    height={31}
                    sizes="69px"
                    className="h-[1.875rem] w-auto bg-white object-contain"
                    key={transport.name}
                    src={transport.logoUrl}
                    alt={transport.name}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2.5 w-full">
              <Typography level="h4-24" className="!text-sm mb-2.5 uppercase">
                Phương thức thanh toán
              </Typography>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(4.3125rem,1fr))] items-center w-full gap-3 mx-auto xl:mx-0">
                {_footerContent.paymentMethods.map((paymentMethod) => (
                  <Image
                    width={69}
                    height={31}
                    sizes="40px"
                    className="w-[2.5rem] h-auto bg-white object-cover mx-auto"
                    key={paymentMethod.name}
                    src={paymentMethod.logoUrl}
                    alt={paymentMethod.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </nav>

        <hr className="w-full border-stroke my-4" />

        <div className="flex flex-col md:flex-row items-center gap-4 py-4">
          <Typography level="h4-24" className="!text-sm uppercase">
            KẾT NỐI VỚI CHÚNG TÔI
          </Typography>

          <div className="flex gap-3 items-center">
            {_footerContent.socialsContact.map((socialContact) => {
              const Icon = getIcon(socialContact.icon);
              return (
                <Link
                  key={socialContact.name}
                  href={socialContact.link}
                  target="_blank"
                  className="inline"
                >
                  <Icon
                    width={32}
                    height={32}
                    className={
                      socialContact.icon === "facebook" ? "!size-[2.5rem]" : ""
                    }
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
