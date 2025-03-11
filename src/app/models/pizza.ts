export interface Pizza {
  count: number;
  recipes: []
}

export interface Recipes {
  publisher: string;
  title: string;
  source_url: string;
  recipe_id: string;
  image_url: string;
  social_rank: number;
  publisher_url: string;
}

export interface Recipe {
  recipe: {
    publisher: string;
    title: string;
    source_url: string;
    recipe_id: string;
    image_url: string;
    social_rank: number;
    publisher_url: string;
    ingredients: [];
  }
}
