import Pattern6Img from '../../assets/img/bg-pattern-home-6-about-5.svg'

export function CallToAction() {
    return (
        <section className="call-to-action">
            <article>
                <h2>Ready to get started?</h2>
                <button className='btn-contact'>contact us</button>
            </article>
            <img className='pattern-6-img' src={Pattern6Img} alt="call-to-action-image" />
        </section>
    )
}