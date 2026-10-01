import type { ProjectDetails } from './project-details';
import hero from '../assets/bike-datalakehouse/hero.png';

export const bikeDatalakehouseDetails = {
  tagline:
    'From fragmented operational data to a trustworthy analytical model.',
  hero: {
    image: hero,
    alt: 'Databricks Catalog showing the bike-sales lakehouse Bronze, Silver, and Gold schemas and their customer, product, and sales tables',
  },
  links: [
    {
      label: 'GitHub Repo',
      href: 'https://github.com/winhks25/bike-data-lakehouse',
      primary: true,
    },
  ],
  overview: [
    [
      'An end-to-end data lakehouse that turns six CRM and ERP source datasets into an analytics-ready bike-sales star schema. The pipeline uses a ',
      { strong: 'Medallion Bronze–Silver–Gold architecture' },
      ' to keep raw data traceable, apply tested business rules, and publish conformed customer and product dimensions with a central sales fact table.',
    ],
  ],
  role: 'Data Engineer · Individual Project',
  stack: [
    'Databricks',
    'Apache Spark',
    'PySpark',
    'Spark SQL',
    'Delta Lake',
    'Python 3.12',
  ],
  status: ['Complete end-to-end pipeline', 'Analytics-ready Gold model'],
  contributions: [
    ['Designed and built the entire data pipeline.'],
    ['Ingested six datasets from CRM and ERP systems.'],
    ['Cleaned and transformed the data using PySpark.'],
    ['Implemented data-quality checks and handled invalid records.'],
    ['Organized the data into Bronze, Silver, and Gold layers.'],
    ['Created customer and product dimensions.'],
    ['Built a sales fact table for analysis.'],
  ],
  contributionsFormat: 'list',
  features: [
    {
      title: 'Cross-system identity resolution',
      description:
        'Targeted regular expressions reconcile differently formatted CRM and ERP customer identifiers before enrichment.',
    },
    {
      title: 'Structured product attributes',
      description:
        'Color, size, and capacity are extracted from product-name text and published as analysis-ready columns.',
    },
    {
      title: 'Self-consistent sales measures',
      description:
        'Missing prices are derived when possible and inconsistent amounts are repaired using quantity × unit price.',
    },
    {
      title: 'Deterministic dimensions',
      description:
        'Window functions select the latest valid record and produce stable, unique customer and product dimensions.',
    },
  ],
  learnings: [
    [
      'The project reinforced that data quality belongs inside the architecture, not at the end of it. Each rule is applied where its intent is clearest, while uncertain anomalies remain documented rather than being “fixed” without evidence.',
    ],
    [
      'It also deepened my understanding of dimensional modeling, Spark window functions, resilient multi-source joins, and the trade-offs involved in turning operational data into a model analysts can trust.',
    ],
  ],
  caseStudy: 'bike-datalakehouse',
} satisfies ProjectDetails;
