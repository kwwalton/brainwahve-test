import LogIn from "../components/LogIn";
import LogoBanner from "../components/LogoBanner";
import ContactSalesCta from "../components/ContactSalesCta";
function LogInLayout(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <section className="grid">
        <LogoBanner />
        <LogIn />
      </section>
      <section>
        <ContactSalesCta />
      </section>
    </div>
  );
}

export default LogInLayout;
