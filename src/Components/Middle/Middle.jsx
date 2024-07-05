import s from '../Middle/Middle.module.css'

export const Middle = () => {
    return (
        <div className={s.container}>
            <div className={s.box}>
                <p>Fitness</p>
                <h1>Motivação pura.</h1>
                <h4 className={s.h4}>Tem um treino na cabeça? Ele está no seu pulso. Basta um toque. Escolha as métricas que mais motivam você para serem exibidas nas visualizações personalizáveis. E desafie seus limites sem se preocupar com a resistência do Apple Watch.</h4>
            </div>
        </div>
    )
}
