import styles from "./PowerPrice Expectation.module.css"
import {useState} from "react";
import {GetData} from "./GetProvidersData";

export function TextInputUsage() {
        const [response, setResponse] = useState("");
        const [inputValue, setInputValue] = useState("");
        const [error, setError] = useState("");


        const handleClick = () => {
            if(inputValue < 1 || !inputValue){
                setError("Du må skrive tall større en null.");
                setResponse("");
            } else {
                setError("");
                setResponse(<GetData inputValue={inputValue}/>);
            }
        }

        return (
            <div>
                <div className={styles.box}>
                    <div>
                        <h3>Beregne strømpris ut i fra et års forbruk (Kwh) </h3>
                        <p className={styles.error}>{error}</p>
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

