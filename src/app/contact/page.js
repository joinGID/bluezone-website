// import ContactLeft from "@/src/modules/contact/containers/ContactLeft";
import GetInTouch from "@/src/modules/contact/containers/GetInTouch";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BlueZone Habitat, Manjeri. Speak to our sales team about premium villas and eco-luxury apartments in Malappuram, Kerala.",
  openGraph: {
    title: "Contact Us | BlueZone Habitat",
    description:
      "Reach out to our sales team for enquiries about luxury villas and apartments in Manjeri, Malappuram.",
  },
};

export default function Contact() {
    return (
        <div className="">
            <GetInTouch />
            {/* <ContactLeft /> */}
        </div>
    );
}