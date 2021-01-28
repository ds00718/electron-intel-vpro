export default function Double_None() {
  return (
    <div className="text-center">
      <div className="page">
      <h1 className="pt-12 pb-12 text-4xl font-semibold">
      Unfortunately this PC is not a vPro based device, Active Management Technology is not available.      </h1>
      <p className="text-lg">
      To find out more about the Intel vPro platform, the benefits and to see a range of devices please visit the Intel website{" "}
        <a
          target="_blank"
          href="http://www.intel.com/vPro"
          className="text-blue-500 underline"
        >
          here.
        </a>
      </p>
    </div>
    <div id="footer">
    <p>
    No information is collected from the download or use of this tool. GCA and Intel care about your privacy. View the&nbsp;
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
      &nbsp;Privacy Policies here.
    </p>
  </div>
  </div>
  );
}
