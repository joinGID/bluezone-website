import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = ({ details }) => {
  return (
    <div className="w-full flex justify-start  ">

      <div className="space-y-12 text-left max-w-xl pl-4">  

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-[#16333a]">
          {details.hotelName}
        </h2>

        {/* Location */}
        <div className="space-y-2 text-sm sm:text-base text-slate-700">
          <p className="font-medium flex items-center gap-2">
            <MapPin size={18} />
            {details.addressLabel}
          </p>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(details.address)}`}
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 underline-offset-4 hover:underline inline-flex items-center gap-1"
          >
            {details.address} ↗
          </a>
        </div>

        {/* Phone */}
        <div className="space-y-2 text-sm sm:text-base text-slate-700">
          <p className="font-medium flex items-center gap-2">
            <Phone size={18} />
            {details.phoneLabel}
          </p>

          <div className="space-y-2">
            {details.phones.map((p) => (
              <div key={p.label}>
                <p className="text-slate-600">{p.label}:</p>

                <a
                  href={`tel:${p.number.replace(/\D/g, "")}`}
                  className="text-slate-700 underline-offset-4 hover:underline inline-flex items-center gap-1"
                >
                  {p.number} ↗
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2 text-sm sm:text-base text-slate-700">
          <p className="font-medium flex items-center gap-2">
            <Mail size={18} />
            {details.emailLabel}
          </p>

          <div className="space-y-2">
            {details.emails.map((e) => (
              <div key={e.address}>
                <p className="text-slate-600">{e.label}</p>

                <a
                  href={`mailto:${e.address}`}
                  className="text-slate-700 underline-offset-4 hover:underline inline-flex items-center gap-1"
                >
                  {e.address} ↗
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default ContactInfo;
