import * as React from 'react'
import { SVGProps, memo } from 'react'

type Props = SVGProps<SVGSVGElement>

const SvgComponent = ({ className, ...props }: Props) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 25 26'
        width={25}
        height={26}
        fill='none'
        className={className}
        {...props}>
        <g clipPath='url(#a)'>
            <path
                fill='inherit'
                d='M18.984 18.845a2.207 2.207 0 0 0-2.09-1.529h-1.1v-3.3a1.1 1.1 0 0 0-1.1-1.1h-6.6v-2.2h2.2a1.1 1.1 0 0 0 1.1-1.1v-2.2h2.2a2.2 2.2 0 0 0 2.2-2.2v-.45a8.782 8.782 0 0 1 3.19 14.08Zm-7.59 2.794a8.787 8.787 0 0 1-7.7-8.723c0-.682.088-1.342.231-1.969l5.27 5.27v1.1a2.2 2.2 0 0 0 2.2 2.2m1.1-17.6a11 11 0 1 0 0 22 11 11 0 0 0 0-22Z'
            />
        </g>
        <defs>
            <clipPath id='a'>
                <path fill='inherit' d='m.664 1.085 24-.169.168 24-24 .168z' />
            </clipPath>
        </defs>
    </svg>
)
const Memo = memo(SvgComponent)
export default Memo
