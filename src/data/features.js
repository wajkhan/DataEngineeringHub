export const features = [
    // Snowflake Features 2025-2026
    {
        id: 1,
        title: "Snowflake Cortex Agents (Public Preview)",
        platform: "snowflake",
        releaseDate: "2026-01-15",
        description: "Build production-ready AI agents with advanced reasoning capabilities. Includes hierarchical observability and tool use planning.",
        status: "new",
        documentationUrl: "https://docs.snowflake.com/en/user-guide/snowflake-cortex/agents",
        trainingUrl: "https://quickstarts.snowflake.com/guide/building_cortex_agents/",
        category: "AI/ML"
    },
    {
        id: 2,
        title: "Snowflake Observe Acquisition",
        platform: "snowflake",
        releaseDate: "2026-01-08",
        description: "Snowflake expands into observability and DevOps monitoring with the acquisition of Observe. Integration roadmap announced.",
        status: "new",
        documentationUrl: "https://www.snowflake.com/blog/snowflake-acquires-observe/",
        trainingUrl: null,
        category: "DevOps"
    },
    {
        id: 3,
        title: "Native dbt Integration (GA)",
        platform: "snowflake",
        releaseDate: "2025-12-10",
        description: "Run dbt Core projects directly within Snowflake tasks with native observability and lineage support.",
        status: "new",
        documentationUrl: "https://docs.snowflake.com/en/user-guide/dbt-integration",
        trainingUrl: "https://quickstarts.snowflake.com/guide/native_dbt_workflows/",
        category: "Data Engineering"
    },
    {
        id: 4,
        title: "Snowflake Intelligence / Cortex AI SQL",
        platform: "snowflake",
        releaseDate: "2025-11-20",
        description: "Natural language interface for data exploration with AI_FILTER and AI_AGG SQL functions.",
        status: "new",
        documentationUrl: "https://docs.snowflake.com/en/sql-reference/cortex-ai-functions",
        trainingUrl: null,
        category: "AI/ML"
    },
    {
        id: 5,
        title: "Snowflake Openflow",
        platform: "snowflake",
        releaseDate: "2025-12-05",
        description: "Managed Apache NiFi service for enterprise data ingestion and movement at scale.",
        status: "new",
        documentationUrl: "https://docs.snowflake.com/en/user-guide/openflow-overview",
        trainingUrl: null,
        category: "Data Engineering"
    },
    {
        id: 6,
        title: "Unistore Hybrid Tables (GA)",
        platform: "snowflake",
        releaseDate: "2025-10-15",
        description: "Support for transactional (OLTP) workloads directly on Snowflake with sub-second latency.",
        status: "updated",
        documentationUrl: "https://docs.snowflake.com/en/user-guide/unistore-intro",
        trainingUrl: "https://quickstarts.snowflake.com/guide/getting_started_with_unistore/",
        category: "App Development"
    },
    {
        id: 7,
        title: "Snowpark Container Services (GA)",
        platform: "snowflake",
        releaseDate: "2025-09-01",
        description: "Deploy and manage containerized applications and LLMs directly within Snowflake's security perimeter.",
        status: "updated",
        documentationUrl: "https://docs.snowflake.com/en/developer-guide/snowpark-container-services/overview",
        trainingUrl: "https://quickstarts.snowflake.com/guide/intro_to_snowpark_container_services/",
        category: "Compute"
    },
    {
        id: 8,
        title: "Snowflake Notebooks (GA)",
        platform: "snowflake",
        releaseDate: "2025-08-12",
        description: "Integrated notebook environment for Python, SQL, and Markdown with native Git integration.",
        status: "updated",
        documentationUrl: "https://docs.snowflake.com/en/user-guide/ui-snowsight-notebooks",
        trainingUrl: "https://quickstarts.snowflake.com/guide/getting_started_with_snowflake_notebooks/",
        category: "Development"
    },


    // Databricks Features 2025-2026
    {
        id: 9,
        title: "Agent Bricks (Beta)",
        platform: "databricks",
        releaseDate: "2026-01-12",
        description: "Framework for operationalizing AI agents with built-in security and knowledge retrieval.",
        status: "new",
        documentationUrl: "https://docs.databricks.com/en/generative-ai/agent-bricks.html",
        trainingUrl: null,
        category: "AI/ML"
    },
    {
        id: 10,
        title: "Serverless Workspaces (Pre-Announce)",
        platform: "databricks",
        releaseDate: "2026-01-05",
        description: "Fully managed SaaS experience with instant compute and zero infrastructure management. GA coming Feb 2026.",
        status: "new",
        documentationUrl: "https://docs.databricks.com/en/getting-started/serverless-workspaces.html",
        trainingUrl: null,
        category: "Platform"
    },
    {
        id: 11,
        title: "Lakeflow Designer (Public Preview)",
        platform: "databricks",
        releaseDate: "2025-12-15",
        description: "No-code visual interface for designing and orchestrating production data pipelines.",
        status: "new",
        documentationUrl: "https://docs.databricks.com/en/lakeflow/index.html",
        trainingUrl: "https://www.databricks.com/resources/learn/tutorials/lakeflow-designer",
        category: "Data Engineering"
    },
    {
        id: 12,
        title: "Databricks One",
        platform: "databricks",
        releaseDate: "2025-11-30",
        description: "Unified portal for business users to access AI/BI dashboards and Genie insights without code.",
        status: "new",
        documentationUrl: "https://docs.databricks.com/en/databricks-one/index.html",
        trainingUrl: null,
        category: "Analytics"
    },
    {
        id: 13,
        title: "Lakebase Postgres (Preview)",
        platform: "databricks",
        releaseDate: "2025-11-10",
        description: "Fully managed Postgres-compatible database engine running directly on the Lakehouse.",
        status: "new",
        documentationUrl: "https://docs.databricks.com/en/lakebase/index.html",
        trainingUrl: null,
        category: "Database"
    },
    {
        id: 14,
        title: "AI/BI Genie (GA)",
        platform: "databricks",
        releaseDate: "2025-10-01",
        description: "Conversational AI analyst that answers data questions with auto-generated SQL and visualizations.",
        status: "updated",
        documentationUrl: "https://docs.databricks.com/en/genie/index.html",
        trainingUrl: "https://www.databricks.com/resources/learn/tutorials/genie-quickstart",
        category: "Analytics"
    },
    {
        id: 15,
        title: "Unity Catalog Iceberg Support (GA)",
        platform: "databricks",
        releaseDate: "2025-09-20",
        description: "Native read/write support for Apache Iceberg tables within Unity Catalog governance layer.",
        status: "updated",
        documentationUrl: "https://docs.databricks.com/en/unity-catalog/iceberg.html",
        trainingUrl: null,
        category: "Governance"
    },
    {
        id: 16,
        title: "Databricks Apps (GA)",
        platform: "databricks",
        releaseDate: "2025-08-25",
        description: "Build and host full-stack data applications directly on the Databricks platform.",
        status: "updated",
        documentationUrl: "https://docs.databricks.com/en/dev-tools/databricks-apps/index.html",
        trainingUrl: "https://www.databricks.com/resources/learn/tutorials/databricks-apps",
        category: "Development"
    },
    {
        id: 17,
        title: "Liquid Clustering (GA)",
        platform: "databricks",
        releaseDate: "2025-08-05",
        description: "Adaptive data layout optimization that replaces Z-ordering and partitioning for Delta tables.",
        status: "updated",
        documentationUrl: "https://docs.databricks.com/en/delta/clustering.html",
        trainingUrl: null,
        category: "Performance"
    },
    {
        id: 18,
        title: "Mosaic AI Model Training",
        platform: "databricks",
        releaseDate: "2025-07-15",
        description: "Fine-tune open source LLMs (Llama 3, Mixtral) using your own data on secure infrastructure.",
        status: "updated",
        documentationUrl: "https://docs.databricks.com/en/generative-ai/fine-tuning.html",
        trainingUrl: "https://www.databricks.com/resources/learn/tutorials/mosaic-ai-training",
        category: "AI/ML"
    }
];
