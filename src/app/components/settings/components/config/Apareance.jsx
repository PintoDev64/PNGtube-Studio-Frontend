// Contexts
import { useContext } from "react";
import { Global } from "../../../../context/contexts";

export default function Apareance() {

    const { color, wallpaper, type, functions } = useContext(Global);

    console.log(color, wallpaper, type);

    return (
        <>
            <aside id="ApareancePreview">
                {
                    type === 'Color'
                    ? <div style={{ background: color, width: 500, height: 312 }}></div>
                    : <img src={wallpaper} alt="Background Apareance Preview" width={500} height={312}/>
                }
            </aside>
            <aside id="ApareanceOptions">

            </aside>
        </>
    )
}