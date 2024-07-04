import s from '../Header/Header.module.css'
export const Header = () => {
    return (
        <div className={s.header}>
            <h2 className={s.title}>Apple Watch Series 9</h2>
            <ul>
                <li>
                    <a href="##" className={s.active}>Visão geral</a>
                </li>
                <li>
                    <a href="##">Por que Apple Watch</a>
                </li>
                <li>
                    <a href="##">Especificações</a>
                </li>
                <li>
                    <button className={s.btn}>Comprar</button>
                </li>
            </ul>
        </div>
    )
}
