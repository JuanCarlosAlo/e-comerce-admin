"use client"
export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const fetcherParams = ([url,id]) =>{
 
    return fetch(`${url}?id=${id}`).then(res => res.json())}
