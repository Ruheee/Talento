import axios from "axios";

export function getUnmatchedItems(queryTypeAPI, matchesAPI) {
  return new Promise((resolve, reject) => {
    const unmatchedItemsArr = [];

    axios.get(queryTypeAPI).then((items) => {
      axios.get(matchesAPI).then((matches) => {
        const queryIDs = items.data.map((item) => item.id);
        const matchedJobListingIDs = matches.data
          .filter((match) => match.seeker_status === "true")
          .map((match) => match.job_listing_id);

        // extract only the job listings that have not been matched
        queryIDs.forEach((queryID) => {
          if (!matchedJobListingIDs.includes(queryID)) {
            unmatchedItemsArr.push(items.data[queryID - 1]);
          }
        });

        resolve(unmatchedItemsArr);
      });
    });
  });
}

export function randomIndex(array) {
  // Shuffle the array before returning a random index to avoid the same job listing being shown consecutively
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return Math.floor(Math.random() * shuffledArray.length);
}
