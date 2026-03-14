# API Specification

## Overview
This document outlines the REST API endpoints available for the Pengawasan Pajak application.

## Endpoints

### 1. List All Resources
- **Endpoint:** `/api/resources`
- **Method:** `GET`
- **Description:** Retrieves a list of all resources.
- **Response:** 200 OK

### 2. Create a Resource
- **Endpoint:** `/api/resources`
- **Method:** `POST`
- **Description:** Creates a new resource.
- **Request Body:** 
  ```json
  {
      "name": "string",
      "description": "string"
  }
  ```
- **Response:** 201 Created

### 3. Get Resource by ID
- **Endpoint:** `/api/resources/{id}`
- **Method:** `GET`
- **Description:** Retrieves a single resource by its ID.
- **Response:** 200 OK

### 4. Update Resource by ID
- **Endpoint:** `/api/resources/{id}`
- **Method:** `PUT`
- **Description:** Updates a resource by its ID.
- **Request Body:** 
  ```json
  {
      "name": "string",
      "description": "string"
  }
  ```
- **Response:** 200 OK

### 5. Delete Resource by ID
- **Endpoint:** `/api/resources/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a resource by its ID.
- **Response:** 204 No Content

## Error Handling
Common HTTP error responses:
- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

## Authentication
This API requires authentication using API Tokens.
