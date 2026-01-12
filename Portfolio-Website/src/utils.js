//makes the links within the program easier to type
export const getImageUrl = (path) => {
  return `/assets/${path}`;
};


//if link empty, it returns invisible property to the button.
export const checkLink = (link) => {

  if(link.length == 0){
    return {display: "none"};
  }else{
    return {};
  }

};