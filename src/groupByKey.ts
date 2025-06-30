type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): {} {
  if (items.length === 0) {
    return {};
  }

  const ITEM = items[0][key];

  type ItemType = typeof ITEM;

  const groups: GroupsMap<ItemType> = items.reduce(
    (keyValues: GroupsMap<ItemType>, item: ItemType) => ({
      ...keyValues,
      [item[key]]: [],
    }),
    {},
  );

  for (const group of Object.keys(groups)) {
    groups[group] = items.filter((item: ItemType) => {
      return typeof item[key] === 'number'
        ? item[key] === +group
        : item[key] === group;
    });
  }

  return groups;
}
