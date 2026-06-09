/**
 * External links opened in a new tab must use rel="noopener noreferrer"
 * to prevent tabnabbing (window.opener access).
 */
export default function ExternalLink({
  href,
  children,
  className,
  'aria-label': ariaLabel,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}
