import { IconSuggestion } from "@Icons/IconsData";
import wordMap from "@Icons/word_map_all";

function iconValuesBySource(iconSuggestion: IconSuggestion, source: string) {
  switch (source) {
    case "parts":
      return iconSuggestion.parts;
    case "categories":
      return iconSuggestion.categories;
    case "tags":
      return iconSuggestion.tags;
    case "related_words":
      return iconSuggestion.related_words;
    default:
      return [];
  }
}

export function createSearchStructure(iconSuggestions: IconSuggestion[]) {
  const searchStructure: { [key: string]: [string, number, number][] } = {};

  const getValue = (source: string) => {
    switch (source) {
      case "parts":
        return 5;
      case "categories":
        return 3;
      case "tags":
        return 4;
      case "related_words":
        return 2;
      default:
        return 0;
    }
  };

  iconSuggestions.forEach((iconSuggestion, index) => {
    ["parts", "related_words", "tags", "categories"].forEach((source) => {
      iconValuesBySource(iconSuggestion, source).forEach((key) => {
        if (!searchStructure[key]) {
          searchStructure[key] = [];
        }

        try {
          // Check if the icon is already in the list
          const existingItemIndex = searchStructure[key].findIndex(
            (item) => item[0] === iconSuggestion.name
          );
          if (existingItemIndex !== -1) {
            const existingItem = searchStructure[key][existingItemIndex];
            if (existingItem[2] > getValue(source)) {
              return;
            } else {
              searchStructure[key].splice(existingItemIndex, 1);
              searchStructure[key].splice(existingItemIndex, 1);
              searchStructure[key].push([
                iconSuggestion.name,
                index,
                getValue(source),
              ]);
            }
          } else {
            searchStructure[key].push([
              iconSuggestion.name,
              index,
              getValue(source),
            ]);
          }
        } catch (error) {
          console.log("Error", error);
        }
      });
    });
  });

  return searchStructure;
}

export function searchIcons(
  searchTerm: string,
  length: number,
  searchStructure: { [key: string]: [string, number, number][] }
): [string, number, number][] {
  // Split the search term
  let trimmed = searchTerm.toLowerCase().trim();
  const split = trimmed.split(" ");

  const iconNames: [string, number, number][] = [];
  const seen: Set<string> = new Set();

  for (let i = 0; i < split.length; i++) {
    const searchTerm = split[i];
    newFunction(searchStructure, searchTerm, seen, iconNames);
  }

  // Sort by value
  iconNames.sort((a, b) => b[2] - a[2]);

  if (iconNames.length < length) {
    // Find related words
    const relIconNames: [string, number, number][] = [];
    const relatedWords = split
      .map((word) => {
        return wordMap[word];
      })
      .flat();

    for (let i = 0; i < relatedWords.length; i++) {
      const searchTerm = relatedWords[i];
      newFunction(searchStructure, searchTerm, seen, relIconNames);
    }

    iconNames.push(
      ...relIconNames
        .sort((a, b) => b[2] - a[2])
        .slice(0, length - iconNames.length)
    );
  }

  return iconNames.slice(0, length);
}

function newFunction(
  searchStructure: { [key: string]: [string, number, number][] },
  searchTerm: string,
  seen: Set<string>,
  iconNames: [string, number, number][]
) {
  Object.keys(searchStructure).forEach((key) => {
    if (key.startsWith(searchTerm) || key.endsWith(searchTerm)) {
      searchStructure[key].forEach((tuple) => {
        const [name, index] = tuple;
        const uniqueKey = `${name}-${index}`;

        if (!seen.has(uniqueKey)) {
          iconNames.push(tuple);
          seen.add(uniqueKey);
        }
      });
    }
  });
}

export function getAllCategories(iconSuggestions: IconSuggestion[]): string[] {
  const categories = new Set<string>();
  console.log("Getting all categories");
  iconSuggestions.forEach((iconSuggestion) => {
    iconSuggestion.categories.forEach((category) => {
      categories.add(category);
    });
  });

  console.log("Categories", categories);

  return Array.from(categories);
}

export const defaultIcons: [string, number, number][] = [
  ["GraduationCap", 1, 1],
  ["Glasses", 1, 1],
  ["Activity", 1, 1],
  ["Book", 0, 0],
  ["Dumbbell", 1, 0],
  ["Heart", 1, 1],
  ["Footprints", 2, 0],
  ["Flower2", 2, 1],
  ["Apple", 1, 1],
  ["BookOpen", 1, 1],
  ["Notebook", 1, 1],
  ["Brain", 1, 1],
  ["Tablets", 1, 1],
  ["Leaf", 1, 0],
  ["CandyOff", 1, 0],
  ["Telescope", 1, 0],
  ["Paintbrush", 1, 0],
  ["Percent", 1, 0],
  ["Code", 1, 0],
  ["Zap", 1, 1],
  ["CircleX", 1, 1],
  ["Bone", 1, 1],
  ["Shield", 3, 0],
  ["Presentation", 1, 1],
  ["Inbox", 1, 1],
  ["PieChart", 1, 1],
  //Secondary
  ["Pencil", 1, 0],
  ["Tv", 1, 0],
  ["CookingPot", 1, 0],
  ["Lamp", 1, 0],
  ["Mountain", 1, 0],
  ["ShoppingCart", 1, 0],
];

export const categoriesList = [
  "gaming",
  "devices",
  "photography",
  "text",
  "design",
  "cursors",
  "arrows",
  "multimedia",
  "time",
  "connectivity",
  "communication",
  "files",
  "brands",
  "furniture",
  "weather",
  "food-beverage",
  "accessibility",
  "account",
  "social",
  "navigation",
  "layout",
  "notifications",
  "development",
  "maths",
  "shapes",
  "home",
  "travel",
  "transportation",
  "medical",
  "maps",
  "currency",
  "money",
  "tools",
  "sustainability",
  "security",
  "charts",
  "emoji",
  "mail",
  "shopping",
  "nature",
  "science",
  "animals",
  "buildings",
  "people",
  "seasons",
  "sports",
];
