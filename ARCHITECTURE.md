# System Architecture Documentation

## Overview
This documentation provides an overview of the system architecture for the Pengawasan Pajak application, outlining its components, interactions, and key design principles.

## Components
1. **Frontend**  
   - Technologies: React, Redux, CSS
   - Description: The user interface for interacting with the system. It communicates with the backend via RESTful APIs.

2. **Backend**  
   - Technologies: Node.js, Express
   - Description: The server-side application that processes requests from the frontend, interacts with the database and provides RESTful APIs.

3. **Database**  
   - Technologies: PostgreSQL
   - Description: The relational database that stores all application data including user accounts, transactions, and audit logs.

4. **Authentication Service**  
   - Technologies: JWT, OAuth
   - Description: Manages user authentication and authorization through tokens.

5. **External Services**  
   - Description: Integrations with external tax authority services for compliance and data validation.

## Deployment Architecture
- **Cloud Provider**: AWS  
- **Services Used**:
  - EC2 for hosting applications
  - RDS for database instances
  - S3 for static file storage
  - CloudFront for CDN

## Data Flow
1. The user interacts with the frontend.
2. Frontend sends requests to the backend service.
3. Backend processes the requests and interacts with the database.
4. Data is retrieved and sent back to the frontend for display.
5. Authentication service verifies user sessions and roles.

## Conclusion
This architecture provides a robust, scalable solution for tax supervision, ensuring secure data handling and compliance with regulations.