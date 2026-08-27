import React from 'react'
import { chairs } from "@/data/chairs";
import Link from 'next/link';
import Chair from './Chair';

function Chairs(
    {locale}:{locale:string}
) {
  return (
    <div className=''>
        {chairs.map((chair) => (
            <Chair 
                key={chair.id}
                chair={chair}
                locale={locale}
            />
        ))}
    </div>
  )
}

export default Chairs;
