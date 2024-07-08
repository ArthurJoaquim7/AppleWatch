import s from '../After/After.module.css'

//IMG
import left from '../img/left.jpg'
import right from '../img/right.jpg'

//Framer motion
import { easeInOut, motion, AnimatePresence, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react';
export const After = () => {


    const view = {
        initial: {
            y: 50,
            opacity: 0,

        },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, easeInOut, delay: 0.3 }
        }
    }
    const viewDelay = {
        initial: {
            y: 50,
            opacity: 0,

        },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, easeInOut, delay: 0.6 }
        }
    }

    // MOVE AT SCROLL
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["200%", "-50%"])



    return (
        <AnimatePresence>
            <div className={s.container}>
                <div className={s.box}>
                    <motion.p className={s.p}
                        variants={view}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}>Conectividade</motion.p>
                    <motion.h1 className={s.h1}
                        variants={view}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}>Tudo na <br />velocidade  da vida.</motion.h1>
                    <div className={s.mid}>
                        <img src={left} alt="left" className={s.leftImg} />
                        <motion.img src={right} alt="right" className={s.rightImg}
                            style={{ y: y }}
                        />
                    </div>
                    <motion.h4 className={s.h4}
                        variants={viewDelay}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}>O Apple Watch conecta você pelo pulso a tudo e todo mundo que é importante na sua vida. E, com um plano celular, você nem precisa do iPhone por perto para o relógio fazer isso.</motion.h4>
                </div>
            </div>
        </AnimatePresence>

    )
}
