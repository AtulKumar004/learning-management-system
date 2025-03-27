import { cn } from '@/lib/utils'
import React from 'react'

export default function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className= {cn('text-xl md:text-2xl lg:text-3xl font-bold')}>{children}</h2>
    )
}
