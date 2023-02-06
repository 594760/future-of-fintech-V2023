import {PowerPriceExpectation} from "../components/powerPriceExpection/PowerPriceExpectation";
import {TextInputUsage} from "../components/powerPriceExpection/InputComponent";

export default function Home(){
    return(
        <main>
            <PowerPriceExpectation />
            <TextInputUsage/>
        </main>
    )
}