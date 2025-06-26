import { Belanosima } from 'next/font/google';

const header = Belanosima({
    weight: '700',
    subsets: ['latin'],
})

const body = Belanosima({
    weight: '400',
    subsets: ['latin'],
})

export const fontHeaderClass = header.className;
export const fontBodyClass = body.className;
