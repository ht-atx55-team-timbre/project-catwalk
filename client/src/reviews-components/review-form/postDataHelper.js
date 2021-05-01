const characteristicsHelper = (characteristics) => {
  const data = {}
  for (const key in characteristics) {
    data[characteristics[key]['id']] = Number(characteristics[key]['value'])
  }
  return data;
}

const postDataHelper = (product_id, rating, summary, body, recommend, userName, email, files, characteristics) => {
  const characteristicsData = characteristicsHelper(characteristics);
  return {
    product_id: product_id,
    rating: rating,
    summary: summary,
    body: body,
    recommend: recommend,
    name: userName,
    email: email,
    photos: files,
    characteristics: characteristicsData
  }
}

export default postDataHelper;
