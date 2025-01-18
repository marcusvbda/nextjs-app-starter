"use server";

export const fetchExample = async (config: any) => {
  console.log(config);
  return {
    total: 50,
    items: [
      { name: "Airi Satou", age: 37 },
      { name: "Dai Rios", age: 69 },
      { name: "Ruby West", age: 49 },
      { name: "Brielle Williamson", age: 38 },
      { name: "Jena Gaines", age: 69 },
      { name: "Haley Kennedy", age: 57 },
      { name: "Jayden Romero", age: 49 },
      { name: "Michael Silva", age: 44 },
      { name: "Garrett Winters", age: 61 },
      { name: "Paul Byrd", age: 39 },
    ],
  };
};
