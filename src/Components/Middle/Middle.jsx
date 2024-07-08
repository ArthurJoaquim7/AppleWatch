import s from '../Middle/Middle.module.css'
//Framer motion
import { easeInOut, motion, AnimatePresence, } from 'framer-motion'

export const Middle = () => {
    const view = {
        initial: {
            y: 50,
            opacity: 0,

        },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, easeInOut, delay: 0.2 }
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
            transition: { duration: 0.6, easeInOut, delay: 0.4 }
        }
    }
    return (
        <AnimatePresence>
            <motion.div className={s.container}>
                <div className={s.box}>
                    <motion.p className={s.p}
                        variants={view}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}>Fitness</motion.p>
                    <motion.h1 className={s.h1}
                        variants={view}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}>Motivação pura.</motion.h1>
                    <motion.h4 className={s.h4}
                        variants={viewDelay}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}>Tem um treino na cabeça? Ele está no seu pulso. Basta um toque. Escolha as métricas que mais motivam você para serem exibidas nas visualizações personalizáveis. E desafie seus limites sem se preocupar com a resistência do Apple Watch.</motion.h4>
                </div>
            </motion.div>
        </AnimatePresence>

    )
}
