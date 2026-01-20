export const databricksTraining = {
    fundamentals: {
        title: "Databricks Fundamentals",
        description: "Core concepts, workspace basics, and getting started",
        videos: [
            {
                id: 1,
                title: "Databricks Platform Overview",
                description: "Understanding the Databricks Lakehouse architecture",
                duration: "18:45",
                difficulty: "Beginner",
                type: "free",
                url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                instructor: "Databricks Official"
            },
            {
                id: 2,
                title: "Getting Started with Databricks Notebooks",
                description: "Create your first notebook and run Spark code",
                duration: "22:30",
                difficulty: "Beginner",
                type: "free",
                url: "https://www.youtube.com/watch?v=F-lZRGXV4DQ",
                instructor: "Databricks Academy"
            },
            {
                id: 3,
                title: "Delta Lake Fundamentals",
                description: "ACID transactions on data lakes with Delta Lake",
                duration: "25:15",
                difficulty: "Beginner",
                type: "free",
                url: "https://www.youtube.com/watch?v=LJtShrQqYZY",
                instructor: "Delta Lake Tutorials"
            },
            {
                id: 4,
                title: "Databricks Certified Associate Developer",
                description: "Complete certification preparation",
                duration: "15 hours",
                difficulty: "Intermediate",
                type: "paid",
                url: "https://www.udemy.com/course/databricks-certified-associate-developer/",
                instructor: "Udemy - Databricks Training"
            }
        ]
    },
    spark: {
        title: "Apache Spark",
        description: "Spark fundamentals, DataFrames, and distributed computing",
        videos: [
            {
                id: 5,
                title: "Apache Spark Fundamentals",
                description: "RDDs, DataFrames, and Spark architecture",
                duration: "35:20",
                difficulty: "Intermediate",
                type: "free",
                url: "https://www.youtube.com/watch?v=_C8kWso4ne4",
                instructor: "Spark By Examples"
            },
            {
                id: 6,
                title: "Spark SQL and DataFrames",
                description: "Structured data processing with Spark",
                duration: "28:45",
                difficulty: "Intermediate",
                type: "free",
                url: "https://www.youtube.com/watch?v=1mHF3NUVP_I",
                instructor: "Apache Spark"
            },
            {
                id: 7,
                title: "PySpark for Data Engineering",
                description: "Build production data pipelines with PySpark",
                duration: "42:10",
                difficulty: "Advanced",
                type: "free",
                url: "https://www.youtube.com/watch?v=cZS5xYYIPzk",
                instructor: "PySpark Tutorials"
            },
            {
                id: 8,
                title: "Complete Apache Spark & PySpark Course",
                description: "Master Spark from basics to advanced",
                duration: "20 hours",
                difficulty: "Intermediate",
                type: "paid",
                url: "https://www.udemy.com/course/apache-spark-with-python/",
                instructor: "Udemy - Spark Experts"
            }
        ]
    },
    dataEngineering: {
        title: "Data Engineering",
        description: "ETL pipelines, workflows, and data orchestration",
        videos: [
            {
                id: 9,
                title: "Databricks Workflows and Jobs",
                description: "Orchestrate data pipelines with workflows",
                duration: "30:25",
                difficulty: "Intermediate",
                type: "free",
                url: "https://www.youtube.com/watch?v=vSd_0k1gn-0",
                instructor: "Databricks Engineering"
            },
            {
                id: 10,
                title: "Delta Live Tables",
                description: "Declarative ETL framework for reliable pipelines",
                duration: "33:40",
                difficulty: "Advanced",
                type: "free",
                url: "https://www.youtube.com/watch?v=EYz6UYkqYPg",
                instructor: "Databricks DLT"
            },
            {
                id: 11,
                title: "Medallion Architecture on Lakehouse",
                description: "Bronze, Silver, Gold layer design patterns",
                duration: "27:55",
                difficulty: "Intermediate",
                type: "free",
                url: "https://www.youtube.com/watch?v=QepKX1OXbcc",
                instructor: "Data Architecture"
            },
            {
                id: 12,
                title: "Auto Loader for Incremental Data",
                description: "Efficiently ingest streaming file data",
                duration: "24:30",
                difficulty: "Intermediate",
                type: "free",
                url: "https://www.youtube.com/watch?v=q1KKOTKEbao",
                instructor: "Databricks Streaming"
            },
            {
                id: 13,
                title: "Databricks Data Engineering Professional",
                description: "End-to-end data engineering certification prep",
                duration: "25 hours",
                difficulty: "Advanced",
                type: "paid",
                url: "https://www.udemy.com/course/databricks-data-engineer-professional/",
                instructor: "Udemy - Advanced Training"
            }
        ]
    },
    mlAi: {
        title: "Machine Learning & AI",
        description: "MLflow, Feature Store, AutoML, and model deployment",
        videos: [
            {
                id: 14,
                title: "MLflow Tutorial",
                description: "Track experiments and manage ML lifecycle",
                duration: "29:15",
                difficulty: "Intermediate",
                type: "free",
                url: "https://www.youtube.com/watch?v=FHvXfJT2iBA",
                instructor: "MLflow Official"
            },
            {
                id: 15,
                title: "Databricks AutoML",
                description: "Automated machine learning on Databricks",
                duration: "22:50",
                difficulty: "Beginner",
                type: "free",
                url: "https://www.youtube.com/watch?v=pUrr7sM6b0M",
                instructor: "Databricks ML"
            },
            {
                id: 16,
                title: "Feature Engineering with Feature Store",
                description: "Build and serve ML features at scale",
                duration: "26:35",
                difficulty: "Advanced",
                type: "free",
                url: "https://www.youtube.com/watch?v=c-sWa-5qS5c",
                instructor: "Databricks Features"
            },
            {
                id: 17,
                title: "Model Serving and Deployment",
                description: "Deploy ML models to production",
                duration: "31:20",
                difficulty: "Advanced",
                type: "free",
                url: "https://www.youtube.com/watch?v=Bg4Li3Z6wZE",
                instructor: "ML Deployment"
            },
            {
                id: 18,
                title: "Databricks Machine Learning Professional",
                description: "Complete ML certification course",
                duration: "18 hours",
                difficulty: "Advanced",
                type: "paid",
                url: "https://www.udemy.com/course/databricks-machine-learning/",
                instructor: "Udemy - ML Experts"
            }
        ]
    },
    administration: {
        title: "Administration & Governance",
        description: "Workspace management, security, Unity Catalog",
        videos: [
            {
                id: 19,
                title: "Unity Catalog Overview",
                description: "Unified governance for lakehouse data",
                duration: "28:40",
                difficulty: "Intermediate",
                type: "free",
                url: "https://www.youtube.com/watch?v=NeZ7BiLGHug",
                instructor: "Databricks Governance"
            },
            {
                id: 20,
                title: "Databricks Security Best Practices",
                description: "Authentication, authorization, and encryption",
                duration: "32:15",
                difficulty: "Advanced",
                type: "free",
                url: "https://www.youtube.com/watch?v=7Fz0C0QPXT8",
                instructor: "Databricks Security"
            },
            {
                id: 21,
                title: "Cluster Management and Optimization",
                description: "Cost optimization and performance tuning",
                duration: "25:50",
                difficulty: "Intermediate",
                type: "free",
                url: "https://www.youtube.com/watch?v=c7vHt0UEr5Q",
                instructor: "Databricks Admin"
            },
            {
                id: 22,
                title: "Data Lineage and Auditing",
                description: "Track data flow and compliance",
                duration: "23:25",
                difficulty: "Intermediate",
                type: "free",
                url: "https://www.youtube.com/watch?v=QPJQp-D0LfE",
                instructor: "Databricks Compliance"
            }
        ]
    }
};
