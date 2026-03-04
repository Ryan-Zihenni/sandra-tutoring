export default function Button() {
  return (
    <a
        type="button"
        href="mailto:sandrasuzz00@gmail.com"
       className="flex items-center justify-center px-5 py-2 w-fit bg-accent hover:text-primary-foreground hover:bg-primary rounded-full transition-all duration-300 ease-in-out"
    >
        <span className="font-semibold tracking-tighter"> Book a free intro call</span>
    </a>
  );
}
