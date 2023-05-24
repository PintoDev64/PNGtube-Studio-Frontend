// Contexts
import useTollsPropagator from "../../hooks/TollsPropagator.hook"

export default function Tolls() {

    const { TollsControllerPropagator } = useTollsPropagator()

    return (
        <div id="ButtonTools" className='tolltip_bar_buttons'>
            {
                TollsControllerPropagator.Tolls.map(({ Component, Id, execute, Data }) => {
                    return (<Component key={Id} functionProp={execute} props={Data} />)
                })
            }
            <div style={{
                width: 5,
                height: 30,
                margin: '0px 5px',
                borderRadius: 20,
                backgroundColor: '#000000'
            }} />
            {
                TollsControllerPropagator.ModelOptions?.map(({ Component, Id, execute, Data }) => {
                    return (<Component key={Id} functionProp={execute} props={Data} />)
                })
            }
        </div>
    )
}