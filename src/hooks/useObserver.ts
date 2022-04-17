import { useEffect, useState } from "react"

interface Props {
    distance: string,
    ref?: React.RefObject<HTMLDivElement> | null,
    once: boolean,
}

export const useObserver = ({ distance, ref, once }: Props) => {
    const [isClose, setIsClose] = useState<boolean>(false)

    useEffect(() => {
        let observer: IntersectionObserver

        const element = ref && ref.current

        const onChange = (entries: Array<IntersectionObserverEntry>, observer: IntersectionObserver) => {
            const el: IntersectionObserverEntry = entries[0]
            if (el.isIntersecting) {
                setIsClose(true)
                once && observer.disconnect()
            } else !once && setIsClose(false)

        }

        observer = new IntersectionObserver(onChange, {
            rootMargin: distance
        })

        if (element) observer.observe(element)

        return () => observer && observer.disconnect()
    })


    return { isClose, ref }
}