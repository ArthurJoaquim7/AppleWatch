import s from '../After/After.module.css'

//IMG
import left from '../img/left.jpg'
import right from '../img/right.jpg'
export const After = () => {
    return (
        <div className={s.container}>
            <div className={s.box}>
                <p className={s.p}>Conectividade</p>
                <h1 className={s.h1}>Tudo na <br/>velocidade  da vida.</h1>
                <div className={s.mid}>
                    <img src={left} alt="left" className={s.leftImg} />
                    <img src={right} alt="right" className={s.rightImg} />
                </div>
                <h4 className={s.h4}>O Apple Watch conecta você pelo pulso a tudo e todo mundo que é importante na sua vida. E, com um plano celular, você nem precisa do iPhone por perto para o relógio fazer isso.</h4>
            </div>
        </div>
    )
}
