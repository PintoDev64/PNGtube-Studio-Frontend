// Contexts
import { useContext } from "react";
import { Global } from "../../../../context/contexts";

export default function Apareance() {

    const { color, wallpaper, type, functions } = useContext(Global);

    console.log(color, wallpaper, type);

    return (
        <>
            <aside id="ApareancePreview">
                <img src={wallpaper} alt="Background Apareance Preview"/>
            </aside>
            <aside id="ApareanceOptions">

            </aside>
        </>
    )
}