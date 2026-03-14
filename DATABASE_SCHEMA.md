# DATABASE SCHEMA

## Users Table
- **Table Name:** users  
- **Columns:**  
  - **id** (Primary Key, Integer, Auto Increment)  
  - **username** (String, Unique, Not Null)  
  - **email** (String, Unique, Not Null)  
  - **password_hash** (String, Not Null)  
  - **created_at** (Timestamp, Default: CURRENT_TIMESTAMP)  
  - **updated_at** (Timestamp, Default: CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)  

- **Indexes:**  
  - Unique index on `username`  
  - Unique index on `email`  

---------------------------------------

## Pengawasan Records Table
- **Table Name:** pengawasan_records  
- **Columns:**  
  - **id** (Primary Key, Integer, Auto Increment)  
  - **user_id** (Foreign Key to users.id, Integer, Not Null)  
  - **record_data** (JSON, Not Null)  
  - **created_at** (Timestamp, Default: CURRENT_TIMESTAMP)  
  - **updated_at** (Timestamp, Default: CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)  

- **Relationships:**  
  - `user_id` references `users(id)`  

---------------------------------------

## Workflow Timeline Table
- **Table Name:** workflow_timeline  
- **Columns:**  
  - **id** (Primary Key, Integer, Auto Increment)  
  - **record_id** (Foreign Key to pengawasan_records.id, Integer, Not Null)  
  - **status** (String, Not Null)  
  - **timestamp** (Timestamp, Default: CURRENT_TIMESTAMP)  

- **Relationships:**  
  - `record_id` references `pengawasan_records(id)`  

---------------------------------------

## SLA Tracking Table
- **Table Name:** sla_tracking  
- **Columns:**  
  - **id** (Primary Key, Integer, Auto Increment)  
  - **record_id** (Foreign Key to pengawasan_records.id, Integer, Not Null)  
  - **sla_met** (Boolean, Not Null)  
  - **created_at** (Timestamp, Default: CURRENT_TIMESTAMP)  

- **Relationships:**  
  - `record_id` references `pengawasan_records(id)`  

---------------------------------------

## Audit Logs Table
- **Table Name:** audit_logs  
- **Columns:**  
  - **id** (Primary Key, Integer, Auto Increment)  
  - **user_id** (Foreign Key to users.id, Integer, Not Null)  
  - **action** (String, Not Null)  
  - **timestamp** (Timestamp, Default: CURRENT_TIMESTAMP)  

- **Relationships:**  
  - `user_id` references `users(id)`  

---------------------------------------

## Export Logs Table
- **Table Name:** export_logs  
- **Columns:**  
  - **id** (Primary Key, Integer, Auto Increment)  
  - **record_id** (Foreign Key to pengawasan_records.id, Integer, Not Null)  
  - **exported_at** (Timestamp, Default: CURRENT_TIMESTAMP)  
  - **file_format** (String, Not Null)  

- **Relationships:**  
  - `record_id` references `pengawasan_records(id)`  

---------------------------------------

## Performance Metrics Table
- **Table Name:** performance_metrics  
- **Columns:**  
  - **id** (Primary Key, Integer, Auto Increment)  
  - **metric_name** (String, Not Null)  
  - **value** (Decimal, Not Null)  
  - **recorded_at** (Timestamp, Default: CURRENT_TIMESTAMP)  

- **Indexes:**  
  - Index on `metric_name`  

---

**Note:** The schema can be modified as per additional requirements.