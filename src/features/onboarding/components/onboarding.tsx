import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { ResponsiveDialog } from '@/components/responsive-dialog'
import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { X } from 'lucide-react'
import Image from 'next/image'

const formSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    // Add more fields as needed
})

export const Onboarding: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
        // Handle form submission
        if (step < 3) {
            setStep(step + 1)
        } else {
            onClose()
        }
    }

    const content = (
        <div className='relative h-full'>
            <button onClick={onClose} className='absolute right-4 top-4 text-gray-400 hover:text-gray-600'>
                <X size={24} />
            </button>
            <div className='flex h-full flex-col'>
                <div className='relative flex-1'>
                    <Image
                        src='/path/to/your/PublicWheel/image.jpg'
                        layout='fill'
                        objectFit='cover'
                        alt='Background'
                        className='opacity-50'
                    />
                </div>
                <div className='p-6'>
                    <h2 className='mb-4 text-center text-2xl font-bold'>Step {step} of 3</h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                            <FormField
                                control={form.control}
                                name='username'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Enter your username' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Add more form fields for each step */}
                            <Button type='submit' className='w-full'>
                                {step === 3 ? 'Finish' : 'Next'}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )

    return (
        <ResponsiveDialog open={isOpen} onOpenChange={onClose} title='Create your profile'>
            {content}
        </ResponsiveDialog>
    )
}
