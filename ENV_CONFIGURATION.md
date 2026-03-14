# Environment Configuration

This document outlines the environment configuration examples for different environments of the application: Development, Production, and Testing.

## Development Environment
- **Database:**
  - `DB_HOST`: `localhost`
  - `DB_PORT`: `5432`
  - `DB_USER`: `dev_user`
  - `DB_PASSWORD`: `dev_password`
- **API Keys:**
  - `API_KEY`: `dev_api_key`

## Production Environment
- **Database:**
  - `DB_HOST`: `db.prod.example.com`
  - `DB_PORT`: `5432`
  - `DB_USER`: `prod_user`
  - `DB_PASSWORD`: `prod_secure_password`
- **API Keys:**
  - `API_KEY`: `prod_api_key`

## Testing Environment
- **Database:**
  - `DB_HOST`: `localhost`
  - `DB_PORT`: `5432`
  - `DB_USER`: `test_user`
  - `DB_PASSWORD`: `test_password`
- **API Keys:**
  - `API_KEY`: `test_api_key`

## Notes
- Always keep sensitive information secured and use environment variables for sensitive configurations where possible.