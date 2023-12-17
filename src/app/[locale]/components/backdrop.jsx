import Styles from "../components/backdrop.module.css";

function Backdrop(props) {
    function closeImageHandler() {
        console.log('Backdrop clicked');
        { props.clickHandler() }; /*indexImage wird auf "leer" gesetzt, damit wird das Fenster auf oberster Ebene geschlossen */
    }

    return (
        <div className = {Styles.backdrop} onClick={closeImageHandler}> </div>

    );

}
export default Backdrop;