import {useEffect} from "react";

export default function UseCustomHookSupportFile_useTitleCounter(Count) {
    useEffect(() => {
        document.title = `Counter-: ${Count}`
    }, [Count])
}