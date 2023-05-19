import React from 'react';

import {
  convertPrice,
  convertNameInfo,
  convertDate,
  convertDuration,
  stopsCounter,
  stopsNameInfo,
  findImage,
} from '../../utilities/utilities.js';

import classes from './Card.module.scss';

const Card = ({ carrier, price, departure, arrival }) => {
  return (
    <li className={classes['tickets__list-item']}>
      <div className={classes['card']}>
        <div className={classes['card__price']}>{convertPrice(price)}</div>
        <img className={classes['card__logo']} src={findImage(carrier)} />
        <ul className={classes['card__info']}>
          <li className={classes['card__info-item']}>
            <div className={classes['card__info-item-title']}>{convertNameInfo(departure)}</div>
            <div className={classes['card__info-item-description']}>{convertDate(departure)}</div>
          </li>
          <li className={classes['card__info-item']}>
            <div className={classes['card__info-item-title']}>В пути</div>
            <div className={classes['card__info-item-description']}>{convertDuration(departure.duration)}</div>
          </li>
          <li className={classes['card__info-item']}>
            <div className={classes['card__info-item-title']}>{stopsCounter(departure.stops)}</div>
            <div className={classes['card__info-item-description']}>{stopsNameInfo(departure.stops)}</div>
          </li>
          <li className={classes['card__info-item']}>
            <div className={classes['card__info-item-title']}>{convertNameInfo(arrival)}</div>
            <div className={classes['card__info-item-description']}>{convertDate(arrival)}</div>
          </li>
          <li className={classes['card__info-item']}>
            {' '}
            <div className={classes['card__info-item-title']}>В пути</div>
            <div className={classes['card__info-item-description']}>{convertDuration(arrival.duration)}</div>
          </li>
          <li className={classes['card__info-item']}>
            <div className={classes['card__info-item-title']}>{stopsCounter(arrival.stops)}</div>
            <div className={classes['card__info-item-description']}>{stopsNameInfo(arrival.stops)}</div>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Card;
