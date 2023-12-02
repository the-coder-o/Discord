'use client'

import React from 'react'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface ActionTooltipInterface {
  label: string
  children: React.ReactNode
  side?: 'top' | 'left' | 'right' | 'bottom'
  align?: 'start' | 'center' | 'end'
}

const ActionTooltip = ({ children, side, align, label }: ActionTooltipInterface) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p className={'font-semibold text-sm capitalize'}>{label.toLowerCase()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ActionTooltip
