"use client";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Label } from "@/components/ui/label";

type Props = {
  name: string;
  description: string;
  id: string;
  publish: boolean | null;
};

const Workflow = ({ description, id, name, publish }: Props) => {
  return (
    <Card className="relative flex w-full items-start p-6">
      <Link href={`/workflows/editor/${id}`} className="flex-1">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            <Image
              src="/googleDrive.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/notion.png"
              alt="Notion"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/discord.png"
              alt="Discord"
              height={30}
              width={30}
              className="object-contain"
            />
          </div>
          <div>
            <CardTitle className="text-lg font-medium">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </Link>
      <div className="absolute top-4 right-4 flex flex-col items-center gap-1.5">
        <span className="text-sm text-muted-foreground">
          {/* {publish ? "On" : "Off"} */}On
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="airplane-mode"
            // onClick={onPublishFlow}
            defaultChecked={publish!}
            onChange={() => {}}
            className="sr-only peer"
          />
          <div
            className="w-9 h-5 bg-zinc-900 rounded-full peer 
            peer-checked:after:translate-x-full peer-checked:after:border-white 
            after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
            after:bg-zinc-600 after:rounded-full after:h-4 after:w-4 after:transition-all"
          ></div>
        </label>
      </div>
    </Card>
  );
};

export default Workflow;
