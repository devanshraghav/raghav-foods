const Footer = () => {
  return (
    <div className="flex gap-4 lg:justify-around items-start w-full bg-black text-white px-5 py-8 text-xs pb-20 lg:pb-8 lg:text-xl">
      <div className="item about flex flex-col lg:gap-2">
        <h4 className="font-semibold lg:text-xl">ABOUT</h4>
        <ul>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold lg:text-xl">HELP</h4>
        <ul>
          <li>Payments</li>
          <li>Order</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className=" flex flex-col gap-2">
        <h4 className="font-semibold lg:text-xl">POLICY</h4>
        <ul>
          <li>Return Policy</li>
          <li>Terms Of Use</li>
          <li>Security</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold lg:text-xl">SOCIAL</h4>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Youtube</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
