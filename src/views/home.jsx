import { Hero } from "../cmps/home-cmps/hero";
import { HomeDesc } from "../cmps/home-cmps/home-desc";
import { CallToAction } from "../cmps/home-cmps/call-to-action";

export function HomePage() {
    return (
        <section className="home">
            <Hero />
            <HomeDesc />
            <CallToAction />
        </section>
    )
}