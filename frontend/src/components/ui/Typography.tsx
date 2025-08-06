export function TypographyH1() {
  return (
    <h1 className="scroll-m-20 text-4xl sm:text-5xl font-extrabold tracking-tight text-balance py-6 leading-tight">
      Organize Everything. <br />{" "}
      <span className="text-emerald-700">Conquer Anything.</span>
    </h1>
  );
}

export function TypographyH2() {
  return (
    <h2 className="scroll-m-20 border-b pb-3 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0">
      Made for <span className="text-blue-600">Thinkers</span>,{" "}
      <span className="text-blue-600">Doers</span> &{" "}
      <span className="text-blue-600">Dreamers</span>.
    </h2>
  );
}

export function TypographyH4() {
  return (
    <h4 className="scroll-m-20 text-lg sm:text-xl font-semibold tracking-tight py-4">
      From Overwhelmed to{" "}
      <span className="font-extrabold text-2xl">Organix</span>.
    </h4>
  );
}

export function TypographyP() {
  return (
    <p className="leading-7 text-muted-foreground max-w-xl mt-4">
      <span className="font-semibold text-emerald-800">Organix</span> — your
      second brain for productivity. Plan boldly, collaborate smartly, and stay
      chill. Built for modern lives.
    </p>
  );
}

export function TypographyBlockquote() {
  return (
    <blockquote className="mt-6 border-l-4 border-emerald-600 pl-6 italic text-gray-600">
      “Organix turned my chaos into clarity. It&apos;s like Notion met Zen.”
    </blockquote>
  );
}

export function TypographyList() {
  return (
    <ul className="my-6 ml-6 list-disc text-gray-700 [&>li]:mt-2">
      <li>
        <span className="text-white text-muted-foreground font-medium">
          Instant capture
        </span>
        . Zero friction.
      </li>
      <li>
        <span className="text-white text-muted-foreground font-medium">
          Focus modes
        </span>{" "}
        that adapt to you.
      </li>
      <li>
        <span className="text-white text-muted-foreground font-medium">
          Custom workflows
        </span>{" "}
        without the mess.
      </li>
    </ul>
  );
}
