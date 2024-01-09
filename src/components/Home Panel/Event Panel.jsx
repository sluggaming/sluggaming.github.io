import React from 'react'

const Event_Panel = ({ Title, Quote, Name, Content, Image }) => {
    return (
        <>
            <div className='font-Montserrat flex flex-col h-full'>
                <div className='flex flex-col item h-full bg-[#D9D9D9]' id='card'>
                    <div className=' overflow-hidden' id='right-side'>
                        {Image && (
                            <img src={require(`../../images/Home Page/${Image}`)}
                                alt={Title}
                                loading="lazy"
                                className='w-full' />
                        )}
                    </div>
                    <div className='flex flex-col justify-center sm:p-12 p-8 gap-2 h-max' id='left-side'>
                        <div className='text-[#00588F] font-bold text-lg'>{Title}</div>
                        <div className='text-slate-900 font-medium'>{Content}</div>
                        <div className='text-slate-700 '><span className='italic'>{Quote}</span><br />{Name}</div>
                    </div>
                </div>
                <img src={require('../../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" className='w-full' />
            </div>
        </>
    )
}

export default Event_Panel