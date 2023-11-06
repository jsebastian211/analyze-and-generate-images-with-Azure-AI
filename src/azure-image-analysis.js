

export function analyzeImage(imageUrl) {
  alert("1")
  const endpoint = "https://instanciaprueba.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=tags,read,caption,denseCaptions,smartCrops,objects,people";
  const API_KEY = `${process.env.REACT_APP_API_KEY}` ;
  console.log(API_KEY);
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": API_KEY
    },
    body: JSON.stringify({ url: imageUrl })
  };
  console.log(process.env);
  return fetch(endpoint, params)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => console.log(error));
}
