// Components
import Advanced from "./config/Advanced"
import Apareance from "./config/Apareance"
import Backgrounds from "./config/Backgrounds"
import Models from "./config/Models"

export default function Options({ StateSection }) {
    if (StateSection === 1) return <Apareance />
    if (StateSection === 2) return <Backgrounds />
    if (StateSection === 3) return <Models />
    if (StateSection === 4) return <Advanced />
};  