export function H1({ text }: { text: string }) {
  return (
    <h2 className="scroll-m-20 pb-2 text-4xl font-semibold tracking-tight first:mt-0">
      {text}
    </h2>
  );
}
export function H2({ text }: { text?: string }) {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {text}
    </h2>
  );
}

export function H3({ text }: { text: string }) {
  return (
    <h3 className="scroll-m-20 pb-2 text-2xl font-bold tracking-tight first:mt-0 bg-linear-to-r from-primary to-accent-foreground text-transparent bg-clip-text">
      {text}
    </h3>
  );
}

export function H4({ text }: { text: string }) {
  return (
    <h3 className="scroll-m-20 pb-2 text-xl font-bold tracking-tight first:mt-0 inline-block bg-linear-to-r from-primary to-accent-foreground text-transparent bg-clip-text">
      {text}
    </h3>
  );
}

export function P({ text, size }: { text: string; size?: string }) {
  return (
    <p className={`${size ? size : ""} leading-7 [&:not(:first-child)]:mt-6`}>
      {text}
    </p>
  );
}
