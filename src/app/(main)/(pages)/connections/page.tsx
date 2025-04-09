import { currentUser } from '@clerk/nextjs'
import ConnectionCard from './_components/connection-card'
import { CONNECTIONS } from '@/lib/constant'
import { onDiscordConnect } from './_actions/discord-connection'
import { onNotionConnect } from './_actions/notion-connection'
import { onSlackConnect } from './_actions/slack-connection'

export default async function Connections(props: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // const user = await currentUser()
  // if (!user) return null
  const userId = '9393'
  const searchParams = await Promise.resolve(props.searchParams)

  const {
    webhook_id,
    webhook_name,
    webhook_url,
    guild_name,
    guild_id,
    channel_id,
    workspace_name,
    workspace_icon,
    workspace_id,
    database_id,
    app_id,
    authed_user_id,
    authed_user_token,
    slack_access_token,
    bot_user_id,
    team_id,
    team_name,
  } = searchParams ?? {
    webhook_id: '',
    webhook_name: '',
    webhook_url: '',
    guild_name: '',
    guild_id: '',
    channel_id: '',
    workspace_name: '',
    workspace_icon: '',
    workspace_id: '',
    database_id: '',
    app_id: '',
    authed_user_id: '',
    authed_user_token: '',
    slack_access_token: '',
    bot_user_id: '',
    team_id: '',
    team_name: '',
  }

  const onUserConnections = async () => {
    if (webhook_id) {
      await onDiscordConnect(
        channel_id as string,
        webhook_id as string,
        webhook_name as string,
        webhook_url as string,
        userId,
        guild_name as string,
        guild_id as string
      )
    }
    if (authed_user_id) {
      await onNotionConnect(
        authed_user_token as string,
        workspace_id as string,
        workspace_icon as string,
        workspace_name as string,
        database_id as string,
        authed_user_id as string
      )
    }
    if (slack_access_token) {
      await onSlackConnect(
        app_id as string,
        authed_user_id as string,
        authed_user_token as string,
        slack_access_token as string,
        bot_user_id as string,
        team_id as string,
        team_name as string,
        userId
      )
    }
  }

  const connections: { [key: string]: boolean } = {
    'Google Drive': false,
    'Discord': webhook_id ? true : false,
    'Notion': authed_user_id ? true : false,
    'Slack': slack_access_token ? true : false,
  }

  await onUserConnections()

  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Connections
      </h1>
      <div className="relative flex flex-col gap-4">
        <section className="flex flex-col gap-4 p-6 text-muted-foreground">
          Connect all your apps directly from here. You may need to connect
          these apps regularly to refresh verification
          {CONNECTIONS.map((connection) => (
            <ConnectionCard
              key={connection.title}
              description={connection.description}
              title={connection.title}
              icon={connection.image}
              type={connection.title}
              connected={connections}
            />
          ))}
        </section>
      </div>
    </div>
  )
}