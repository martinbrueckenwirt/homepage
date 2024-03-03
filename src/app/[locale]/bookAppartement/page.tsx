import Booking from '../components/booking';
import styles from './page.module.css';

export default function BookAppartement({params: {locale}}: {params: {locale: any}}) {

    return (
        <>
        <div id="vri-container-21197" className ={styles.test}>
              <Booking apartmentId={"21197"}/>
        </div>
        </>
    );
}