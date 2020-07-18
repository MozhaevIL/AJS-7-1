export default function getSpecialData(character) {
  const specialsArray = [];

  function specialDestructor(object) {
    const {
      id, name, description = 'описание недоступно', icon,
    } = object;
    return {
      id, name, description, icon,
    };
  }

  for (const attack of character.special) {
    specialsArray.push(specialDestructor(attack));
  }

  return specialsArray;
}
