import cl from 'clsx'

import { Work_Sans } from 'next/font/google'
const work_sans = Work_Sans({ subsets: ['latin'] })
import ExpertCard from './expertCard/ExpertCard'
import styles from './Expertise.module.scss'

const Expertise = () => {
  return (
    <div id='expertise' className={styles.main}>
      <div className={cl(styles.content, 'container')}>
        <div className={styles.titleContainer}>
          <p
            className={cl(
              styles.titleSmall,
              work_sans.className,
              'title-small text-center'
            )}
          >
            Features
          </p>
          <h1 className={cl(styles.title, 'title-middle text-center mt-8')}>
            Our expertise
          </h1>

          <p
            className={cl(work_sans.className, 'text-middle text-center mt-24')}
          >
            Step into the dynamic world of Pixel Puncher, where innovation meets
            pixel perfection. As a leading digital agency, we specialize in
            bringing your ideas to life with a unique blend of creativity and
            cutting-edge technology
          </p>
        </div>

        <div className={styles.cardContainer}>
          {cardList.map((card) => (
            <ExpertCard
              key={card.id}
              id={card.id}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Expertise

const cardList = [
  {
    id: 1,
    title: 'Backend',
    text: "Behind every successful website is a powerful engine, and that's where our expertise shines. We harness top-notch technologies like Python, Django, and AWS to ensure your site runs smoothly. Think of us as the wizards behind the curtain, making sure the magic happens without a hitch.'",
  },
  {
    id: 2,
    title: 'Design',
    text: "Dive into world-class designs crafted with tools like Figma and Adobe's creative suite. We craft designs that resonate and inspire. Think of them as the paintbrushes and colors behind your website's masterpiece. With these innovative tools, your brand will shine in the digital realm.",
  },
  {
    id: 3,
    title: 'Frontend',
    text: 'Think of your website as a well-orchestrated symphony. We use tools like JavaScript, React, and TypeScript to make sure every note, or in this case, every click and interaction, is pitch-perfect. Trust in our expertise to ensure your website is as dynamic and responsive as your business deserves.',
  },
]
