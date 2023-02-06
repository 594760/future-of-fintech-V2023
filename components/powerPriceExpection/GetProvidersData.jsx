import {useEffect, useState} from "react";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";
import styles from "./PowerPriceExpectation.module.css";

export function GetData(props){
    const [data, setData] = useState("");

    useEffect(() =>{
        fetch("api/providers")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    const usage = props.inputValue;

    if (Array.isArray(data)) return(
        <div>

            <ul className={styles.outsideBox}>
                {data.map(item => (
                    <div  key={item.id} className={styles.box}>
                        <div>
                            <h3>{item.name} </h3>
                            <br/>
                            Pris model: {item.pricingModel}
                            <br/>
                            Månedspris: {item.monthlyFee}
                            <br/>
                            Forventet månedspris med forburk {usage} Kwh i Året:
                            <br/>
                            {Calculation(usage, item).toFixed(2)} kr
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

function Calculation(usage, item) {
    const pricingModel = item.pricingModel;
    usage = parseFloat(usage);
    if (pricingModel === "fixed") {
        return (usage * item.fixedPrice)/12 + item.monthlyFee;
    } else if (pricingModel === "variable") {
        return (usage * item.variablePrice)/12 + item.monthlyFee;
    } else if (pricingModel.includes("spot")) {
        return (usage * item.spotPrice)/12 + item.monthlyFee;
    }
    return 0
}