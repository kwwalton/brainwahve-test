import styles from "./ContactSalesCta.module.css";
// NOTE: I used regular css to handle the background image. I ran into a problem the image not being found when doing it through the tailwind config

function ContactSalesCta(props) {
  return (
    <div className="flex pt-[40px] md:pt-0 pb-[120px] sm:pb-[160px] md:pb-[40px] bg-contact-sales-cta bg-cover bg-no-repeat bg-bottom h-full font-sans">
      <div className="max-w-[530px] my-auto mx-[40px] md:mx-[60px] xl:mx-[135px]">
        <h2 className="text-gray-800 text-[20px] font-medium mb-[20px]">
          Find your perfect match
        </h2>
        <p className="text-gray-800 text-[18px] md:text-[16px] xl:text-[18px] mb-[30px] leading-[36px]">
          Brainwahve Qualifying Solutions is the guide employers and job seekers
          have been using for over 10 years. Our Qualifying process combines
          Data Science and Expertise to remove discrimination and solve today's
          hiring challenges. We have technology that innovates and makes the job
          of Human Resources easier and more successful.
        </p>
        <p className="text-gray-800 text-[18px] md:text-[16px] xl:text-[18px] mb-[20px]">
          Schedule your demo today to learn more.
        </p>
        <button
          type="button"
          className="capitalize font-medium text-[14px] rounded-full bg-primary-800 text-[#FFF] hover:text-primary-800 hover:bg-primary-50 py-[12px] px-[24px] mb-[40px]"
        >
          contact sales
        </button>
        <p className="text-gray-800 text-[14px]">
          Are you a job seeker looking to find the perfect job?{" "}
          <a href="#" className="text-primary-800 font-medium">
            Join our mailing list!
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactSalesCta;
