// Separate first name and last name from a full name.
export const getFirstAndLastName = (fullName: string) => {
  const spaceIndex = fullName.lastIndexOf(' ');
  const firstName = fullName.substring(0, spaceIndex);
  const lastName = fullName.substring(spaceIndex + 1);
  return { firstName, lastName };
};
