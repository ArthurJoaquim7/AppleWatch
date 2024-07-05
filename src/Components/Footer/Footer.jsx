import s from '../Footer/Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.box}>
                <img src={''} alt="truck" className={s.footerImg} />
                <h3 className={s.h3}>Frete grátis</h3>
                <p className={s.p}>Em todo o Brasil. Em São Paulo, os pedidos qualificados têm envio no dia seguinte.</p>
                <a href="##" className={s.mais}>Saiba mais</a>
            </div>
            {/* ----- */}
            <div className={s.box}>
                <img src={''} alt="truck" className={s.footerImg} />
                <h3 className={s.h3}>Frete grátis</h3>
                <p className={s.p}>Em todo o Brasil. Em São Paulo, os pedidos qualificados têm envio no dia seguinte.</p>
                <a href="##" className={s.mais}>Saiba mais</a>
            </div>
            {/* ----- */}
            <div className={s.box}>
                <img src={''} alt="truck" className={s.footerImg} />
                <h3 className={s.h3}>Frete grátis</h3>
                <p className={s.p}>Em todo o Brasil. Em São Paulo, os pedidos qualificados têm envio no dia seguinte.</p>
                <a href="##" className={s.mais}>Saiba mais</a>
            </div>
        </div>
    )
}
