import s from '../First/First.module.css'
//IMAGES
import logo from '../img/first.png'
import apple from '../img/apple.png'
import start1 from '../img/start1.jpg'
import redWatch from '../img/redWatch.jpg'
export const First = () => {
    return (
        <div className={s.container}>
            <div className={s.sticky}>
                <div className={s.into}>
                    <img src={apple} alt="apple" className={s.apple} />
                    <h1 className={s.h1}>Um grande passo para 2030.</h1>
                </div>
            </div>
            <section className={s.start}>
                <div className={s.startImages}>
                    <img src={logo} alt="logo" className={s.logo} />
                    <img src={start1} alt="start1" className={s.start1} />
                </div>
                <div className={s.startDesc}>
                    <div className={s.startLeft}>
                        <h1 className={s.h1Desc}>O primeiro produto Apple neutro em carbono está aqui.</h1>
                    </div>
                    <div className={s.startRight}>
                        <h4 className={s.h4}>Com inovações constantes em materiais, energia limpa e transporte de baixa emissão de carbono, o Apple Watch está disponível em combinações de caixa e pulseira neutras em carbono.
                        </h4>
                        <button className={s.btn}>Saiba Mais</button>
                    </div>
                </div>
            </section>
            {/* Ultima section */}
            <section className={s.last}>
                <div className={s.box}>
                    <div className={s.boxLeft}>
                        <p className={s.p}>Saúde</p>
                        <h1 className={s.h1}>Informações<br /> poderosas à vista.</h1>
                    </div>
                    <div className={s.boxRight}>
                        <h4 className={s.h4}>O Apple Watch ajuda você a entender melhor sua saúde física e mental. Os dados de saúde coletados ficam protegidos e seguros. Se quiser compartilhar essas informações com pessoas próximas e familiares, o controle é seu.</h4>
                    </div>
                </div>
            </section>
            <img src={redWatch} alt="redWatch" className={s.redWatch} />
        </div>
    )
}
