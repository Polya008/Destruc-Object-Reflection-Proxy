export default function attackOption(obj) {
  const arr = [];
  const { special } = obj;
  for (const item in special) {
    const { id, name, icon, description = 'Описание недоступно' } = special[item];
    arr.push({
      id, name, icon, description,
    });
  }
  return arr;
}