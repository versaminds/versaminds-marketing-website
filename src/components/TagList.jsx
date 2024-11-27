import clsx from 'clsx'

export function TagList({
  children,
  className,
}) {
  return (
    <div className={clsx(className, 'flex flex-wrap gap-4')}>
      {children}
    </div>
  )
}

export function TagListItem({
  children,
  className,
}) {
  return (
    <li
      className={clsx(
        'rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600 list-none',
        className,
      )}
    >
      {children}
    </li>
  )
}
