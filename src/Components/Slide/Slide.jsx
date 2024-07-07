import ScrollCarousel from 'scroll-carousel-react';
import s from '../Slide/Slide.module.css'
// IMG
import carr6 from '../img/carr6.jpg'
import carr1 from '../img/carr1.jpg'
import carr4 from '../img/carr2.jpg'
import carr3 from '../img/carr3.jpg'

export const Slide = () => {
    return (
        <div>
            <ScrollCarousel
                autoplay
                autoplaySpeed={15}
                speed={7}
                onReady={() => console.log('I am ready')}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                    <div key={item}>
                        <div className={s.container}>
                            <div className={`${s.card} ${s.cardTrain}`}>
                                <p className={s.pTrain}><span className='fff'>Gire. Agache. Corra.</span> Treinos de força, HIIT, pilates, meditação e muito mais. O Apple Watch oferece uma grande variedade de exercícios com as métricas que você quer ver.</p>
                                <img src={carr6} alt="slide" className={s.carr} />
                            </div>
                            <div className={`${s.card} ${s.cardGray}`}>
                                <p className={s.pTrain}>
                                    <span className='black'>Mede seu nível de oxigênio no sangue. Uma inovação de tirar o fôlego.</span> Com um sensor e app dedicados, o Apple Watch Series 9 mede sua oxigenação sempre que você quiser. E faz leituras em segundo plano dia e noite6.</p>
                                <img src={carr4} alt="slide" className={s.carr} />
                            </div>
                            <div className={`${s.card} ${s.cardTrain}`}>
                                <p className={s.pTrain}>
                                    <span className='fff'>Acompanha de perto a saúde do seu coração.</span> O app ECG do Apple Watch Series 9 consegue gerar um eletrocardiograma de derivação única4. E o app Batimentos notifica quando uma frequência cardíaca alta ou baixa e um ritmo cardíaco irregular é detectado5.</p>
                                <img src={carr1} alt="slide" className={s.carr} />
                            </div>
                            <div className={`${s.card} ${s.cardWhite}`}>
                                <p className={s.pTrain}>
                                    <span className='black'>Relógio dos sonhos.</span> O app Sono não cuida apenas do seu descanso. Ele mostra quanto tempo você passou nos estágios do sono, como REM, Essencial e Sono Profundo, além dos possíveis momentos em que despertou.</p>
                                <img src={carr3} alt="slide" className={s.carr} />
                            </div>
                            <div className={`${s.card} ${s.cardTrain}`}>
                                <p className={s.pTrain}>
                                    <span className='fff'>Gire. Agache. Corra.</span> Treinos de força, HIIT, pilates, meditação e muito mais. O Apple Watch oferece uma grande variedade de exercícios com as métricas que você quer ver.</p>
                                <img src={carr6} alt="slide" className={s.carr} />
                            </div>
                            <div className={`${s.card} ${s.cardGray}`}>
                                <p className={s.pTrain}>
                                    <span className='black'>Mede seu nível de oxigênio no sangue. Uma inovação de tirar o fôlego.</span> Com um sensor e app dedicados, o Apple Watch Series 9 mede sua oxigenação sempre que você quiser. E faz leituras em segundo plano dia e noite6.</p>
                                <img src={carr4} alt="slide" className={s.carr} />
                            </div>
                            <div className={`${s.card} ${s.cardTrain}`}>
                                <p className={s.pTrain}>
                                    <span className='fff'>Acompanha de perto a saúde do seu coração.</span> O app ECG do Apple Watch Series 9 consegue gerar um eletrocardiograma de derivação única4. E o app Batimentos notifica quando uma frequência cardíaca alta ou baixa e um ritmo cardíaco irregular é detectado5.</p>
                                <img src={carr1} alt="slide" className={s.carr} />
                            </div>
                            <div className={`${s.card} ${s.cardWhite}`}>
                                <p className={s.pTrain}>
                                    <span className='black'>Relógio dos sonhos.</span> O app Sono não cuida apenas do seu descanso. Ele mostra quanto tempo você passou nos estágios do sono, como REM, Essencial e Sono Profundo, além dos possíveis momentos em que despertou.</p>
                                <img src={carr3} alt="slide" className={s.carr} />
                            </div>
                        </div>
                    </div>
                ))}
            </ScrollCarousel>
        </div>

    )
}
