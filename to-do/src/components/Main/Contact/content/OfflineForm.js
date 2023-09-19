import styles from "../../../../styles/contact.module.css";

export const OfflineForm = () => {
    return (
        <div>
            <form action="#" method="post" class={styles.form}>
                <h3 class={styles.leg}>
                    Leave a request to order clones
                </h3>
                <label class={styles.line}>
                    <input class={styles.formInpt} type="text" required/>
                    <span>Organisation name</span>
                </label>
                <label class={styles.line} id={styles.in2}>
                    <input class={styles.formInpt} type="text" required/>
                    <span>Clone count</span>
                </label>
                <label class={styles.line} id={styles.in3}>
                    <select class={styles.formInpt} required>
                        <option value="1">Stormtrooper</option>
                        <option value="2">Komando Clone</option>
                        <option value="3">Clone engineer</option>
                        <option value="4">Clone Medic</option>
                        <option value="5">Clone Assassin</option>
                    </select>
                    <span>Clone class: </span>
                </label>
                <div class={styles.checkB}>
                    <input class={styles.formInput} type="checkbox" required/>
                    <span>I see through the lies of the Jedi</span>
                </div>
                <div class={styles.but}>
                    <input class={styles.but1} type="submit" value="Send" />
                    <input class={styles.but2} type="reset" value="Clear" />
                </div>
            </form>
        </div>
    );
};