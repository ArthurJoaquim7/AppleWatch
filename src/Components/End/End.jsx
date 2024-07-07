import s from '../End/End.module.css'

//IMG
import phone from '../img/phone.jpg'
import cube from '../img/cube.png'
import um from '../img/um.png'
import dois from '../img/dois.png'
import tres from '../img/tres.png'

export const End = () => {
    return (
        <div className={s.container}>
            <section className={s.box}>
                <div className={s.boxDesc}>
                    <img src={cube} alt="cube" className={s.cubeImg} />
                    <h2 className={s.h2}>
                        Veja o Apple Watch Series 9 em realidade aumentada.
                    </h2>
                    <p className={s.p}>
                        Abra esta página no Safari do seu iPhone ou iPad.
                    </p>
                </div>
                <img src={phone} alt="phone" className={s.phoneImg} />
            </section>
            {/* -----Watches Section */}
            <h2 className={s.h22}>Qual é o Apple Watch ideal para você?</h2>
            <section className={s.watches}>
                <div className={s.watchDiv}>
                    <div className={s.div1Desc}>
                        <img src={um} alt="um" className={s.umImg} />
                        <h2 className={s.h2Desc}>Apple Watch SE</h2>
                        <p className={s.descP}>Tudo que é essencial <br />ao alcance do seu pulso</p>
                    </div>
                    <div className={s.desc2}>
                        <p className={s.descP}>A partir de R$ 3.299</p>
                        <button className={s.btn}>Comprar</button>
                        <a href="##" className={s.mais}>Saiba mais</a>
                    </div>
                </div>
                {/* ------ */}
                <div className={s.watchDiv}>
                    <div className={s.div2Desc}>
                        <img src={dois} alt="dois" className={s.doisImg} />
                        <h2 className={s.h2Desc}>Apple Watch Series 9</h2>
                        <p className={s.descP}>Sensores poderosos. <br />Recursos de saúde avançados.</p>
                    </div>
                    <div className={s.desc2}>
                        <p className={s.descP}>A partir de R$ 4.999</p>
                        <button className={s.btn}>Comprar</button>
                        <a href="##" className={s.mais}>Saiba mais</a>
                    </div>
                </div>
                {/* ------ */}
                <div className={s.watchDiv}>
                    <div className={s.div3Desc}>
                        <img src={tres} alt="tres" className={s.tresImg} />
                        <h2 className={s.h2Desc}>Apple Watch Ultra 2</h2>
                        <p className={s.descP}>O mais forte e versátil <br />de todos.</p>
                    </div>
                    <div className={s.desc2}>
                        <p className={s.descP}>A partir de R$ 9.699</p>
                        <button className={s.btn}>Comprar</button>
                        <a href="##" className={s.mais}>Saiba mais</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
