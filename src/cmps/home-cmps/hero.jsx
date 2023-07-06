import GreenCircle from '../../assets/img/bg-pattern-home-1.svg'
import PinkCircle from '../../assets/img/bg-pattern-home-2.svg'

export function Hero() {
    return (
        <section className="hero">
            <div className='main-content'>
                <img className='green-circle' src={GreenCircle} alt="green-circle" />
                <h1>
                    Find the best <span>talent</span>
                </h1>
                <article>
                    <div className='line'></div>
                    <p>Finding the right people and building high performing teams can be hard. Most companies aren't tapping into the abundance of global talent. We're about to change that.</p>
                </article>
            </div>
            <img className='pink-circle' src={PinkCircle} alt="pink-circle" />
        </section>
    )
}