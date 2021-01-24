import classnames from "classnames";

export type HuddleButtonProps = {
    inverted: boolean,
    pill?: boolean,
    small?: boolean,
    title: string,
}

export default function HuddleButton({title, inverted, pill=true, small=false}: HuddleButtonProps) {
    const classNames = classnames(
        {
            'px-8 py-2': small,
            'px-12 py-4': !small,
            'font-semibold': !small,
            'text-lg': !small,
            'rounded-full' : pill,
            'rounded' : !pill,
            'border border-huddle-curved-primary-light-pink': inverted,
            'bg-huddle-curved-primary-pink': !inverted,
            'text-huddle-curved-primary-light-pink': inverted,
            'text-white': !inverted,
            'shadow-lg': !inverted,

        }
    );

    return <div>
        <button className={classNames}>{title}</button>
    </div>
}