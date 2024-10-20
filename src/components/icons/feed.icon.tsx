import { SVGProps, memo } from 'react'

type Props = SVGProps<SVGSVGElement>

const SvgComponent = ({ className, ...props }: Props) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 22 22'
        width={22}
        height={22}
        fill='none'
        className={className}
        {...props}>
        <path
            fill={props.fill || '#fff'}
            fillRule='evenodd'
            d='M5.967 6.303c0-.556.45-1.007 1.006-1.007h12.08a1.007 1.007 0 0 1 0 2.013H6.972c-.556 0-1.006-.45-1.006-1.006Zm0 4.697c0-.556.45-1.006 1.006-1.006h12.08a1.007 1.007 0 0 1 0 2.013H6.972c-.556 0-1.006-.451-1.006-1.007Zm0 4.697c0-.555.45-1.006 1.006-1.006h12.08a1.007 1.007 0 1 1 0 2.013H6.972c-.556 0-1.006-.45-1.006-1.007ZM2.277 6.303a1.342 1.342 0 1 1 2.685 0 1.342 1.342 0 0 1-2.685 0ZM2.277 11a1.342 1.342 0 1 1 2.685 0 1.342 1.342 0 0 1-2.685 0ZM2.277 15.697a1.342 1.342 0 1 1 2.685 0 1.342 1.342 0 0 1-2.685 0Z'
            clipRule='evenodd'
        />
    </svg>
)
const Memo = memo(SvgComponent)
export default Memo
