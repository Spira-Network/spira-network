import React from 'react'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'

interface ResponsiveDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    title: string
    children: React.ReactNode
}

export function ResponsiveDialog({ open, onOpenChange, title, children }: ResponsiveDialogProps) {
    const isDesktop = useMediaQuery('(min-width: 768px)')

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                    </DialogHeader>
                    {children}
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>{title}</DrawerTitle>
                </DrawerHeader>
                {children}
            </DrawerContent>
        </Drawer>
    )
}
