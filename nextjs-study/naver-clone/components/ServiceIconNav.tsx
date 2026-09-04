import { SERVICES } from "@/data/services";

export default function ServiceIconNav() {
  return (
    <nav className="mt-3">
      <ul className="flex list-none justify-center">
        {SERVICES.map((service) => (
          <li key={service.name} className="w-16">
            <a
              href={service.href}
              className="flex flex-col items-center text-base text-[#2e2e2e] no-underline"
            >
              <span className="relative block h-11 w-11">
                <span
                  className="absolute -left-[3px] -top-px block h-[50px] w-[50px] bg-[url('/sp_main.png')] bg-[length:471px_455px] bg-no-repeat"
                  style={{ backgroundPosition: "-153px -142px" }}
                />
                <span
                  className="relative z-10 m-0.5 block h-10 w-10 bg-no-repeat"
                  style={{
                    backgroundImage: `url(${service.image ?? "/sp_main.png"})`,
                    backgroundSize: service.image ? "contain" : "471px 455px",
                    backgroundPosition: service.position,
                  }}
                />
              </span>
              <span className={service.hideLabel ? "sr-only" : "mt-1"}>
                {service.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}