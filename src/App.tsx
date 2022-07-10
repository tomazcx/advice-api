import dividerDesktop from './assets/pattern-divider-desktop.svg'
import dividerMobile from './assets/pattern-divider-mobile.svg'
import dice from './assets/icon-dice.svg'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface AdviceInterface {
    id: number;
    text: string;
}

export const App = () => {
    const [advice, setAdvice] = useState<AdviceInterface>()

    async function getAdvice() {
        const result = await axios.get('https://api.adviceslip.com/advice')
        const data = await result.data

        const advice: AdviceInterface = {
            id: data.slip.id,
            text: data.slip.advice
        }

        setAdvice(advice)

    }

    useEffect(() => {
        getAdvice()
    }, [])

    return (
        <div className="absolute w-10/12  max-w-[400px] p-12 pb-0 rounded-lg flex flex-col items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-800">
            <h1 className='uppercase text-green-400 text-xs font-normal tracking-[.3rem]'>Advice #{advice?.id}</h1>
            <p className='text-center text-gray-200 font-bold text-xl my-8'>"{advice?.text}"</p>
            <img src={dividerDesktop} alt="Patter divider" className='hidden sm:block' />
            <img src={dividerMobile} alt="Patter divider" className='block sm:hidden' />
            <div
                className='rounded-full cursor-pointer shadow-green transition-shadow  bg-green-400 top-6 relative p-3 flex items-center justify-center'
                onClick={() => getAdvice()}
            >
                <img src={dice} alt="Icon dice" width={20} />
            </div>

        </div>
    )
}
