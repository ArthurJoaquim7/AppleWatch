import s from '../First/First.module.css'

//IMAGES
import logo from '../img/first.png'
import apple from '../img/apple.png'
import start1 from '../img/start1.jpg'
import redWatch from '../img/redWatch.jpg'

//Framer motion
import { easeInOut, motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';
import { Slide } from '../Slide/Slide'
import { Middle } from '../Middle/Middle'
import { After } from '../After/After'
import { End } from '../End/End'

export const First = () => {
    
    // ZOOM AT SCROLL
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });

    // Scale config
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 15, 30, 40]);

    //Framer Motion Variables
    const Apple = {
        initial: {
            y: 50,
            opacity: 0,

        },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, easeInOut, delay: 2 }
        }
    }
    const view = {
        initial: {
            y: 50,
            opacity: 0,

        },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 1, easeInOut, delay: 0.5 }
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
    // ZOOM TITLE
    const zoom = {
        initial: {
            scale: 5,
            opacity: 0,

        },
        animate: {
            scale: 1,
            opacity: 1,
            transition: { duration: 3, easeInOut, delay: 0.2, opacity: 0 }
        }
    }
    const zoom2 = {
        initial: {
            scale: 5,
            opacity: 0,
        },
        animate: {
            scale: 1,
            opacity: 1,
            transition: { duration: 3, easeInOut, delay: 0.6 }
        }
    }
    const zoom3 = {
        initial: {
            scale: 5,
            opacity: 0,

        },
        animate: {

            scale: 1,
            opacity: 1,
            transition: { duration: 3, easeInOut, delay: 1 }
        }
    }
    const zoom4 = {
        initial: {
            scale: 5,
            opacity: 0,

        },
        animate: {

            scale: 1,
            opacity: 1,
            transition: { duration: 3, easeInOut, delay: 1.4 }
        }
    }
    const zoom5 = {
        initial: {
            scale: 5,
            opacity: 0,

        },
        animate: {

            scale: 1,
            opacity: 1,
            transition: { duration: 3, easeInOut, delay: 1.8 }
        }
    }

    return (
        <AnimatePresence>
            <div className={s.container} >
                <div className={s.sticky} ref={ref}>
                    <motion.div className={s.into}
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1, delay: 8 }}
                    >
                        <motion.img src={apple} alt="apple" className={s.apple} style={{ scale }} variants={Apple}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }} />
                        <motion.h1 className={s.h12023} variants={zoom}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                        >Um</motion.h1>
                        <motion.h1 className={s.h12023} variants={zoom2}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}>grande</motion.h1>
                        <motion.h1 className={s.h12023} variants={zoom3}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}>passo</motion.h1>
                        <motion.h1 className={s.h12023} variants={zoom4}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}>para</motion.h1>
                        <motion.h1 className={s.h12023} variants={zoom5}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}>2030.</motion.h1>
                    </motion.div>
                </div>
                <section className={s.start}>
                    <div className={s.startImages}>
                        <motion.img src={logo} alt="logo" className={s.logo} variants={view}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }} />
                        <motion.img src={start1} alt="start1" className={s.start1} variants={viewDelay}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }} />
                    </div>
                    <div className={s.startDesc}>
                        <div className={s.startLeft}>
                            <motion.h1 className={s.h1Desc} variants={view}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }} >O primeiro produto Apple neutro em carbono está aqui.</motion.h1>
                        </div>
                        <motion.div className={s.startRight} variants={viewDelay}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}>
                            <h4 className={s.h4}>Com inovações constantes em materiais, energia limpa e transporte de baixa emissão de carbono, o Apple Watch está disponível em combinações de caixa e pulseira neutras em carbono.
                            </h4>
                            <button className={s.btn}>Saiba Mais</button>
                        </motion.div>
                    </div>
                </section>
                {/* Ultima section */}
                <section className={s.last}>
                    <div className={s.box}>
                        <motion.div className={s.boxLeft} variants={view}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}>
                            <p className={s.p}>Saúde</p>
                            <h1>Informações<br /> poderosas à vista.</h1>
                        </motion.div>
                        <motion.div className={s.boxRight} variants={viewDelay}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}>
                            <h4 className={s.h4}>O Apple Watch ajuda você a entender melhor sua saúde física e mental. Os dados de saúde coletados ficam protegidos e seguros. Se quiser compartilhar essas informações com pessoas próximas e familiares, o controle é seu.</h4>
                        </motion.div>
                    </div>
                </section>
                <img src={redWatch} alt="redWatch" className={s.redWatch} />
                {/* Componentes */}
                <Slide />
                <Middle />
                <After />
                <End />
            </div >
        </AnimatePresence>

    )
}
