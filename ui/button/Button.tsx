import styles from './Button.module.scss'

type ButtonProps = {
  title: string
  variant: string
}

const Button = ({ title, variant }: ButtonProps) => {
  return (
    <div className={(styles.main, (variant = 'white' && styles.buttonWhite))}>
      {title}
    </div>
  )
}

export default Button
