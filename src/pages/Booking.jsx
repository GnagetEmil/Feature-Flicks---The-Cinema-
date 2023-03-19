import DisplayChairs from '../components/DisplaySeats'
import { useParams } from 'react-router-dom';
const Booking = () => {
    const { id } = useParams();
    return (
        <><DisplayChairs screeningId={id} /></>
    );
}
export default Booking;