/** Add your relevant code here for the issue to reproduce */
import styles from './variables.module.scss'

export default function Home() {
  return <p className={styles.variablesTest}>Color used in class "{
    styles.variablesTest
  }" (expected value is "#012345"): {
    `"${styles.testColor}"`
  }<br />(The displayed result will be "undefined" in Turbopack dev mode.)</p>;
}
