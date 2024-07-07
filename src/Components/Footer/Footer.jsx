import s from '../Footer/Footer.module.css'

//IMG
import truck from '../img/truck.png'
import money from '../img/money.png'
import chat from '../img/chat.png'
export const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.boxDiv}>
                <div className={s.box}>
                    <img src={truck} alt="truck" className={s.footerImg} />
                    <h3 className={s.h3}>Frete grátis</h3>
                    <p className={s.p}>Em todo o Brasil. Em São Paulo, os pedidos qualificados têm envio no dia seguinte.</p>
                    <a href="##" className={s.mais}>Saiba mais</a>
                </div>
                {/* ----- */}
                <div className={s.box}>
                    <img src={money} alt="money" className={s.footerImg} />
                    <h3 className={s.h3}>Opções de pagamento</h3>
                    <p className={s.p}>Economize 10% à vista ou pague em até 12x.</p>
                    <a href="##" className={s.mais}>Saiba mais</a>
                </div>
                {/* ----- */}
                <div className={s.box}>
                    <img src={chat} alt="chat" className={s.footerImg} />
                    <h3 className={s.h3}>Ajuda para comprar</h3>
                    <p className={s.p}>Tem alguma dúvida? Ligue para a gente: 0800-761-0867.</p>
                    <a href="##" className={s.mais}>Saiba mais</a>
                </div>
            </div>
        </div>
    )
}
