child_rights_advocacy_hub
Database Tables Description

This repository contains SQL scripts to create tables for an advocacy platform. The database schema consists of the following tables:

1. **User**: Stores information about users of the advocacy platform.
2. **Feeds**: Stores posts shared on the platform.
3. **Event**: Stores information about events organized on the platform.
4. **Forum**: Stores discussions and threads created on the platform.
5. **Resources**: Stores links to external resources shared on the platform.
6. **Campaign**: Stores information about advocacy campaigns launched on the platform.

## Table Descriptions

### User
- **user_id**: Unique identifier for each user.
- **email_address**: Email address of the user.
- **password**: Password for user authentication.
- **phonenumber**: Phone number of the user.
- **role**: Role of the user (e.g., admin, moderator, user).
- **fullnames**: Full name of the user.
- **status**: Status of the user account (active/inactive).
- **verification_status**: Verification status of the user account.
- **profile_pic**: URL to the user's profile picture.
- **privacy_settings**: User's privacy settings.
- **follow_account**: Number of accounts followed by the user.

### Feeds
- **post_id**: Unique identifier for each post.
- **content**: Content of the post.
- **created_at**: Timestamp indicating when the post was created.
- **updated_at**: Timestamp indicating when the post was last updated.
- **shares**: Number of shares for the post.
- **likes**: Number of likes for the post.
- **no_comments**: Number of comments on the post.
- **FK_U**: Foreign key referencing the user who posted.
- **parent_feeds_id**: Foreign key referencing the parent post (if applicable).

### Event
- **event_id**: Unique identifier for each event.
- **title**: Title of the event.
- **description**: Description of the event.
- **start_date**: Start date of the event.
- **end_date**: End date of the event.
- **location**: Location of the event.
- **organizer**: User ID of the event organizer.
- **attendees**: Number of attendees for the event.
- **FK_user_id**: Foreign key referencing the user who created the event.
- **online_event**: Indicates if the event is online.
- **url**: URL for the event details.

### Forum
- **forum_id**: Unique identifier for each forum thread.
- **forumname**: Name of the forum.
- **title**: Title of the forum thread.
- **description**: Description of the forum thread.
- **content**: Content of the forum thread.
- **timestamp**: Timestamp indicating when the forum thread was created.
- **FK_user_id**: Foreign key referencing the user who created the forum thread.
- **likes**: Number of likes for the forum thread.
- **no_comments**: Number of comments on the forum thread.
- **parent_forum_id**: Foreign key referencing the parent forum thread (if applicable).

### Resources
- **resource_id**: Unique identifier for each resource.
- **resource_name**: Name of the resource.
- **links**: URL to the resource.
- **resource_type**: Type of the resource (e.g., article, video).

### Campaign
- **campaign_id**: Unique identifier for each campaign.
- **name**: Name of the campaign.
- **goal**: Goal of the campaign.
- **track**: Progress tracking for the campaign.
- **started_at**: Timestamp indicating when the campaign started.
- **ended_at**: Timestamp indicating when the campaign ended.
- **budget**: Budget allocated for the campaign.
- **participants**: Number of participants in the campaign.

## How to Use

1. Run the SQL scripts provided in this repository to create the tables in your MySQL database.
2. Update the table descriptions and column details as needed for your specific use case.
3. You can now use these tables to build your advocacy platform application.

