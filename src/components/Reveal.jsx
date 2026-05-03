import { motion } from 'framer-motion'

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
}

export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const MotionTag = motion[Tag] || motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      custom={delay}
    >
      {children}
    </MotionTag>
  )
}

export function RevealText({ text, className = '', delay = 0 }) {
  const words = text.split(' ')
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: delay + i * 0.05 }}
          >
            {w}{i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
