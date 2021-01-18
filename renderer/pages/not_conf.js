export default function Double_None() {
  return (
    <div id="page" className="text-center">
      <h1 className="pt-12 pb-12 text-4xl font-semibold">
        This machine is Intel vPro Compatable, however AMT™ is not setup.
      </h1>
      <p className="text-lg">
        To learn more about the features of AMT™, visit Intels website{" "}
        <a
          target="_blank"
          href="https://www.intel.co.uk/content/www/uk/en/architecture-and-technology/vpro/vpro-platform-general.html"
          className="text-blue-500 underline"
        >
          here
        </a>
      </p>
      <div id="footer">
        <p>
          GCA and Intel care about your privacy. View the&nbsp;
          <a
            target="_blank"
            href="https://www.globalcyberalliance.org/privacy-policy/#:~:text=Privacy%20Policy.%20The%20mission%20of%20the%20Global%20Cyber,this%20Website,%20and%20this%20policy%20discusses%20our%20practices."
            className="text-blue-500 underline"
          >
            GCA
          </a>
          &nbsp;and&nbsp;
          <a
            target="_blank"
            href="https://www.intel.com/content/www/us/en/privacy/intel-privacy-notice.html"
            className="text-blue-500 underline"
          >
            Intel
          </a>
          &nbsp;Privacy Policies.
        </p>
      </div>
    </div>
  );
}
