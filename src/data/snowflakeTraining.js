export const snowflakeTraining = {
  fundamentals: {
    title: "Snowflake Fundamentals",
    description: "Essential concepts and getting started with Snowflake",
    videos: [
      {
        id: 1,
        title: "Snowflake Architecture Overview",
        description: "Understanding Snowflake's unique architecture: storage, compute, and cloud services layers",
        duration: "15:30",
        difficulty: "Beginner",
        type: "free",
        url: "https://www.youtube.com/watch?v=sxUYSZn0mui",
        instructor: "Snowflake Official"
      },
      {
        id: 2,
        title: "Getting Started with Snowflake",
        description: "Create your first database, load data, and run queries",
        duration: "22:45",
        difficulty: "Beginner",
        type: "free",
        url: "https://www.youtube.com/watch?v=6StW4B2_Rj4",
        instructor: "Snowflake Quickstarts"
      },
      {
        id: 3,
        title: "Snowflake Data Loading Basics",
        description: "Learn about COPY INTO, stages, and file formats",
        duration: "18:20",
        difficulty: "Beginner",
        type: "free",
        url: "https://www.youtube.com/watch?v=us6MChC8T9Y",
        instructor: "Snowflake Tutorials"
      },
      {
        id: 4,
        title: "Snowflake SnowPro Core Certification Prep",
        description: "Complete certification preparation course",
        duration: "8 hours",
        difficulty: "Intermediate",
        type: "paid",
        url: "https://www.udemy.com/course/snowflake-snowpro-core-certification/",
        instructor: "Udemy - AI Sciences"
      }
    ]
  },
  dataEngineering: {
    title: "Data Engineering",
    description: "ETL/ELT patterns, data pipelines, and engineering workflows",
    videos: [
      {
        id: 5,
        title: "Snowflake Data Pipelines with Snowpipe",
        description: "Automated continuous data ingestion patterns",
        duration: "25:15",
        difficulty: "Intermediate",
        type: "free",
        url: "https://www.snowflake.com/en/developers/?utm_source=youtube&utm_medium=social&utm_campaign=--en-&utm_content=-ld-devyt-homepage",
        instructor: "Snowflake Developers"
      },
      {
        id: 6,
        title: "Building ELT Pipelines in Snowflake",
        description: "Modern ELT patterns using Snowflake tasks and streams",
        duration: "32:40",
        difficulty: "Intermediate",
        type: "free",
        url: "https://www.youtube.com/watch?v=YALvVmPMxWc",
        instructor: "Data Engineering Weekly"
      },
      {
        id: 7,
        title: "Streams and Tasks Deep Dive",
        description: "Change data capture and automated workflows",
        duration: "28:55",
        difficulty: "Advanced",
        type: "free",
        url: "https://www.youtube.com/watch?v=dBk9HULcWkA",
        instructor: "Snowflake University"
      },
      {
        id: 8,
        title: "Complete Snowflake Data Engineering Course",
        description: "End-to-end data engineering with Snowflake",
        duration: "12 hours",
        difficulty: "Intermediate",
        type: "paid",
        url: "https://www.udemy.com/course/snowflake-complete-data-engineering/",
        instructor: "Udemy - The Data School"
      }
    ]
  },
  administration: {
    title: "Administration & Security",
    description: "User management, security, resource monitors, and governance",
    videos: [
      {
        id: 9,
        title: "Snowflake Security Best Practices",
        description: "RBAC, network policies, and data encryption",
        duration: "30:20",
        difficulty: "Intermediate",
        type: "free",
        url: "https://www.youtube.com/watch?v=RnB6qmxuKQs",
        instructor: "Snowflake Official"
      },
      {
        id: 10,
        title: "Resource Monitors and Cost Management",
        description: "Control costs with warehouses and resource monitors",
        duration: "20:15",
        difficulty: "Intermediate",
        type: "free",
        url: "https://www.youtube.com/watch?v=tTD1JCHi_PE",
        instructor: "Snowflake Admin Guide"
      },
      {
        id: 11,
        title: "Role-Based Access Control (RBAC)",
        description: "Implement secure access patterns and privileges",
        duration: "24:30",
        difficulty: "Intermediate",
        type: "free",
        url: "https://www.youtube.com/watch?v=UhPLx8e3m6I",
        instructor: "Snowflake Security"
      }
    ]
  },
  development: {
    title: "Development & Advanced SQL",
    description: "Stored procedures, UDFs, Snowpark, and advanced queries",
    videos: [
      {
        id: 12,
        title: "Snowpark Python Development",
        description: "Build data pipelines using Python in Snowflake",
        duration: "35:45",
        difficulty: "Advanced",
        type: "free",
        url: "https://www.youtube.com/watch?v=SqKI3W0gf7k",
        instructor: "Snowflake Developers"
      },
      {
        id: 13,
        title: "Stored Procedures and UDFs",
        description: "Create reusable code with stored procedures and user-defined functions",
        duration: "27:20",
        difficulty: "Advanced",
        type: "free",
        url: "https://www.youtube.com/watch?v=Wk_8F8lWrXU",
        instructor: "Snowflake SQL"
      },
      {
        id: 14,
        title: "Advanced SQL Window Functions",
        description: "Master complex analytical queries",
        duration: "22:35",
        difficulty: "Intermediate",
        type: "free",
        url: "https://www.youtube.com/watch?v=Ww71knvhQ-s",
        instructor: "SQL Mastery"
      },
      {
        id: 15,
        title: "Snowpark for Python - Complete Course",
        description: "Full Snowpark development bootcamp",
        duration: "10 hours",
        difficulty: "Advanced",
        type: "paid",
        url: "https://www.udemy.com/course/snowpark-python/",
        instructor: "Udemy - Snowflake Experts"
      }
    ]
  },
  advanced: {
    title: "Advanced Topics",
    description: "Data sharing, marketplace, time travel, and optimization",
    videos: [
      {
        id: 16,
        title: "Snowflake Data Sharing",
        description: "Share live data securely across organizations",
        duration: "26:40",
        difficulty: "Advanced",
        type: "free",
        url: "https://www.youtube.com/watch?v=XOKefEYUCtQ",
        instructor: "Snowflake Architecture"
      },
      {
        id: 17,
        title: "Time Travel and Zero-Copy Cloning",
        description: "Leverage Snowflake's unique data recovery features",
        duration: "19:25",
        difficulty: "Intermediate",
        type: "free",
        url: "https://www.youtube.com/watch?v=yQIMmXg7Seg",
        instructor: "Snowflake Features"
      },
      {
        id: 18,
        title: "Query Performance Optimization",
        description: "Clustering, partitioning, and query profiling",
        duration: "33:15",
        difficulty: "Advanced",
        type: "free",
        url: "https://www.youtube.com/watch?v=FQQhHkmNc9w",
        instructor: "Snowflake Performance"
      },
      {
        id: 19,
        title: "Snowflake Data Marketplace",
        description: "Discover and monetize data products",
        duration: "21:50",
        difficulty: "Intermediate",
        type: "free",
        url: "https://www.youtube.com/watch?v=NQWR2nR5KQs",
        instructor: "Snowflake Marketplace"
      }
    ]
  }
};
