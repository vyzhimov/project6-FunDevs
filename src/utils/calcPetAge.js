export const calcPetAge = birthDate => {
  const now = new Date(),
    birthdate = new Date(birthDate),
    diff = now.getTime() - birthdate.getTime(),
    years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)),
    months = Math.floor(
      (diff % (1000 * 60 * 60 * 24 * 365.25)) /
        (1000 * 60 * 60 * 24 * (365.25 / 12))
    );

  let termin = '';

  if (years) {
    termin = years === 1 ? 'year' : 'years';
  } else {
    termin = 'mon';
  }

  const age = years ? `${years} ${termin}` : `${months} ${termin}`;

  return age;
};
