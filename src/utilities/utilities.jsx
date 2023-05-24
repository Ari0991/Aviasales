export const convertPrice = (num) => {
  let str = String(num);
  let result = '';

  if (str.length <= 5) {
    for (let i = 0; i < str.length; i++) {
      let int = str[i];
      result += int;

      if (i === 1) {
        result += ' ';
      }
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      let int = str[i];
      result += int;

      if (i === 2) {
        result += ' ';
      }
    }
  }

  result += ' ₽';

  return result;
};

export const convertNameInfo = (info) => {
  const { origin, destination } = info;
  return `${origin} - ${destination}`;
};

export const convertDate = (info) => {
  let { date, duration } = info;
  date = new Date(date);
  let depHours = date.getHours();
  let depMinutes = date.getMinutes();
  let arrHours = Math.floor(duration / 60);
  let arrMinutes = duration % 60;

  let finalHours = depHours + arrHours;
  let finalMinutes = depMinutes + arrMinutes;
  if (finalMinutes >= 60) {
    finalMinutes -= 60;
    finalHours += 1;
  }

  return `${formatDate(depHours)}:${formatDate(depMinutes)} - ${formatDate(finalHours)}:${formatDate(finalMinutes)}`;
};

export const convertDuration = (duration) => {
  let hours = String(Math.floor(duration / 60));
  let minutes = String(duration % 60);

  return `${formatDate(hours)}:${formatDate(minutes)}`;
};

const formatDate = (num) => {
  if (String(num).length === 1) {
    num = `0${num}`;
  }

  return num;
};

export const stopsCounter = (arr) => {
  const length = arr.length;
  if (length === 0) {
    return `${length} пересадок`;
  } else if (length === 1) {
    return `${length} пересадка`;
  } else {
    return `${length} пересадки`;
  }
};

export const stopsNameInfo = (arr) => {
  let result = '';
  arr.map((elem) => (result += elem += ', '));

  if (result.length >= 4) {
    result = result.slice(0, -2);
  }
  return result;
};

export const findImage = (carrier) => {
  return `https://pics.avs.io/99/36/${carrier}.png`;
};

export const sortTickets = (array, sort) => {
  switch (sort) {
    case 'lowPrice':
      return array.sort((a, b) => a.price - b.price);
    case 'minDuration':
      return array.sort((a, b) => {
        return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration);
      });
    case 'optimal':
      return array.sort((a, b) => {
        return (
          a.segments[0].stops.length +
            a.segments[1].stops.length -
            (b.segments[0].stops.length + b.segments[1].stops.length) || a.price - b.price
        );
      });
  }
};

export const checkActiveFilteres = (array, filter) => {
  let result = [];

  if (filter.includes('0-transfers')) {
    array.map((elem) => {
      if (elem.segments[0].stops.length === 0 || elem.segments[1].stops.length === 0) {
        result.push(elem);
      }
    });
  } else if (filter.includes('1-transfers')) {
    array.map((elem) => {
      if (elem.segments[0].stops.length === 1 || elem.segments[1].stops.length === 1) {
        result.push(elem);
      }
    });
  } else if (filter.includes('2-transfers')) {
    array.map((elem) => {
      if (elem.segments[0].stops.length === 2 || elem.segments[1].stops.length === 2) {
        result.push(elem);
      }
    });
  } else if (filter.includes('3-transfers')) {
    array.map((elem) => {
      if (elem.segments[0].stops.length === 3 || elem.segments[1].stops.length === 3) {
        result.push(elem);
      }
    });
  }
  return result;
};

export const getVisibleTickets = (array, num) => {
  const visibleTickets = [...array].slice(0, num);
  return visibleTickets;
};
