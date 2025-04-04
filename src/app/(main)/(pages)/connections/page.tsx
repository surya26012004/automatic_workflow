"use client";
import React from "react";
import { CONNECTIONS } from "@/lib/constant";
import ConnectionCard from "./_components/connection-card";

type Props = {
  searchParams?: { [key: string]: string | undefined };
};

const Connections = (props: Props) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#121212]">
      <div className="sticky top-0 z-[10] border-b border-[#2A2A2A] bg-[#121212]/80 px-8 py-5 backdrop-blur-lg">
        <h1 className="text-2xl font-semibold text-white">Connections</h1>
      </div>
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8 text-[#8F8F8F] text-base">
            Connect all your apps directly from here. You may need to connect
            these apps regularly to refresh verification.
          </div>
          <div className="flex flex-col gap-4">
            {CONNECTIONS.map((connection) => (
              <ConnectionCard
                key={connection.title}
                description={connection.description}
                title={connection.title}
                icon={connection.image}
                type={connection.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connections;
