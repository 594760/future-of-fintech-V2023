import {PowerPriceExpectation} from "../components/powerPriceExpection/PowerPriceExpectation";
import {TextInputUsage} from "../components/powerPriceExpection/InputMethods";

export default function Home(){
    return(
        <main>
            <PowerPriceExpectation />
            <TextInputUsage/>
        </main>
    )
}