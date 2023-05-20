import axios from "axios";

export function getUnmatchedJobListings(jobListingsAPI, matchesAPI) {
  return new Promise((resolve, reject) => {
    const unmatchedJobListings = [];

    axios.get(jobListingsAPI).then((listings) => {
      axios.get(matchesAPI).then((matches) => {
        const jobListingIDs = listings.data.map((list) => list.id);
        const matchedJobListingIDs = matches.data
          .filter((match) => match.seeker_status === "true" || match.not_interested === "true")
          .map((match) => match.job_listing_id);

        // extract only the job listings that have not been matched
        jobListingIDs.forEach((listID) => {
          if (!matchedJobListingIDs.includes(listID)) {
            unmatchedJobListings.push(listings.data[listID - 1]);
          }
        });

        resolve(unmatchedJobListings);
      });
    });
  });
}

export function getUnmatchedJobSeekers(jobSeekersAPI, matchesAPI) {
  return new Promise((resolve, reject) => {
    const unmatchedJobSeekers = [];

    axios.get(jobSeekersAPI).then((seekers) => {
      axios.get(matchesAPI).then((matches) => {
        const jobSeekerIDs = seekers.data.map((seeker) => seeker.id);
        const matchedJobSeekerIDs = matches.data
          .filter((match) => match.employer_status === "true" || match.not_interested === "true")
          .map((match) => match.job_seeker_id);

        // extract only the job listings that have not been matched
        jobSeekerIDs.forEach((seekerID) => {
          if (!matchedJobSeekerIDs.includes(seekerID)) {
            unmatchedJobSeekers.push(seekers.data[seekerID - 1]);
          }
        });

        resolve(unmatchedJobSeekers);
      });
    });
  });
}
