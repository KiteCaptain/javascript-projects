/** 
 Problem Explanation
For the given id parameter, which is associated with the records object:
* If the value parameter isn’t an empty string, update (or set) the value parameter for the prop parameter.
* If the prop parameter is equal to "tracks" and the value isn’t an empty string, push the value onto the end of the tracks array.
* If value is an empty string, delete that prop from the object.

Finally, return records.
*/

// Version One
function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
      records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value);
    } else if (value === "") {
      delete records[id][prop];
    }
    return records;
  }

  // Version Two
  function updateRecords(records, id, prop, value) {
    if (value === '') {
      delete records[id][prop];
    } else if (prop === 'tracks') {
      records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
      records[id][prop].push(value);
    } else {
      records[id][prop] = value;
    }
    return records;
  }

  // Version Three
  function updateRecords(records, id, prop, value) {
    // Access target album in record collection
    const album = records[id];
  
    // If value is an empty string,
    //  delete the given prop property from the album
    if (value === "") {
      delete album[prop];
    }
    // If prop isn't tracks,
    //  update or set that album's prop to value
    else if (prop !== "tracks") {
      album[prop] = value;
    }
    // If prop is tracks,
    //  add value to the end of the album's existing tracks array
    else {
      album["tracks"] = album["tracks"] || [];
      album["tracks"].push(value);
    }
  
    // Your function must always return the entire record collection object
    return records;
  }