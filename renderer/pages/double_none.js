export default function Double_None() {
  return (
    <div className="text-center">
      <h1 className="pt-12 pb-12 text-4xl font-semibold">
        It looks like your computer is not compatable with AMT.
      </h1>
      <p className="text-lg">
        You can find out more about vPro{" "}
        <a target="_blank"
          href="https://www.intel.co.uk/content/www/uk/en/architecture-and-technology/vpro/vpro-platform-general.html"
          className="text-blue-500 underline"
        >
          here.
        </a>
      </p>
    </div>
  );
}
