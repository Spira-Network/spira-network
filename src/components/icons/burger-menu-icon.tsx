import * as React from 'react'
import { SVGProps, memo } from 'react'

type Props = SVGProps<SVGSVGElement>

const SvgComponent = ({ className, ...props }: Props) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width={24}
        height={24}
        fill='none'
        className={className}
        {...props}>
        <path
            stroke='inherit'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2.667}
            d='M3 6h18M3 12h18M3 18h18'
        />
    </svg>
)
const Memo = memo(SvgComponent)
export default Memo
