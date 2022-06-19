import styles from './hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/site/shubham.jpg'
          alt='shubham kumar'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi , Shubham here ! </h1>
      <p>I teach about web dev stuff</p>
    </section>
  )
}

export default Hero
