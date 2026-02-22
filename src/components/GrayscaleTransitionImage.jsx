import { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion'

const MotionImg = motion.img

export function GrayscaleTransitionImage({ src, alt = '', className, style, ...props }) {
  let ref = useRef(null)
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 35%'],
  })
  let grayscale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1])
  let filter = useMotionTemplate`grayscale(${grayscale})`

  return (
    <div ref={ref} className="group relative">
      <MotionImg
        src={src}
        alt={alt}
        className={className}
        style={{ filter, ...style }}
        {...props}
      />
      <div
        className="pointer-events-none absolute top-0 left-0 w-full opacity-0 transition duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        <img src={src} alt={alt} className={className} {...props} />
      </div>
    </div>
  )
}
