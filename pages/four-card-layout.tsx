import {useEffect} from "react";

export default function FourCardLayout() {
    useEffect(() => {
        document.querySelector("body").classList.add("bg-four-card-light")
    });

    return <div className="container mx-auto py-20 p-10">
        <div className="flex flex-col md:w-1/2 mx-auto space-y-3 items-center text-center text-four-card">
            <h1 className="text-2xl font-light">Reliable, efficient delivery</h1>
            <h2 className="text-3xl text-four-card-dark">Powered by technology</h2>
            <h3 className="text-xl">Our Artificial Intelligence powered tools use million of project data points to
                ensure that your project is successful</h3>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-4 md:auto-rows-max py-20">
            <div
                className="flex flex-col justify-between md:row-start-2 md:row-span-2 md:col-start-1 space-y-3 bg-white rounded-xl shadow-xl p-7 my-5 md:m-5 border-t-4 border-four-card-primary-cyan">
                <div>
                    <h4 className="text-2xl font-medium">Supervisor</h4>
                    <p className="text-four-card">Monitors activity to identify project roadblocks</p>
                </div>
                <img className="w-10 self-end" src="/images/four-card-layout/icon-supervisor.svg" alt="Magnifier"/>
            </div>
            <div
                className="flex flex-col justify-between md:row-start-1 md:row-span-2 md:col-start-2 space-y-3 bg-white rounded-xl shadow-xl p-7 my-5 md:m-5 border-t-4 border-four-card-primary-red">
                <div>
                    <h4 className="text-2xl font-medium">Team Builder</h4>
                    <p className="text-four-card">Scans our talent network to create the optimal team for your
                        project</p>
                </div>
                <img className="w-10 self-end" src="/images/four-card-layout/icon-team-builder.svg" alt="House"/>
            </div>
            <div
                className="flex flex-col justify-between md:row-start-3 md:row-span-2 md:col-start-2 space-y-3 bg-white rounded-xl shadow-xl p-7 my-5 md:m-5 border-t-4 border-four-card-primary-orange">
                <div>
                    <h4 className="text-2xl font-medium">Karma</h4>
                    <p className="text-four-card">Regularly evaluates our talent to ensure quality</p>
                </div>
                <img className="w-10 self-end" src="/images/four-card-layout/icon-karma.svg" alt="Lightbulb"/>
            </div>
            <div
                className="flex flex-col justify-between md:row-start-2 md:row-span-2 md:col-start-3 space-y-3 bg-white rounded-xl shadow-xl p-7 my-5 md:m-5 border-t-4 border-four-card-primary-blue">
                <div>
                    <h4 className="text-2xl font-medium">Calculator</h4>
                    <p className="text-four-card">Uses data from past projects to provide better delivery estimates</p>
                </div>
                <img className="w-10 self-end" src="/images/four-card-layout/icon-calculator.svg" alt="Computer"/>
            </div>
        </div>
    </div>
}