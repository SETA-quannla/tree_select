export type OneFolderType = {
  name: string;
  visible: "all" | "only" | "specific";
  specificUser?: string[];
  children?: OneFolderType[];
  id: string;
};

export type OneNameType = {
  id: string;
  name: string;
};

export const names: OneNameType[] = [
  { id: "1", name: "name1" },
  { id: "2", name: "name2" },
  { id: "3", name: "name3" },
  { id: "4", name: "name4" },
];

export const folderDataTree: OneFolderType[] = [
  { name: "Folder 1", visible: "all", id: "123" },
  {
    name: "Folder 2",
    visible: "all",
    id: "456",
    children: [
      {
        name: "Folder 3",
        visible: "all",
        children: [{ name: "Folder 4", visible: "all", id: "456-1-1" }],
        id: "456-1",
      },
    ],
  },
];
