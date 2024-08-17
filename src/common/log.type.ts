type Rating = 'high' | 'medium' | 'low';

export type LogType = {
  date: String,
  title: String,
  relatedPeople: String[],
  summary: String,
  body: String,
  rating: Rating,
};
