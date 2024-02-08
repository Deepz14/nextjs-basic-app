'use client'
import React, { useEffect } from 'react'
import { useRef } from 'react'

export default function MoveToTop() {
    
    const topBtnRef = useRef(null);

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        topBtnRef.current.classList.add('opacity-0');
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                topBtnRef.current.classList.remove('opacity-0');
            } else {
                topBtnRef.current.classList.add('opacity-0');
            }
        })
        return () => {
            window.removeEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    topBtnRef?.current?.classList.remove('opacity-0');
                } else {
                    topBtnRef?.current?.classList.add('opacity-0');
                }
            })
        } 
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    } ,[])

    return (
        <button onClick={handleScroll} ref={topBtnRef} className="move-to-top rounded-md py-1 px-3 text-lg text-white opacity-0 bg-blue-400 hover:bg-blue-300">
           &#8593;
        </button>
    )
}