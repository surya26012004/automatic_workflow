"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-black data-[state=unchecked]:bg-neutral-300 focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=checked]:bg-white dark:data-[state=unchecked]:bg-neutral-700 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-neutral-700 shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-white dark:bg-black pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 border border-neutral-500"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
