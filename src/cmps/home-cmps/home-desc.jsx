import DescImg from '../../assets/img/bg-pattern-home-3.svg'
import IconPerson from '../../assets/img/icon-person.svg'
import IconCog from '../../assets/img/icon-cog.svg'
import IconChart from '../../assets/img/icon-chart.svg'

export function HomeDesc() {
    return (
        <section className="home-desc">
            <div className='main-desc'>
                <article>
                    <div className='line'></div>
                    <h2>Build & manage distributed teams like no one else.</h2>
                </article>
                <ul className='benefit-list'>
                    <li>
                        <img src={IconPerson} alt="icon-person" />
                        <div className="cart-text">
                            <h5>Experienced Individuals</h5>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </li>
                    <li>
                        <img src={IconCog} alt="icon-cog" />
                        <div className="cart-text">
                            <h5>Easy to Implement</h5>
                            <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                        </div>
                    </li>
                    <li>
                        <img src={IconChart} alt="" />
                        <div className="cart-text">
                            <h5>Experienced Individuals</h5>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <img className='desc-img' src={DescImg} alt="description-image" />
        </section>
    )
}