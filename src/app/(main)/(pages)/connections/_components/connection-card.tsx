import { ConnectionTypes } from "@/lib/types";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Props = {
  type: ConnectionTypes;
  icon: string;
  title: ConnectionTypes;
  description: string;
  callback?: () => void;
};

const ConnectionCard = ({
  description,
  type,
  icon,
  title,
  callback,
}: Props) => {
  return (
    <Card className="flex w-full min-h-[80px] items-center justify-between bg-[#1C1C1C] border-[#2A2A2A] hover:border-[#3A3A3A] transition-colors">
      <CardHeader className="flex-1 py-3 px-8 w-full">
        <div className="flex flex-row items-center gap-6">
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image
              src={icon}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 48px) 100vw, 48px"
              priority
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1 min-w-0 pr-8">
            <div className="flex items-center justify-between gap-4">
              <CardTitle className="text-base font-medium text-white">
                {title}
              </CardTitle>
              <div className="flex-shrink-0">
                <Link
                  href={
                    title == "Discord"
                      ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
                      : title == "Notion"
                      ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
                      : title == "Slack"
                      ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
                      : "#"
                  }
                  onClick={callback}
                  className="rounded-lg bg-white/10 px-4 py-1.5 text-sm font-medium text-white hover:bg-white/20 transition-colors"
                >
                  Connect
                </Link>
              </div>
            </div>
            <CardDescription className="text-sm text-[#8F8F8F] line-clamp-1 max-w-3xl">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ConnectionCard;
