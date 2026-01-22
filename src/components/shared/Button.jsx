import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm',
  secondary: 'border-2 border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50',
  accent: 'bg-accent-500 text-white hover:bg-accent-600 shadow-sm',
  white: 'bg-white text-primary-700 hover:bg-gray-50 shadow-sm',
  ghost: 'text-primary-600 hover:bg-primary-50',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
