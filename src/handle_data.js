import fs from 'fs';

const data_loc = "../data/reviews.json";

save_review = function(json) {
  let save_data = JSON.stringify(json);
  console.log(save_data);
  fs.writeFile(data_loc, save_data, (err) => {
    if(err) throw err; 
  });
}

load_review = function() {
  let content;
  fs.readFile(data_loc, function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
  });
  return JSON.parse(content);
}
