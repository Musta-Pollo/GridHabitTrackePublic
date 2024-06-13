import React from "react";
import { Text, View } from "react-native";

class IconSuggestion {
  name: string;
  parts: string[];
  related_words: string[];
  tags: string[];
  categories: string[];

  constructor(data: {
    name: string;
    parts: string[];
    related_words: string[];
    tags: string[];
    categories: string[];
  }) {
    this.name = data.name;
    this.parts = data.parts;
    this.related_words = data.related_words;
    this.tags = data.tags;
    this.categories = data.categories;
  }
}

const iconSuggestions = [
  new IconSuggestion({
    name: "HandHelping",
    parts: ["hand", "helping", "handhelping"],
    related_words: [
      "accord",
      "arrangement",
      "concord",
      "correspondence",
      "understanding",
      "manus",
      "paw",
      "hired hand",
      "mitt",
      "mauler",
      "hook",
      "reach",
      "handwriting",
      "script",
      "pass",
      "turn over",
      "pass on",
      "deal",
      "helping hand",
      "give",
      "aid",
      "service",
      "assistance",
      "assist",
      "helper",
      "mendicancy",
      "beggary",
      "brotherly love",
      "bridge player",
      "hired man",
      "finger",
      "thumb",
      "arm",
      "serving",
      "aid",
      "assistance",
      "assist",
      "portion",
      "marriage offer",
      "marriage proposal",
      "proposal of marriage",
      "proposition",
      "offer",
      "greek valerian",
      "polemonium caeruleum",
      "polemonium van-bruntiae",
      "polymonium caeruleum van-bruntiae",
      "vagrancy",
      "mendacity",
      "except",
    ],
    tags: ["agreement", "help", "proposal", "charity", "begging", "terms"],
    categories: ["emoji"],
  }),
  new IconSuggestion({
    name: "Underline",
    parts: ["underline"],
    related_words: [
      "schoolbook",
      "textbook",
      "underscore",
      "school text",
      "text edition",
      "textual matter",
      "initialize",
      "arrange",
      "emphasize",
      "data format",
      "data formatting",
      "edition",
      "highlighting",
      "highlight",
      "highlights",
      "outline",
      "note",
      "accentuate",
      "draw",
      "emphasise",
      "say",
      "re-emphasise",
      "indicate",
      "mention",
      "specify",
      "demonstrate",
      "make",
      "noting",
      "show",
      "commemorate",
      "blinking",
      "italics",
      "tympanum",
      "formatting",
      "codex",
      "ins",
      "parchment",
      "messaging",
      "gospels",
      "flipped",
      "asean",
      "simulcast",
      "branded",
      "italics",
      "unicode",
      "licensed",
      "bee",
      "quiz",
      "font",
      "importance",
    ],
    tags: ["text", "format"],
    categories: ["text"],
  }),
];

function createSearchStructure(iconSuggestions: IconSuggestion[]) {
  const searchStructure: { [key: string]: string[] } = {};

  iconSuggestions.forEach((iconSuggestion) => {
    const keys = [
      ...iconSuggestion.parts,
      ...iconSuggestion.related_words,
      ...iconSuggestion.tags,
      ...iconSuggestion.categories,
    ];

    keys.forEach((key) => {
      if (!searchStructure[key]) {
        searchStructure[key] = [];
      }

      searchStructure[key].push(iconSuggestion.name);
    });
  });

  return searchStructure;
}

function searchIcons(
  searchTerm: string,
  searchStructure: { [key: string]: string[] }
) {
  const iconNames: string[] = [];

  Object.keys(searchStructure).forEach((key) => {
    if (key.startsWith(searchTerm) || key.endsWith(searchTerm)) {
      iconNames.push(...searchStructure[key]);
    }
  });

  // Remove duplicates
  return [...new Set(iconNames)];
}

const IconList = () => {
  console.log(searchIcons("han", createSearchStructure(iconSuggestions)));
  return (
    <View>
      {iconSuggestions.map((icon, index) => (
        <Text key={index}>{icon.name}</Text>
      ))}
    </View>
  );
};

export default IconList;
