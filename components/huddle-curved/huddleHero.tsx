import styles from "./huddleHero.module.scss"
import HuddleButton from "./huddleButton";

export default function HuddleHero() {
    return <div className={styles.wrapper}>
        <div className="flex flex-col text-center items-center font-huddle-curved-body">
            <h1 className="text-4xl font-bold pb-10">Build The Community Your Fans Will Love</h1>
            <p className="text-lg pb-10">Huddle re-imagines the way we build communities. You have a voice, but so does
                your audience. Create connections with your users as you engage in genuine discussion.</p>
            <HuddleButton inverted={false} title="Get started for free"/>
        </div>
    </div>
}