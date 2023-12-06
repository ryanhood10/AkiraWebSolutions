import React from 'react';

const Pricing = () => {
  return (
    <div className="p-6">
        <div className='border-black shadow-sm bg-gray-100 py-4 rounded-3xl'>
        <h1 className='text-center font-bold text-lg font-sans'>  Lets talk pricing.</h1>
        <p className='text-center text-md font-light font-sans'> ** Please note that all solutions are custom tailored and pricing may vary ** </p>
        </div>
      <section className="mb-8 py-4">
        <h2 className="text-3xl text-center font-semibold pb-2">Custom Website Builds</h2>
        <table className="w-full border-collapse border py-2 border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border border-gray-300">Tier</th>
              <th className="py-2 px-4 border border-gray-300">Features</th>
              <th className="py-2 px-4 border border-gray-300">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border border-gray-300">Simple</td>
              <td className="py-2 px-4 border border-gray-300">Company information, pictures, services offered, Google Analytics integration, Calendly integration, Social Sharing buttons</td>
              <td className="py-2 px-4 border border-gray-300">$500 - $1000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-300">Medium</td>
              <td className="py-2 px-4 border border-gray-300">Company information, pictures, videos, email collection with Mailchimp integration, geolocation API, one API call of your choosing</td>
              <td className="py-2 px-4 border border-gray-300">$1000 - $1500</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-300">High</td>
              <td className="py-2 px-4 border border-gray-300">All features of medium tier plus additional API calls, payment gateways, or e-commerce integration</td>
              <td className="py-2 px-4 border border-gray-300">$1500 - $2500</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
          <h3 className="text-xl font-semibold py-2 ">(Optional) Add-ons:</h3>
          <ul className="list-disc pl-6 py-2">
            <li>--free:</li>
            <ul className="list-disc pl-6 pb-2">
              <li>Social Sharing - 1-click share website to social media: free.</li>
              <li>Google Ads Call tracking - tracks the number of phone dials direct from your website: free.</li>
              <li>Calendly - allow clients to schedule meetings from your website: free.</li>
              <li>Google Business Profile - set up business profile on Google and connect website for more visibility: free (option to run google ads later)</li>
              <li>Website Speed Optimization - free</li>
              <li>Email integration - email form direct from website to your inbox, free for medium and complex site builds.</li>
            </ul>
            <li>--paid:</li>
            <ul className="list-disc pl-6 pb-2">
              <li>Multilingual Support - ability to toggle between languages on your website with the Waglut API: $32 per month.</li>
              <li>Social Proof Notifications - notified for recent website visits and purchases for client outreach with the TrustPulse API: $15 per month.</li>
              <li>CRM Integration - Salesforce and other back-end integrations are priced individually.</li>
              <li>Pop-ups Email forms - email form pop-up on website entry or exit: $10 per month</li>
              <li>Email collection - collect email list: free set-up for medium and complex site builds: monthly data fee (typically less than $10)</li>
            </ul>
          </ul>
          <p className="text-lg">**Feel free to contact us about any API integration not listed!</p>
          <p className="text-md text-red-500">** Shopify Store Program Coming soon!!</p>
        </div>
      </section>
<hr />
      <section className="mb-8">
        <h2 className="text-3xl text-center font-semibold py-4">AI Virtual Assistants</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border border-gray-300">Tier</th>
              <th className="py-2 px-4 border border-gray-300">Features</th>
              <th className="py-2 px-4 border border-gray-300">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border border-gray-300">Basic</td>
              <td className="py-2 px-4 border border-gray-300">Basic Q&A, guides users on buying or using your services, continuous updates, integrates into your website with one line of code</td>
              <td className="py-2 px-4 border border-gray-300">$1000 setup fee + $20 per month</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-300">Advanced</td>
              <td className="py-2 px-4 border border-gray-300">Basic Q&A, guides on buying and navigating the website, multilingual support in English and Spanish</td>
              <td className="py-2 px-4 border border-gray-300">$1000 - $2500 setup fee + $20 per month</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-300">Premium</td>
              <td className="py-2 px-4 border border-gray-300">Integrates CRM like Salesforce or other back-end systems, available on multiple platforms (SMS, Facebook Messenger, Slack, Microsoft Teams, and WhatsApp), can be built to assist customers, retain marketing leads, book meetings, and close more sales</td>
              <td className="py-2 px-4 border border-gray-300">$2500 - $5000 setup fee + $100 per month</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">AI Assistant Add-ons (optional):</h2>
        <ul className="list-disc pl-6">
          <li>Monthly report of customer conversations and data: $20 per month</li>
          <li>Weekly report of customer conversations and data: $40 per month</li>
          <li>Dashboard Access to conversations and customer data: $140 per month</li>
          <li>"Discovery" Search ability for documents and website: $200 per month</li>
        </ul>
      </section>

<hr />

      <section className="mb-8">
        <h1 className="text-4xl text-center font-semibold py-4 bg-gray-100">SEO Services</h1>
        <hr />
        <div className="mb-4">
          <h2 className="text-3xl text-center font-semibold py-4">Technical SEO</h2>
          <p className="text-lg mb-2">
            We optimize your website's code, metadata, tags, text, and structure to improve its ranking in search engine results pages (SERPs). Our comprehensive SEO services include:
          </p>
          <ul className="list-disc pl-6">
            <li>SEO report with website breakdown for improvement</li>
            <li>Keyword report tailored to your business</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">One-time fee based on website complexity:</h3>
          <ul className="list-disc pl-6">
            <li>Simple websites: $300 - $500</li>
            <li>Medium complexity websites: $500 - $750</li>
            <li>High complexity websites: $750 - $1200</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">(Optional) Ongoing Technical SEO Maintenance</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border border-gray-300">Maintenance Plan</th>
                <th className="py-2 px-4 border border-gray-300">Update Fee (1-time)</th>
                <th className="py-2 px-4 border border-gray-300">Monthly Subscription</th>
                <th className="py-2 px-4 border border-gray-300">Quarterly Subscription</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border border-gray-300">Simple Websites</td>
                <td className="py-2 px-4 border border-gray-300">$150</td>
                <td className="py-2 px-4 border border-gray-300">$60</td>
                <td className="py-2 px-4 border border-gray-300">$100</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">Medium Complexity Websites</td>
                <td className="py-2 px-4 border border-gray-300">$250</td>
                <td className="py-2 px-4 border border-gray-300">$100</td>
                <td className="py-2 px-4 border border-gray-300">$150</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">High-End Websites</td>
                <td className="py-2 px-4 border border-gray-300">$500</td>
                <td className="py-2 px-4 border border-gray-300">$150</td>
                <td className="py-2 px-4 border border-gray-300">$300</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg">
          *** We recommend most businesses update their technical SEO once a year, and that e-commerce stores update their websites quarterly or monthly.
        </p>
      </section>

      <hr />

      <section className="mb-8">
        <h2 className="text-3xl text-center font-semibold py-4">Backlink Building – SEO & Social Media Management</h2>
        <p className="text-lg text-center">
          To increase your visibility on Google, we enhance your website's authority and credibility through backlink building:
        </p>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Basic plan: $35 monthly</h3>
          <p className="text-lg">- Social media posting with keyword content on Facebook and LinkedIn that includes monthly:
            <br />
            - 8 personalized posts with graphic images, minimal engagement, and holiday posts.
          </p>
          <p className="text-lg">
            *** If you don’t have an account, we will create one for you.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Pro plan: $75 monthly</h3>
          <p className="text-lg">- All Basic plan features plus.
            <br />
            - Promotional Postings
            <br />
            - 2 Custom Canva postings (high-quality)
            <br />
            - Brand voice expression and customer engagement
          </p>
        </div>

        <hr />


        <div className="mb-4">
          <h3 className="text-xl font-semibold">Additional Services:</h3>
          <ul className="list-disc pl-6">
            <li>Website directory submissions</li>
            <li>Blog outreach</li>
            <li>Custom campaign launching</li>
            <li>Voice and content creation (influencer marketing)</li>
          </ul>
          <p className="text-lg">*** Need a more customized plan? Ask us!</p>
        </div>
        <h3 className="text-2xl font-semibold">SEO Services Pricing Chart:</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border border-gray-300">Service</th>
              <th className="py-2 px-4 border border-gray-300">Pricing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border border-gray-300">Technical SEO (one-time fee)</td>
              <td className="py-2 px-4 border border-gray-300">$300 - $1200</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-300">Ongoing Technical SEO maintenance (update fee)</td>
              <td className="py-2 px-4 border border-gray-300">$150 - $500</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-300">Ongoing Technical SEO maintenance (monthly subscription)</td>
              <td className="py-2 px-4 border border-gray-300">$60 - $150</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-300">Ongoing Technical SEO maintenance (quarterly subscription)</td>
              <td className="py-2 px-4 border border-gray-300">$100 - $300</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-300">Backlink building (basic plan)</td>
              <td className="py-2 px-4 border border-gray-300">$35</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-300">Backlink building (pro plan)</td>
              <td className="py-2 px-4 border border-gray-300">$75</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-300">Backlink building (Additional services)</td>
              <td className="py-2 px-4 border border-gray-300">Contact Us</td>
            </tr>
          </tbody>
        </table>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold py-4">Pricing Notes</h2>
        <ul className="list-disc pl-6">
          <li>All prices are in USD.</li>
          <li>Setup fees are one-time fees.</li>
          <li>Monthly subscription fees are billed monthly and can be canceled at any time.</li>
          <li>Customizations and additional features may incur additional charges.</li>
          <li>Please contact us for a free consultation to discuss your specific needs and requirements.</li>
        </ul>
      </section>


    </div>
  );
}

export default Pricing;
