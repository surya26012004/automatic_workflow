'use client'

import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { toast } from 'sonner'
import { onFlowPublish } from '../_actions/workflow-connections'

type Props = {
  name: string
  description: string
  id: string
  publish: boolean | null
}

const Workflow = ({ description, id, name, publish }: Props) => {
  const onPublishFlow = async (event: any) => {
    const response = await onFlowPublish(
      id,
      event.target.ariaChecked === 'false'
    )
    if (response) toast.message(response)
  }

  return (
    <Card className="w-full">
      <div className="flex items-center justify-between p-4">
        <Link href={`/workflows/editor/${id}`} className="flex-1">
          <div className="flex flex-col space-y-4">
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
            <div className="text-left">
              {/* <CardHeader className="p-1">{name}</CardHeader> */}
              <CardTitle className="text-lg">{name}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </Link>

        <div className="ml-4 flex flex-col items-center justify-center gap-2 border-l border-gray-200 pl-4">
          <div className="flex items-center justify-center">
            <Switch
              id={`switch-${id}`}
              onClick={onPublishFlow}
              defaultChecked={publish!}
              className="data-[state=checked]:bg-purple-500 data-[state=unchecked]:bg-purple-200"
            />
          </div>
          <Label
            htmlFor={`switch-${id}`}
            className="text-sm text-gray-300"
          >
            {publish! ? 'On' : 'Off'}
          </Label>
        </div>
      </div>
    </Card>
  )
}

export default Workflow