import { useState } from 'react';

function ColorChanger() {
    const [color, setColor] = useState("black")
    return (
        <div className='w-full h-screen duration-150'
            style={{ backgroundColor: color }}>

            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2'>
                    <button onClick={()=>setColor("red")} className='outline-none px-5 py-2 rounded-full text-white' style={{ backgroundColor: 'red' }}>red</button>
                    <button onClick={()=>setColor("green")}className='outline-none px-5 py-2 rounded-full text-white' style={{ backgroundColor: 'green' }}>green</button>
                    <button onClick={()=>setColor("blue")} className='outline-none px-5 py-2 rounded-full text-white' style={{ backgroundColor: 'blue' }}>blue</button>
                    <button onClick={()=>setColor("white")} className='outline-none px-5 py-2 rounded-full border-3 text-black' style={{ backgroundColor: 'white' }}>white</button>
                    <button onClick={()=>setColor("olive")} className='outline-none px-5 py-2 rounded-full text-white' style={{ backgroundColor: 'olive' }}>olive</button>
                    <button onClick={()=>setColor("pink")} className='outline-none px-5 py-2 rounded-full text-white' style={{ backgroundColor: 'pink' }}>pink</button>
                    <button onClick={()=>setColor("orange")} className='outline-none px-5 py-2 rounded-full text-white' style={{ backgroundColor: 'orange' }}>orange</button>
                </div>
            </div>
        </div>
    )
}

export default ColorChanger;