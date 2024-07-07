import s from '../Footer/Footer.module.css'

//IMG
import truck from '../img/truck.png'
import money from '../img/money.png'
import chat from '../img/chat.png'
export const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.box}>
                <img src={truck} alt="truck" className={s.footerImg} />
                <h3 className={s.h3}>Frete grátis</h3>
                <p className={s.p}>Em todo o Brasil. Em São Paulo, os pedidos qualificados têm envio no dia seguinte.</p>
                <a href="##" className={s.mais}>Saiba mais</a>
            </div>
            {/* ----- */}
            <div className={s.box}>
                <img src={money} alt="truck" className={s.footerImg} />
                <h3 className={s.h3}>Frete grátis</h3>
                <p className={s.p}>Em todo o Brasil. Em São Paulo, os pedidos qualificados têm envio no dia seguinte.</p>
                <a href="##" className={s.mais}>Saiba mais</a>
            </div>
            {/* ----- */}
            <div className={s.box}>
                <img src={chat} alt="truck" className={s.footerImg} />
                <h3 className={s.h3}>Frete grátis</h3>
                <p className={s.p}>Em todo o Brasil. Em São Paulo, os pedidos qualificados têm envio no dia seguinte.</p>
                <a href="##" className={s.mais}>Saiba mais</a>
            </div>
        </div>
    )
}
