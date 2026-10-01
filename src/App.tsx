import './App.css'

const products = [
  {
    id: 'LKA-HOODIE-001',
    title: 'Women Merino Travel Hoodie - Black',
    gtin: '00012345678905',
    price: '89.00 USD',
    availability: 'in_stock',
    issue: 'Ready',
  },
  {
    id: 'LKA-BAG-014',
    title: 'Packable Weekender Bag - Olive',
    gtin: '00012345678912',
    price: '74.00 USD',
    availability: 'in_stock',
    issue: 'Add lifestyle image',
  },
  {
    id: 'LKA-SHOE-118',
    title: 'Everyday Leather Sneaker - White',
    gtin: '00012345678929',
    price: '118.00 USD',
    availability: 'limited_availability',
    issue: 'Review color variant mapping',
  },
]

const feedChecks = [
  'Required attributes: id, title, description, link, image_link, availability, price, brand, gtin or mpn',
  'Product landing-page structured data matches Merchant Center feed values',
  'Shipping and return policy details are visible and consistent',
  'Promotion IDs match eligible SKUs and active dates',
  'Images are crawlable, high quality, and not watermarked',
  'Variant attributes use consistent color, size, item_group_id, and availability values',
]

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Women Merino Travel Hoodie - Black',
  sku: 'LKA-HOODIE-001',
  gtin13: '00012345678905',
  brand: { '@type': 'Brand', name: 'Northline Apparel' },
  offers: {
    '@type': 'Offer',
    price: '89.00',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'USD' },
    },
  },
}

function App() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <section className="hero">
        <div>
          <p className="eyebrow">Google Merchant Center Showcase</p>
          <h1>Shopping feed optimization and marketplace readiness for ecommerce.</h1>
          <p>
            A professional product-data workspace for product-feed QA, Merchant Center issue triage,
            product structured data, promotions, shipping/returns checks, and marketplace
            data quality workflows.
          </p>
        </div>
        <aside className="status-card">
          <span>Feed health</span>
          <strong>97%</strong>
          <small>Readiness score</small>
        </aside>
      </section>

      <section className="section">
        <p className="eyebrow">Product Feed QA</p>
        <h2>Merchant Center product data review</h2>
        <div className="feed-table" role="table" aria-label="Merchant Center product feed">
          <div role="row" className="head">
            <span role="columnheader">ID</span>
            <span role="columnheader">Title</span>
            <span role="columnheader">GTIN</span>
            <span role="columnheader">Price</span>
            <span role="columnheader">Status</span>
          </div>
          {products.map((product) => (
            <div role="row" key={product.id}>
              <span role="cell">{product.id}</span>
              <span role="cell">{product.title}</span>
              <span role="cell">{product.gtin}</span>
              <span role="cell">{product.price}</span>
              <span role="cell">{product.issue}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section two-col">
        <div>
          <p className="eyebrow">Readiness Checklist</p>
          <h2>What I check before products go live on Google surfaces</h2>
          <ul className="checklist">
            {feedChecks.map((check) => (
              <li key={check}>{check}</li>
            ))}
          </ul>
        </div>
        <pre>{`id,title,availability,price,brand,gtin,promotion_id
LKA-HOODIE-001,"Women Merino Travel Hoodie - Black",in_stock,89.00 USD,"Northline Apparel",00012345678905,FALL10
LKA-BAG-014,"Packable Weekender Bag - Olive",in_stock,74.00 USD,"Northline Apparel",00012345678912,FALL10`}</pre>
      </section>

      <section className="section cards">
        <article>
          <h3>Structured Data Match</h3>
          <p>Validate that product page schema agrees with feed price, availability, GTIN, brand, shipping, and returns.</p>
        </article>
        <article>
          <h3>Promotion Mapping</h3>
          <p>Use promotion IDs, active dates, eligible products, and policy-safe offer language for Shopping visibility.</p>
        </article>
        <article>
          <h3>Disapproval Triage</h3>
          <p>Prioritize missing identifiers, mismatched price/availability, image problems, landing-page errors, and policy flags.</p>
        </article>
      </section>
    </main>
  )
}

export default App
