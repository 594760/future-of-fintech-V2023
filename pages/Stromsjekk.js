import {PowerPriceExpectation} from "../components/PowerPriceExpectation";
import {TextInputUsage} from "../components/InputMethods";

export default function Home(){
    return(
        <main>
            <PowerPriceExpectation />
            <TextInputUsage/>
        </main>
    )
}