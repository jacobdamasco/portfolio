import ffBabyShower from '../imgs/ff_baby_shower.png'
import ocr from '../imgs/ocr.png'
import grocerup from '../imgs/grocerup.png'

const Projects = () => {
    return (
    <>
    <div className="flex flex-col px-16 py-8 bg-gray-100">
        <div className="flex flex-row py-4 text-subheader text-blue-500 font-semibold">Projects</div>

        <div className="flex flex-row px-4 pb-10 justify-center">
            <div className="flex flex-col basis-2/5">
                <img src={ffBabyShower} alt="Family Feud: Baby Shower Edition" className="shadow-2xl shadow-gray-500"/>
            </div>
            <div className="flex flex-col basis-3/5 justify-center">
            <div className="bg-blue-50 mx-8 py-8 rounded-lg">
                <div className="flex flex-row justify-center py-2">
                    <h1 className="text-2xl text-blue-500 font-semibold text-center">Family Feud: Baby Shower</h1>
                </div>
                <div className="flex flex-row py-2">
                    <p className="px-20 text-center justify-center">A game based off the popular TV game show Family Feud, except for my cousin's baby shower. Fully equipped with music, sound effects, and proper scoring. Play it with your family! When I pulled this up, little did I know that the two teams would go wild for it.</p>
                </div>
                <div className="flex flex-row justify-center py-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-center py-2 px-4">View on Github</button>
                </div>
            </div>
            </div>
        </div>

        <div className="flex flex-row px-4 pb-10 justify-center">
            <div className="flex flex-col basis-2/5 justify-center">
                <img src={ocr} alt="OCR: Optical Character Recognition" className="shadow-2xl shadow-gray-500"/>
            </div>
            <div className="flex flex-col basis-3/5 justify-center">
            <div className="bg-blue-50 mx-8 py-8 rounded-lg">
                <div className="flex flex-row justify-center py-2">
                    <h1 className="text-2xl text-blue-500 font-semibold text-center">OCR: Optical Character Recognition</h1>
                </div>
                <div className="flex flex-row py-2">
                    <p className="px-20 text-center justify-center">A C++ program that recognizes two numbers from two bmp files and adds or subtracts the numbers. All developed without the use of machine learning libraries! Instead, I used different mathematical techniques to determine digits, like Euler number, center of mass, & symmetry.</p>
                </div>
                <div className="flex flex-row justify-center py-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-center py-2 px-4">View on Github</button>
                </div>
            </div>
            </div>
        </div>

        <div className="flex flex-row px-4 pb-10 justify-center">
            <div className="flex flex-col basis-2/5">
                <img src={grocerup} alt="Grocerup" className="shadow-2xl shadow-gray-500"/>
            </div>
            <div className="flex flex-col basis-3/5 justify-center">
            <div className="bg-blue-50 mx-8 py-8 rounded-lg">
                <div className="flex flex-row justify-center py-2">
                    <h1 className="text-2xl text-blue-500 font-semibold text-center">Grocerup</h1>
                </div>
                <div className="flex flex-row py-2">
                    <p className="px-20 text-center justify-center">A web app where you can manage your fridge, pantry, & cupboard inventory and plan your next grocery trip. With a personal account, you can easily manage your grocery lists. Organize them by store, by produce, or just how you like it.</p>
                </div>
                <div className="flex flex-row justify-center py-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-center py-2 px-4">View on Github</button>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Projects;