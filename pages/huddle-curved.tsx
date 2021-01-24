import styles from "./huddle-curved.module.scss";
import HuddleHeader from "../components/huddle-curved/huddleHeader";
import HuddleHero from "../components/huddle-curved/huddleHero";

export default function HuddleCurved(){
    return <div className={`${styles.wrapper} p-5`}>
        <div className="container mx-auto pb-36">
            <HuddleHeader/>
        </div>
        <div className="container mx-auto md:px-20 flex flex-col items-center">
            <div className="pb-36">
                <HuddleHero/>
            </div>
            <div className="pb-36">
                <div className="">
                    <img src="/images/huddle-curved/screen-mockups.svg" alt="screen mockups"/>
                </div>
            </div>
        </div>

    </div>
}