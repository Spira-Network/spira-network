import { Button } from '@/components/ui/button'

interface LoginProps {
    onLogin: () => void
}

export default function Login({ onLogin }: LoginProps) {
    return (
        <div className='flex flex-col items-center justify-center p-8'>
            <h2 className='mb-2 text-4xl font-bold tracking-wide text-white'>Login</h2>
            <p className='mb-8 text-xs font-normal text-zinc-500'>Please login or signup with your details</p>
            <Button onClick={onLogin} className='flex w-full items-center justify-center gap-2.5'>
                <div className='h-8 w-8 rounded-full bg-blue-600' />
                <span>Continue with Coinbase</span>
            </Button>
        </div>
    )
}
