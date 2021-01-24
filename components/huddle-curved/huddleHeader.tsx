import HuddleButton from "./huddleButton";

export default function HuddleHeader(){
    return <div className="flex flex-row justify-between items-center font-huddle-curved-header">
        <div className="flex flex-row">
            <img className="h-6" src="/images/huddle-curved/logo.svg" alt="Huddle Logo"/>
        </div>
        <HuddleButton title="Try it free" inverted={true} small={true}/>
    </div>
}
