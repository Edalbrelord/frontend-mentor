import ProjectPreview from "../components/projectPreview/projectPreview";
import Link from "next/dist/client/link";

export default function Index() {
    return <div className="text-gray-300 h-screen bg-gray-800">
        <div className="container mx-auto flex flex-col items-center p-10 space-y-24">
            <div className="flex flex-col items-center">
                <div className="">
                    <h1 className="text-white text-3xl">Hey, I'm Stefan!</h1>
                </div>
                <div className="">
                    <h2 className="text-gray-400 text-xl">I make your designs come to life</h2>
                </div>
            </div>
            <div className="">
                <p>TODO: Buttons to select types?</p>
            </div>
            <div className="w-full flex flex-row">
                <Link href="/faq-accordion">
                    {/*TODO: Retrieve from markdown files?*/}
                    <a>
                        <ProjectPreview title="FAQ Accordion" description="An accordion to present Frequently Asked Questions, mobile first and responsive design" imageSrc=""/>
                    </a>
                </Link>
            </div>
        </div>
    </div>;
}