import styles from "./PowerPrice Expectation.module.css"
import {useState} from "react";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";
import {GetData} from "./GetProvidersData";

export function TextInputUsage() {
        const [response, setResponse] = useState("");
        const [inputValue, setInputValue] = useState("");


        const handleClick = () => {
            console.log(inputValue);
            setResponse(<GetData inputValue={inputValue}/>);

        }

        return (
            <div>
                <div className={styles.box}>
                    <div>
                        <h3>Beregne strømpris ut i fra et års forbruk (Kwh) </h3>
                        <br/>
                        <input className={styles.marginTen}
                                type="number"
                                value={inputValue}
                                onChange={event => setInputValue(event.target.value)}
                        /> Kwh
                        <button className={styles.marginTen} onClick={handleClick}>Beregn</button>
                    </div>
                </div>
                <div>
                    {response}
                </div>
            </div>
        );
    }

