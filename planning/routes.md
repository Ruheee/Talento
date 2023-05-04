Job Seeker Routes:
------------
GET /job_seekers/:id - Get specific job seeker's profile (If employer wants to take a look at them)
POST /job_seekers/ - Register a new job seeker
PUT /job_seekers/:id - Edit job seeker
GET /job_seekers/:id/messages - All messages for specific job seeker
GET /job_seekers/:id/favourites - All favourites for a specific job seeker
GET /job_seekers/:id/matches - All matches for specific job seeker
DELETE /job_seekers/:id - Delete job seeker

Employer Routes:
------------
GET /employers/:id - Get specific employer's profile (If job seeker wants to take a look at them)
POST /employers/ - Register new employer
GET /employers/:id/messages - All messages for employer
GET /employers/:id/job_listings - All job listings for specific employer
PUT /employers/:id - Edit Employer profile
DELETE /employers/:id - Delete employer profile 

Message Routes:
------------
For Job Seekers:

GET /job_seekers/:id/messages - Retrieve all messages for a specific job seeker
POST /job_seekers/:id/messages - Send a new message from a job seeker
DELETE /job_seekers/:id/messages/:message_id - Delete a specific message from a job seeker

For Employers:

GET /employers/:id/messages - Retrieve all messages for a specific employer
POST /employers/:id/messages - Send a new message from an employer
DELETE /employers/:id/messages/:message_id - Delete a specific message from an employer

Favourites Routes:
------------
For Job Seekers:

GET /job_seekers/:id/favourites - All favourites for a specific job seeker
POST /job_seekers/:id/favourites - Add a new favourite for a job seeker
DELETE /job_seekers/:id/favourites/:favourite_id - Delete a specific favourite from a job seeker's list

For Employers:

GET /employers/:id/favourites - All favourites for a specific employer
POST /employers/:id/favourites - Add a new favourite for an employer
DELETE /employers/:id/favourites/:favourite_id - Delete a specific favourite from an employer's list


Matches
------------
POST /match/- Add new match if employer and jobseeker isMatch? === true
DELETE /match/:id - If either employer or job seeker decides to unmatch

GET /match/match_id/job_seekers/:id - View current matches on job seeker end
GET /match/match_id/employers/:id - View current matches on employer end 



Job Listing
------------
GET /employers/job_listing - view all job listing for that employer
GET /employers/job_listing/:id - view specific job listing

POST /employers/job_listing - create new job listing
PUT /employers/job_listing/:id - update job listing
DELETE /employers/job_listing/:id - delete job listing 
