import { Link } from 'react-router-dom'
import clsx from 'clsx'

export function Button({ invert = false, className, children, href, ...props }) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
      : 'bg-neutral-950 text-white hover:bg-neutral-800',
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) {
    return (
      <a className={className} href={href} {...props}>
        {inner}
      </a>
    )
  }

  return (
    <Link className={className} to={href} {...props}>
      {inner}
    </Link>
  )
}
