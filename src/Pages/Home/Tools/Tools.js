import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {

    const [tools, setTools] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/tools')
        .then(res => res.json())
        .then(data => {
            setTools(data)
        })
    }, [] )

    return (
        <section className='my-5'>
            <h2 className="text-center font-bold text-3xl underline underline-offset-2 text-accent decoration-accent">Tools</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4 my-5'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    />)
                }
            </div>

        </section>
    );
};

export default Tools;