import { razorPayKey } from '../../constants';
import Logo from "../../assets/logo.png";
import { useSelector,useDispatch } from 'react-redux';
import { clearCart } from '../../utils/Redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const price = useSelector(store => store.cart.totalPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlePayment = () =>{
        dispatch(clearCart());
        navigate("/");
    }
    const launchRazorPay = () => {
        let options = {
          key: razorPayKey,
          amount: price * 100,
          currency: "INR",
          name: "Raghav Foods",
          description: "Order food online",
          image: Logo,
          handler: handlePayment,
          theme: {color: "#c4242d"},
        };
    
        const razorPayment = new window.Razorpay(options);
        razorPayment.open();
      };

      return launchRazorPay;
}

export default Payment