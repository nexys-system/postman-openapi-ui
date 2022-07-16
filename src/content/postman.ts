import postmanToOpenApi from "postman-to-openapi";

const options = {
  defaultTag: "General",
};

const postmanToOpenApiWrap = async (postmanCollection: string) => {
  // Async/await
  try {
    return await postmanToOpenApi(postmanCollection, undefined, options);
  } catch (err) {
    console.log(err);
  }
};

export default postmanToOpenApiWrap;
