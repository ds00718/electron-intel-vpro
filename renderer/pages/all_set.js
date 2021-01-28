export default function Double_None() {
  return (
    <div className="text-center">
      <div id="page">
      <h2 className="p-8 text-4xl font-semibold text-center">
            <img className = "leftPhoto" src="./images/GCA.png"/>
            GCA Intel® Core™ vPro® Detector
            <img className="rightPhoto" src="./images/thumbnail.jpg" />
            </h2>
        <h1 className="pt-10 pb-10 text-3xl font-semibold">
        The PC is vPro certified, and Active Management Technology has been configured for remote support.        </h1>
        <p className="text-lg">
        To learn more about AMT™, press          <a
            target="_blank"
            href="https://www.intel.co.uk/content/www/uk/en/architecture-and-technology/vpro/vpro-platform-general.html"
            className="text-blue-500 underline"
          >
            here
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
            &nbsp;Privacy Policies.
          </p>
        </div>
    </div>
  );
}
