type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): {} {
  if (items.length === 0) {
    return {};
  }

  if (!items[0].hasOwnProperty(key)) {
    return {};
  }

  const ITEM = items[0][key];

  type ItemType = typeof ITEM;

  return items.reduce((keyValues: GroupsMap<ItemType>, item: object) => {
    if (!keyValues.hasOwnProperty(key)) {
      const group: ItemType = item[key];

      return {
        ...keyValues,
        [group]: items.filter((item2: ItemType) => {
          return typeof item2[key] === 'number'
            ? item2[key] === +group
            : item2[key] === group;
        }),
      };
    }

    return keyValues;
  }, {});
}
