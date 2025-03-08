import styles from './Avatar.module.css'

interface AvatarProps {
  src: string
  alt?: string
  hasBorder?: boolean
}

export default function Avatar({
  src,
  hasBorder = true,
  alt = '',
}: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  )
}
