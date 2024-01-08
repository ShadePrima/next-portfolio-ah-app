/**
 * @description move to the contact Form
 */

type Props = {
  namepath: string
}

export const scrollTo = ({ namepath }: Props) => {
  const contactForm = document.getElementById(namepath)

  if (contactForm) {
    contactForm.scrollIntoView({ behavior: 'smooth' })
  }
}
