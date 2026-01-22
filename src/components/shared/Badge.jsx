const variants = {
  primary: 'bg-primary-100 text-primary-700',
  secondary: 'bg-secondary-100 text-secondary-700',
  accent: 'bg-accent-100 text-accent-700',
  gray: 'bg-gray-100 text-gray-700',
  stage1: 'bg-green-100 text-green-700',
  stage2: 'bg-blue-100 text-blue-700',
  stage3: 'bg-purple-100 text-purple-700',
}

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
}

export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center font-medium rounded-full ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}
