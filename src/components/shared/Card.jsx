export default function Card({
  children,
  className = '',
  padding = 'md',
  hover = false,
  ...props
}) {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const baseClasses = 'bg-white rounded-2xl shadow-sm'
  const hoverClasses = hover ? 'hover:shadow-md transition-shadow duration-200' : ''
  const classes = `${baseClasses} ${paddings[padding]} ${hoverClasses} ${className}`

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
