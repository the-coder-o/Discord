import { redirect } from 'next/navigation'
import { redirectToSignIn } from '@clerk/nextjs'

import { db } from '@/lib/db'
import { currentProfile } from '@/lib/current-profile'
interface InviteCodePageProps {
  params: {
    inviteCode: string
  }
}

const InviteCodePage = async ({ params }: InviteCodePageProps) => {
  const profile = await currentProfile()

  if (!profile) return redirectToSignIn()
  if (!params.inviteCode) return redirect('/')

  const existingServer = await db.server.findFirst({
    where: {
      invitedCode: params.inviteCode,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  })

  if (existingServer) return redirect(`/servers/${existingServer.id}`)

  const server = await db.server.update({
    where: {
      invitedCode: params.inviteCode,
    },
    data: {
      members: {
        create: [
          {
            profileId: profile.id,
          },
        ],
      },
    },
  })

  if (server) return redirect(`/servers/${server.id}`)

  return null
}

export default InviteCodePage
