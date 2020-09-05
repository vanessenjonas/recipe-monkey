export interface Recipe {
  id: String,
  title: String,
  subtitle?: String,
  timeTotal: number,
  recipeYield: number,
  images: Image[],
  ingredients: String[],
  instructions: String[]
  published: Date
}

export interface Image {
  url: String,
  title?: String
}
