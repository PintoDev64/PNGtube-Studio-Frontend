// Contexts
import useToolsPropagator from '../../hooks/ToolsPropagator.hook';

export default function Tolls() {

    const { TollsControllerPropagator } = useToolsPropagator()

    return (
        <div id="ButtonTools" className='tolltip_bar_buttons'>
            {
                TollsControllerPropagator.Tools.map(({ Component, Id, execute, Data }) => {
                    return ( <Component key={Id} functionProp={execute} props={Data}/> )
                })
            }
        </div>
    )
}