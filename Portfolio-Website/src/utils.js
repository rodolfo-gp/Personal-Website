//makes the links within the program easier to type
export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

//if link for demo is empty, it returns invisible property to the demo button.
export const checkDemoLink = (link) => {

  if(link === ""){
    return {display: "none"};
  }else{
    return {};
  }

};