'use client'

import { useEffect, useState } from 'react'

import InviteModal from '@/components/modals/invite-modal'
import MembersModal from '@/components/modals/members-modal'
import EditServerModal from '@/components/modals/edit-server-modal'
import LeaveServerModal from '@/components/modals/leave-server-modal'
import DeleteServerModal from '@/components/modals/delete-server-modal'
import CreateChannelModal from '@/components/modals/create-channel-modal'
import CreateServerModal from '../../components/modals/create-server-modal'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
    </>
  )
}

export default ModalProvider
